// Promise based HTTP client for the browser and node.js
import axios from 'axios';

// Send error if any prop is undefined
import requiredProps from './lib/requiredProps';
// Convert {foo: 'bar', what: 'ever'} to foo=bar&what=ever
import objectToQueryString from './lib/objectToQueryString';

import { ObjectAny, AccountInterface } from './interfaces';
class Eobot {
  // Api url
  public urlApi:string = 'https://www.eobot.com/api.aspx?';

  private account:AccountInterface = {
    userid: 0,
    email: '',
    password: '',
  };

  constructor(userAccount?:AccountInterface) {
    // Verify that the user wants to set up an account
    if (userAccount) {
      // He wants ^^
      this.setAccount(userAccount);
    }
  }

  setAccount(userAccount:AccountInterface) {
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
      } else {
        // invalid email
        console.error(`Invalid Email: "${userAccount.email}".`);
      }
    }

    // Verify that the 'password' property exists
    if (userAccount.password) {
      this.account.password = userAccount.password;
    }
  }

  async request(data:ObjectAny) {
    // Convert { userid: 123, email: 'foo@bar' } to 'userid=123&email=foo@bar'
    const stringData = objectToQueryString(data);
    // Merge the api url with params
    const requestUrl = this.urlApi + stringData;

    return await axios.get(requestUrl)
    .then(res => res.data);
  }

  async getBalances() {
    requiredProps(this.account, ['userid']);

    return await this.request({
      total: this.account.userid,
    });
  }

  async getMiningMode() {
    requiredProps(this.account, ['userid']);

    return await this.request({
      idmining: this.account.userid,
    });
  }

  async getSpeed() {
    requiredProps(this.account, ['userid']);

    return await this.request({
      idspeed: this.account.userid,
    });
  }

  async getDepositAddress(depositType:string) {
    requiredProps(this.account, ['userid']);

    return await this.request({
      id: this.account.userid,
      deposit: depositType,
    });
  }

  async getUserId() {
    requiredProps(this.account, ['email', 'password']);

    return await this.request({
      email: this.account.email,
      password: this.account.password,
    });
  }

  async setMiningMode(miningMode:string) {
    requiredProps(this.account, ['email', 'password', 'userid']);

    return await this.request({
      mining: miningMode,
      email: this.account.email,
      password: this.account.password,
      id: this.account.userid,
    });
  }

  async setAutomaticWithdraw(currency:string, amount:number, walletAddress:string) {
    requiredProps(this.account, ['email', 'password', 'userid']);

    return await this.request({
      amount,
      withdraw: currency,
      wallet: walletAddress,
      email: this.account.email,
      password: this.account.password,
      id: this.account.userid,
    });
  }

  async manualWithdraw(currency:string, amount:number, walletAddress:string) {
    requiredProps(this.account, ['email', 'password', 'userid']);

    return await this.request({
      amount,
      manualwithdraw: currency,
      wallet: walletAddress,
      email: this.account.email,
      password: this.account.password,
      id: this.account.userid,
    });
  }

  async buyCloudWithCryptocurrency(currencyFrom:string, amount:number, cloudType:string) {
    requiredProps(this.account, ['email', 'password', 'userid']);
    return await this.request({
      amount,
      convertfrom: currencyFrom,
      convertto: cloudType,
      email: this.account.email,
      password: this.account.password,
      id: this.account.userid,
    });
  }

  async exchangeEstimate(fee:boolean, currencyFrom:string, amount:number, currencyTo:string) {
    return await this.request({
      amount,
      exchangefee: fee,
      convertfrom: currencyFrom,
      convertto: currencyTo,
    });
  }

}

// Hello World :D
export = Eobot;
