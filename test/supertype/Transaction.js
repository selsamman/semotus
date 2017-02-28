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
var Account_1 = require("./Account");
var Transaction = (function (_super) {
    __extends(Transaction, _super);
    function Transaction(account, type, amount) {
        var _this = _super.call(this) || this;
        _this.account = account;
        _this.type = type;
        _this.amount = amount;
        if (account)
            account.transactions.push(_this);
        return _this;
    }
    ;
    return Transaction;
}(index_1.Supertype));
__decorate([
    index_1.property(),
    __metadata("design:type", Number)
], Transaction.prototype, "amount", void 0);
__decorate([
    index_1.property(),
    __metadata("design:type", String)
], Transaction.prototype, "type", void 0);
__decorate([
    index_1.property({ getType: function () { return Account_1.Account; } }),
    __metadata("design:type", Account_1.Account)
], Transaction.prototype, "account", void 0);
Transaction = __decorate([
    index_1.supertypeClass,
    __metadata("design:paramtypes", [Object, Object, Object])
], Transaction);
exports.Transaction = Transaction;
var Debit = (function (_super) {
    __extends(Debit, _super);
    function Debit(account, type, amount) {
        return _super.call(this, account, type, amount) || this;
    }
    return Debit;
}(Transaction));
Debit = __decorate([
    index_1.supertypeClass,
    __metadata("design:paramtypes", [Object, Object, Object])
], Debit);
exports.Debit = Debit;
var Credit = (function (_super) {
    __extends(Credit, _super);
    function Credit(account, type, amount) {
        return _super.call(this, account, type, amount) || this;
    }
    return Credit;
}(Transaction));
Credit = __decorate([
    index_1.supertypeClass,
    __metadata("design:paramtypes", [Object, Object, Object])
], Credit);
exports.Credit = Credit;
var Xfer = (function (_super) {
    __extends(Xfer, _super);
    function Xfer(account, type, amount, fromAccount) {
        var _this = _super.call(this, account, type, amount) || this;
        _this.fromAccount = fromAccount;
        if (fromAccount)
            fromAccount.fromAccountTransactions.push(_this);
        return _this;
    }
    return Xfer;
}(Transaction));
__decorate([
    index_1.property({ fetch: true, getType: function () { return Account_1.Account; } }),
    __metadata("design:type", Account_1.Account)
], Xfer.prototype, "fromAccount", void 0);
Xfer = __decorate([
    index_1.supertypeClass,
    __metadata("design:paramtypes", [Object, Object, Object, Object])
], Xfer);
exports.Xfer = Xfer;
//# sourceMappingURL=Transaction.js.map