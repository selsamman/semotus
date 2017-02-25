/*
 * Banking example shows PersistObjectTemplate with
 * many-to-many relationships
 *
 */

declare function require(name:string);

var ClientObjectTemplate = require('../../index.js')._createObject();
ClientObjectTemplate.role = "client";
ClientObjectTemplate._useGettersSetters = false;

var ServerObjectTemplate = require('../../index.js')._createObject();
ServerObjectTemplate.role = "server";
ServerObjectTemplate._useGettersSetters = true;
ServerObjectTemplate.maxCallTime = 60 * 1000;

import {Supertype, supertypeClass, property, remote} from '../../index';
import { expect } from 'chai';
import * as mocha from 'mocha';
import * as _ from 'underscore';
import {Customer} from "./Customer";
import Promise = require('bluebird');
import {Role} from "./Role";
import {Account} from "./Account";
import {ReturnedMail} from "./ReturnedMail";
import {Address} from "./Address";
import {Transaction, Debit, Credit, Xfer} from './Transaction';
import {Q} from 'q';

function sendToServer(message) {
    ServerObjectTemplate.processMessage(message);
}

function sendToClient(message) {
    ClientObjectTemplate.processMessage(message);
}

var clientSessionId = ClientObjectTemplate.createSession('client', sendToServer);
var serverSessionId = ServerObjectTemplate.createSession('server', sendToClient);

ClientObjectTemplate.enableSendMessage(true, sendToServer);
ServerObjectTemplate.enableSendMessage(true, sendToClient);

var ClientController = createTemplates(ClientObjectTemplate);
var ServerController = createTemplates(ServerObjectTemplate);

var clientController = ClientObjectTemplate.sessionize(new ClientController());
ClientObjectTemplate.controller = clientController;

var serverController = ServerObjectTemplate._createEmptyObject(ServerController, clientController.__id__);
ServerObjectTemplate.syncSession();
ServerObjectTemplate.controller = serverController;
ServerObjectTemplate.__changeTracking__ = true;
ServerObjectTemplate.reqSession = {loggingID: "test", semotus: {}};
ServerObjectTemplate.logLevel = 1;
ServerObjectTemplate.logger.setLevel('info;activity:dataLogging');

var serverAssert;

function createTemplates(objectTemplate) {

    @supertypeClass
    class Controller extends Supertype {

        @remote({on: "server"})
        mainFunc  () : Q.Promise {
            serverAssert();
        };
        sam:     Customer;
        karen:   Customer;
        ashling: Customer;
        constructor () {
            super()

            // Setup customers and addresses
            var sam = new Customer("Sam", "M", "Elsamman");
            var karen = new Customer("Karen", "M", "Burke");
            var ashling = new Customer("Ashling", "", "Burke");

            // Setup referrers
            sam.referrers = [ashling, karen];
            ashling.referredBy = sam;
            karen.referredBy = sam;    sam.local1 = "foo";

            sam.local2 = "bar";

            // Setup addresses
            sam.addAddress(["500 East 83d", "Apt 1E"], "New York", "NY", "10028");
            sam.addAddress(["38 Haggerty Hill Rd", ""], "Rhinebeck", "NY", "12572");

            sam.addresses[0].addReturnedMail(new Date());
            sam.addresses[0].addReturnedMail(new Date());
            sam.addresses[1].addReturnedMail(new Date());

            karen.addAddress(["500 East 83d", "Apt 1E"], "New York", "NY", "10028");
            karen.addAddress(["38 Haggerty Hill Rd", ""], "Rhinebeck", "NY", "12572");

            karen.addresses[0].addReturnedMail(new Date());

            ashling.addAddress(["End of the Road", ""], "Lexington", "KY", "34421");

            // Setup accounts
            var samsAccount = new Account(1234, ['Sam Elsamman'], sam, sam.addresses[0]);
            var jointAccount = new Account(123, ['Sam Elsamman', 'Karen Burke', 'Ashling Burke'], sam, karen.addresses[0]);
            jointAccount.addCustomer(karen, "joint");
            jointAccount.addCustomer(ashling, "joint");

            samsAccount.credit(100);                        // Sam has 100
            samsAccount.debit(50)                           // Sam has 50
            jointAccount.credit(200);                       // Joint has 200
            jointAccount.transferTo(100, samsAccount);      // Joint has 100, Sam has 150
            jointAccount.transferFrom(50, samsAccount);     // Joint has 150, Sam has 100
            jointAccount.debit(25);                         // Joint has 125

            this.sam = sam;
            this.karen = karen;
            this.ashling = ashling;
        }
        preServerCall (changeCount, objectsChanged) {
            for(var templateName in objectsChanged)
                this.preServerCallObjects[templateName] = true;
        }
        postServerCall () {
            if (this.postServerCallThrowException)
                throw "postServerCallThrowException"
            if (this.postServerCallThrowRetryException)
                throw "Retry"
        }
        validateServerCall () {
            return this.canValidateServerCall;
        }

        preServerCallObjects: Object = {};
        preServerCalls: Number = 0;
        postServerCalls: Number = 0;
        preServerCallThrowException: Boolean = false;
        postServerCallThrowException: Boolean = false;
        postServerCallThrowRetryException: Boolean = false;
        serverCallThrowException: Boolean = false;
        canValidateServerCall: Boolean = true;
    };

    return Controller;
}

