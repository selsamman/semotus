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
var Customer_1 = require("./Customer");
var Account_1 = require("./Account");
var ReturnedMail_1 = require("./ReturnedMail");
require("reflect-metadata");
var Address = (function (_super) {
    __extends(Address, _super);
    function Address(customer, lines) {
        var _this = _super.call(this) || this;
        _this.lines = [];
        _this.city = '';
        _this.state = '';
        _this.postalCode = '';
        _this.country = 'US';
        _this.returnedMail = [];
        _this.lines = lines || [];
        _this.customer = customer;
        return _this;
    }
    Address.prototype.addReturnedMail = function (date) {
        this.returnedMail.push(new ReturnedMail_1.ReturnedMail(this, date));
    };
    return Address;
}(index_1.Supertype));
__decorate([
    index_1.property({ type: String }),
    __metadata("design:type", Array)
], Address.prototype, "lines", void 0);
__decorate([
    index_1.property(),
    __metadata("design:type", String)
], Address.prototype, "city", void 0);
__decorate([
    index_1.property(),
    __metadata("design:type", String)
], Address.prototype, "state", void 0);
__decorate([
    index_1.property(),
    __metadata("design:type", String)
], Address.prototype, "postalCode", void 0);
__decorate([
    index_1.property(),
    __metadata("design:type", String)
], Address.prototype, "country", void 0);
__decorate([
    index_1.property({ getType: function () { return Customer_1.Customer; } }),
    __metadata("design:type", Customer_1.Customer)
], Address.prototype, "customer", void 0);
__decorate([
    index_1.property(),
    __metadata("design:type", String)
], Address.prototype, "type", void 0);
__decorate([
    index_1.property({ type: ReturnedMail_1.ReturnedMail }),
    __metadata("design:type", Array)
], Address.prototype, "returnedMail", void 0);
__decorate([
    index_1.property({ getType: function () { return Account_1.Account; } }),
    __metadata("design:type", Account_1.Account)
], Address.prototype, "account", void 0);
Address = __decorate([
    index_1.supertypeClass,
    __metadata("design:paramtypes", [Object, Object])
], Address);
exports.Address = Address;
//# sourceMappingURL=Address.js.map