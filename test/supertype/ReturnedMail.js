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
var Address_1 = require('./Address');
var ReturnedMail = (function (_super) {
    __extends(ReturnedMail, _super);
    function ReturnedMail(address, date) {
        var _this = _super.call(this) || this;
        _this.address = address;
        _this.date = date;
        return _this;
    }
    return ReturnedMail;
}(index_1.Supertype));
__decorate([
    index_1.property(),
    __metadata('design:type', Date)
], ReturnedMail.prototype, 'date', void 0);
__decorate([
    index_1.property({ getType: function () {
 return Address_1.Address;
} }),
    __metadata('design:type', Address_1.Address)
], ReturnedMail.prototype, 'address', void 0);
ReturnedMail = __decorate([
    index_1.supertypeClass,
    __metadata('design:paramtypes', [Object, Object])
], ReturnedMail);
exports.ReturnedMail = ReturnedMail;
//# sourceMappingURL=ReturnedMail.js.map