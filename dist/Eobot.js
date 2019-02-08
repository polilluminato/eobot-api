"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
// Promise based HTTP client for the browser and node.js
const axios_1 = __importDefault(require("axios"));
// Send error if any prop is undefined
const requiredProps_1 = __importDefault(require("./lib/requiredProps"));
// Convert {foo: 'bar', what: 'ever'} to foo=bar&what=ever
const objectToQueryString_1 = __importDefault(require("./lib/objectToQueryString"));
class Eobot {
    constructor(userAccount) {
        // Api url
        this.urlApi = 'https://www.eobot.com/api.aspx?';
        this.account = {
            userid: 0,
            email: '',
            password: '',
        };
        // Verify that the user wants to set up an account
        if (userAccount) {
            // He wants ^^
            this.setAccount(userAccount);
        }
    }
    setAccount(userAccount) {
        // Verify that the 'id' property exists
        if (userAccount.userid) {
            this.account.userid = +userAccount.userid;
        }
        // Verify that the 'email' property exists
        if (userAccount.email) {
            // Email validation
            const emailRE = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (emailRE.test(userAccount.email)) {
                // oh yeah
                this.account.email = userAccount.email;
            }
            else {
                // invalid email
                console.error(`Invalid Email: "${userAccount.email}".`);
            }
        }
        // Verify that the 'password' property exists
        if (userAccount.password) {
            this.account.password = userAccount.password;
        }
    }
    request(data) {
        return __awaiter(this, void 0, void 0, function* () {
            // Convert { userid: 123, email: 'foo@bar' } to 'userid=123&email=foo@bar'
            const stringData = objectToQueryString_1.default(data);
            // Merge the api url with params
            const requestUrl = this.urlApi + stringData;
            return yield axios_1.default.get(requestUrl)
                .then(res => res.data);
        });
    }
    getBalances() {
        return __awaiter(this, void 0, void 0, function* () {
            requiredProps_1.default(this.account, ['userid']);
            return yield this.request({
                total: this.account.userid,
            });
        });
    }
    getMiningMode() {
        return __awaiter(this, void 0, void 0, function* () {
            requiredProps_1.default(this.account, ['userid']);
            return yield this.request({
                idmining: this.account.userid,
            });
        });
    }
    getSpeed() {
        return __awaiter(this, void 0, void 0, function* () {
            requiredProps_1.default(this.account, ['userid']);
            return yield this.request({
                idspeed: this.account.userid,
            });
        });
    }
    getDepositAddress(depositType) {
        return __awaiter(this, void 0, void 0, function* () {
            requiredProps_1.default(this.account, ['userid']);
            return yield this.request({
                id: this.account.userid,
                deposit: depositType,
            });
        });
    }
    getUserId() {
        return __awaiter(this, void 0, void 0, function* () {
            requiredProps_1.default(this.account, ['email', 'password']);
            return yield this.request({
                email: this.account.email,
                password: this.account.password,
            });
        });
    }
    setMiningMode(miningMode) {
        return __awaiter(this, void 0, void 0, function* () {
            requiredProps_1.default(this.account, ['email', 'password', 'userid']);
            return yield this.request({
                mining: miningMode,
                email: this.account.email,
                password: this.account.password,
                id: this.account.userid,
            });
        });
    }
    setAutomaticWithdraw(currency, amount, walletAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            requiredProps_1.default(this.account, ['email', 'password', 'userid']);
            return yield this.request({
                amount,
                withdraw: currency,
                wallet: walletAddress,
                email: this.account.email,
                password: this.account.password,
                id: this.account.userid,
            });
        });
    }
    manualWithdraw(currency, amount, walletAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            requiredProps_1.default(this.account, ['email', 'password', 'userid']);
            return yield this.request({
                amount,
                manualwithdraw: currency,
                wallet: walletAddress,
                email: this.account.email,
                password: this.account.password,
                id: this.account.userid,
            });
        });
    }
    buyCloudWithCryptocurrency(currencyFrom, amount, cloudType) {
        return __awaiter(this, void 0, void 0, function* () {
            requiredProps_1.default(this.account, ['email', 'password', 'userid']);
            return yield this.request({
                amount,
                convertfrom: currencyFrom,
                convertto: cloudType,
                email: this.account.email,
                password: this.account.password,
                id: this.account.userid,
            });
        });
    }
    exchangeEstimate(fee, currencyFrom, amount, currencyTo) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.request({
                amount,
                exchangefee: fee,
                convertfrom: currencyFrom,
                convertto: currencyTo,
            });
        });
    }
}
module.exports = Eobot;
