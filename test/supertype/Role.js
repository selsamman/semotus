'use strict';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) {
 d.__proto__ = b;
}) ||
        function (d, b) {
 for (var p in b) {
if (b.hasOwnProperty(p)) {
d[p] = b[p];
}
}
};
    return function (d, b) {
        extendStatics(d, b);
        function __() {
 this.constructor = d;
}
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function') {
r = Reflect.decorate(decorators, target, key, desc);
}
    else {
for (var i = decorators.length - 1; i >= 0; i--) {
if (d = decorators[i]) {
r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
}
}
}
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function') {
return Reflect.metadata(k, v);
}
};
Object.defineProperty(exports, '__esModule', { value: true });
var index_1 = require('../../index');
var Customer_1 = require('./Customer');
var Account_1 = require('./Account');
var Role = (function (_super) {
    __extends(Role, _super);
    function Role(customer, account, relationship) {
        var _this = _super.call(this) || this;
        _this.relationship = 'primary';
        _this.customer = customer;
        _this.account = account;
        if (relationship)            {
_this.relationship = relationship;
}
        return _this;
    }

    return Role;
}(index_1.Supertype));
__decorate([
    index_1.property(),
    __metadata('design:type', String)
], Role.prototype, 'relationship', void 0);
__decorate([
    index_1.property({ getType: function () {
 return Customer_1.Customer;
} }),
    __metadata('design:type', Customer_1.Customer)
], Role.prototype, 'customer', void 0);
__decorate([
    index_1.property({ getType: function () {
 return Account_1.Account;
} }),
    __metadata('design:type', Account_1.Account)
], Role.prototype, 'account', void 0);
Role = __decorate([
    index_1.supertypeClass,
    __metadata('design:paramtypes', [Object, Object, Object])
], Role);
exports.Role = Role;
//# sourceMappingURL=Role.js.map