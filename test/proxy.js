var expect = require('chai').expect;
var Q = require("q");
var _ = require("underscore");
/*
describe("Compare Proxy to Getter / Setter", function () {
    this.timeout(10000);
    it("Can set a property value 10,000,000 times", function () {
        var count = 1;
        var last;
        var foo = {
            bar: 20
        }
        var startTime = (new Date()).getTime();
        var x = 10000000;
        while(--x) {
            foo.bar = x;
            last = foo.bar;
            ++count;
        }
        expect(count).to.equal(10000000);
        expect(foo.bar).to.equal(1);
        console.log("\n10 Million naked property sets = " + Math.floor((new Date()).getTime() - startTime));
    });
    it("Can set a property value 10,000,000 times with an inline getter and setter (inline)", function () {
        var count = 1;
        var last;
        var foo = {
            _bar: 20,
            get bar () {
                return this._bar;
            },
            set bar (bar) {
                ++count;
                this._bar = bar;
            },
        }
        var startTime = (new Date()).getTime();
        var x = 10000000;
        while(--x) {
            foo.bar = x;
            last = foo.bar;
        }
        x = 10000000
        while(--x) {
            last = foo.bar;
        }
        expect(count).to.equal(10000000);
        expect(foo.bar).to.equal(1);
        console.log("\n10 Million property sets with an inline getter and setter = " + Math.floor((new Date()).getTime() - startTime));
    });
    it("Can set a property value 10,000,000 times with a getter and setter as Object.defineProperty", function () {
        var count = 1;
        var last;
        var foo = {
            _bar: 20
        };
        (function (obj, prop) {
            Object.defineProperty(foo, 'bar', {
                get () {
                    return obj[prop];
                },
                set (val) {
                    ++count;
                    obj[prop] = val;
                },
            });
        }
        )(foo, '_bar');
        var startTime = (new Date()).getTime();
        var x = 10000000;
        while(--x) {
            foo.bar = x;
            last = foo.bar;
        }
        expect(count).to.equal(10000000);
        expect(foo.bar).to.equal(1);
        console.log("\n10 Million property sets with a getter and setter as Object.defineProperty = " + Math.floor((new Date()).getTime() - startTime));
    });
    it("Can set a property value 10,000,000 times with a proxy", function () {
        var count = 1;
        var last;
        var foo = {
            bar: 20,
        }
        foo = new Proxy(foo, {set (obj, prop, val) {
                obj[prop] = val;
                ++count;
                return true;
            }
        });
        var startTime = (new Date()).getTime();
        var x = 10000000
        while(--x) {
            foo.bar = x;
            last = foo.bar;
        }
        expect(count).to.equal(10000000);
        expect(foo.bar).to.equal(1);
        console.log("\n10 Million property sets with a proxy = " + Math.floor((new Date()).getTime() - startTime));
    });
});
*/