var Q = require('Q');

function client() {

}

function server() {
}


describe("Banking Example", function () {


    it("pass object graph to server and return", function (done) {
       serverAssert = function () {
            expect(serverController.sam.roles[0].account.getBalance()).to.equal(100);
            expect(serverController.sam.roles[1].account.getBalance()).to.equal(125);
            expect(serverController.preServerCallObjects['Controller']).to.equal(true);
       }
       clientController.mainFunc().then(function () {
           done();
       }).fail(function(e) {
           done(e)
       });
    });
    it("change results on server", function (done) {
        serverAssert = function () {
            expect(serverController.sam.roles[0].account.transactions[0].__changed__).to.equal(true);
            serverController.sam.roles[0].account.transactions[0].__changed__ = false;
            serverController.sam.roles[0].account.transactions[0].amount = 200;
            expect(serverController.sam.roles[0].account.transactions[0].__changed__).to.equal(true);
        }
        clientController.mainFunc().then(function () {
            expect(serverController.sam.roles[0].account.getBalance()).to.equal(200);
            done();
        }).fail(function(e) {
            done(e)
        });
    });
    it("throw an execption", function (done) {
        serverAssert = function () {
            throw "get stuffed";
        }
        clientController.mainFunc()
            .then(function () {
                expect("Should not be here").to.equal(false);
            }, function (e) {
                expect(e.message).to.equal("get stuffed");
                done()
            }).fail(function(e) {
                done(e)
            });
    });
    it("can get a synchronization error", function (done) {
        serverAssert = function () {
            throw "get stuffed";
        }
        clientController.mainFunc()
            .then(function () {
                expect("Should not be here").to.equal(false);
            }, function (e) {
                expect(e.message).to.equal("get stuffed");
                done()
            }).fail(function(e) {
                done(e)
            });
    });
    it("can get a synchronization error from overlapping calls", function (done) {
        this.timeout(7000);
        serverAssert = function () {
            return Q.delay(1000);
        }
        clientController.mainFunc()
            .then(function () {
                expect("Should not be here").to.equal(false);
            });
        clientController.mainFunc()
            .then(function () {
                expect("Should not be here").to.equal(false);
            }, function (e) {
                console.log(e);
                Q.delay(1000).then(function () {done()});
            }).fail(function(e) {
                done(e)
            });
    });

    it("change tracking to work with arrays", function (done) {
        serverAssert = function () {
            expect(serverController.sam.roles[0].account.__changed__).to.equal(true);
            serverController.sam.roles[0].account.__changed__ = false;
            serverController.sam.roles[0].account.debit(50);
            expect(serverController.sam.roles[0].account.__changed__).to.equal(false);
            serverController.__template__.__objectTemplate__.MarkChangedArrayReferences();
            expect(serverController.sam.roles[0].account.__changed__).to.equal(true);
        }
        var balance = clientController.sam.roles[0].account.getBalance();
        serverController.sam.roles[0].account.__changed__ = false;
        clientController.sam.roles[0].account.debit(50);
        clientController.mainFunc().then(function () {
             expect(serverController.sam.roles[0].account.getBalance()).to.equal(balance - 100);
             done();
        }).fail(function(e) {
            done(e)
        });
    });


});
