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
var Customer = Customer_1 = (function (_super) {
    __extends(Customer, _super);
    function Customer(first, middle, last) {
        var _this = _super.call(this) || this;
        _this.email = '';
        _this.firstName = '';
        _this.middleName = '';
        _this.lastName = '';
        _this.local1 = 'local1';
        _this.local2 = 'local2';
        _this.nullNumber = null;
        _this.nullDate = null;
        _this.nullString = null;
        _this.roles = [];
        _this.type = 'primary';
        _this.secondaryReferrers = [];
        _this.addresses = [];
        _this.firstName = first;
        _this.lastName = last;
        _this.middleName = middle;
        return _this;
    }
    Customer.prototype.addAddress = function (lines, city, state, zip) {
        var address = new Address_1.Address(this);
        address.lines = lines;
        address.city = city;
        address.state = state;
        address.postalCode = zip;
        address.customer = this;
        this.addresses.push(address);
    };
    return Customer;
}(index_1.Supertype));
__decorate([
    index_1.property(),
    __metadata("design:type", String)
], Customer.prototype, "email", void 0);
__decorate([
    index_1.property(),
    __metadata("design:type", String)
], Customer.prototype, "firstName", void 0);
__decorate([
    index_1.property(),
    __metadata("design:type", String)
], Customer.prototype, "middleName", void 0);
__decorate([
    index_1.property(),
    __metadata("design:type", String)
], Customer.prototype, "lastName", void 0);
__decorate([
    index_1.property(),
    __metadata("design:type", String)
], Customer.prototype, "local1", void 0);
__decorate([
    index_1.property(),
    __metadata("design:type", String)
], Customer.prototype, "local2", void 0);
__decorate([
    index_1.property(),
    __metadata("design:type", Number)
], Customer.prototype, "nullNumber", void 0);
__decorate([
    index_1.property(),
    __metadata("design:type", Date)
], Customer.prototype, "nullDate", void 0);
__decorate([
    index_1.property(),
    __metadata("design:type", String)
], Customer.prototype, "nullString", void 0);
__decorate([
    index_1.property({ getType: function () { return Role_1.Role; } }),
    __metadata("design:type", Array)
], Customer.prototype, "roles", void 0);
__decorate([
    index_1.property(),
    __metadata("design:type", Customer)
], Customer.prototype, "referredBy", void 0);
__decorate([
    index_1.property(),
    __metadata("design:type", String)
], Customer.prototype, "type", void 0);
__decorate([
    index_1.property({ fetch: true, type: Customer_1 }),
    __metadata("design:type", Array)
], Customer.prototype, "referrers", void 0);
__decorate([
    index_1.property({ fetch: true, type: Customer_1 }),
    __metadata("design:type", Array)
], Customer.prototype, "secondaryReferrers", void 0);
__decorate([
    index_1.property({ type: Address_1.Address, fetch: true }),
    __metadata("design:type", Array)
], Customer.prototype, "addresses", void 0);
Customer = Customer_1 = __decorate([
    index_1.supertypeClass,
    __metadata("design:paramtypes", [Object, Object, Object])
], Customer);
exports.Customer = Customer;
var Customer_1;
//# sourceMappingURL=Customer.js.map