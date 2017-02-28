"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../index");
var Role_1 = require("./Role");
var Address_1 = require("./Address");
var Transaction_1 = require("./Transaction");
var Account = (function (_super) {
    __extends(Account, _super);
    function Account(number, title, customer, address) {
        var _this = _super.call(this) || this;
        _this.transactions = [];
        _this.fromAccountTransactions = [];
        _this.roles = [];
        if (address) {
            _this.address = address;
            _this.address.account = _this;
        }
        _this.number = number;
        _this.title = title;
        if (customer)
            _this.addCustomer(customer);
        return _this;
    }
    ;
    Account.prototype.addCustomer = function (customer, relationship) {
        var role = new Role_1.Role(customer, this, relationship);
        this.roles.push(role);
        customer.roles.push(role);
    };
    ;
    Account.prototype.debit = function (amount) {
        new Transaction_1.Debit(this, 'debit', amount);
    };
    ;
    Account.prototype.credit = function (amount) {
        new Transaction_1.Credit(this, 'credit', amount);
    };
    ;
    Account.prototype.transferFrom = function (amount, fromAccount) {
        new Transaction_1.Xfer(this, 'xfer', amount, fromAccount);
    };
    ;
    Account.prototype.transferTo = function (amount, toAccount) {
        new Transaction_1.Xfer(toAccount, 'xfer', amount, this);
    };
    ;
    Account.prototype.getBalance = function () {
        var balance = 0;
        var thisAccount = this;
        function processTransactions(transactions) {
            for (var ix = 0; ix < transactions.length; ++ix) {
                switch (transactions[ix].type) {
                    case 'debit':
                        balance -= transactions[ix].amount;
                        break;
                    case 'credit':
                        balance += transactions[ix].amount;
                        break;
                    case 'xfer':
                        balance += transactions[ix].amount * (transactions[ix].fromAccount == thisAccount ? -1 : 1);
                }
            }
        }
        processTransactions(this.transactions);
        processTransactions(this.fromAccountTransactions);
        return balance;
    };
    ;
    return Account;
}(index_1.Supertype));
__decorate([
    index_1.property({ type: Transaction_1.Transaction, fetch: true }),
    __metadata("design:type", Array)
], Account.prototype, "transactions", void 0);
__decorate([
    index_1.property({ type: Transaction_1.Transaction, fetch: true }),
    __metadata("design:type", Array)
], Account.prototype, "fromAccountTransactions", void 0);
__decorate([
    index_1.property(),
    __metadata("design:type", Number)
], Account.prototype, "number", void 0);
__decorate([
    index_1.property({ type: String }),
    __metadata("design:type", Array)
], Account.prototype, "title", void 0);
__decorate([
    index_1.property({ getType: function () { return Role_1.Role; } }),
    __metadata("design:type", Array)
], Account.prototype, "roles", void 0);
__decorate([
    index_1.property({ getType: function () { return Address_1.Address; } }),
    __metadata("design:type", Address_1.Address)
], Account.prototype, "address", void 0);
Account = __decorate([
    index_1.supertypeClass,
    __metadata("design:paramtypes", [Object, Object, Object, Object])
], Account);
exports.Account = Account;
//# sourceMappingURL=Account.js.map