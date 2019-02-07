import axios from 'axios';

import requiredProps from './lib/requiredProps';
import objectToUrlGet from './lib/objectToUrlGet';

import { ObjectAny, AccountInterface } from './interfaces';
class Eobot {
  public urlApi:string = 'https://www.eobot.com/api.aspx?';

  private account:AccountInterface = {
    userId: 0,
    email: '',
    password: '',
  };

  constructor(userAccount?:AccountInterface) {
    if (userAccount) {
      this.setAccount(userAccount);
    }
  }

  setAccount(userAccount:AccountInterface) {
    if (userAccount.userId) {
      this.account.userId = userAccount.userId;
    }

    const emailRE = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (userAccount.email) {
      if (emailRE.test(userAccount.email)) {
        this.account.email = userAccount.email;
      } else {
        console.error(`Invalid Email: "${userAccount.email}".`);
      }
    }

    if (userAccount.password) {
      this.account.password = userAccount.password;
    }

  }

  async request(data:ObjectAny) {
    const stringData = objectToUrlGet(data);
    const requestUrl = this.urlApi + stringData;

    return await axios.get(requestUrl)
    .then(res => res.data);
  }

  async getBalances() {
    requiredProps(this, ['userId']);

    return await this.request({
      total: this.account.userId,
    });
  }

  async getMiningMode() {
    requiredProps(this, ['userId']);

    return await this.request({
      idmining: this.account.userId,
    });
  }

  async getSpeed() {
    requiredProps(this, ['userId']);

    return await this.request({
      idspeed: this.account.userId,
    });
  }

  async getDepositAddress(depositType:string) {
    requiredProps(this, ['userId']);

    return await this.request({
      id: this.account.userId,
      deposit: depositType,
    });
  }

  async getUserID() {
    requiredProps(this, ['email', 'password']);

    return await this.request({
      email: this.account.email,
      password: this.account.password,
    });
  }

  async setMiningMode(miningMode:string) {
    requiredProps(this, ['email', 'password', 'userId']);

    return await this.request({
      email: this.account.email,
      password: this.account.password,
      id: this.account.userId,
      mining: miningMode,
    });
  }

  async setAutomaticWithdraw(currency:string, amount:number, walletAddress:string) {
    requiredProps(this, ['email', 'password', 'userId']);

    return await this.request({
      amount,
      withdraw: currency,
      wallet: walletAddress,
      email: this.account.email,
      password: this.account.password,
      id: this.account.userId,
    });
  }

  async manualWithdraw(currency:string, amount:number, walletAddress:string) {
    requiredProps(this, ['email', 'password', 'userId']);

    return await this.request({
      amount,
      manualwithdraw: currency,
      wallet: walletAddress,
      email: this.account.email,
      password: this.account.password,
      id: this.account.userId,
    });
  }

  async buyCloudWithCryptocurrency(currencyFrom:string, amount:number, cloudType:string) {
    requiredProps(this, ['email', 'password', 'userId']);
    return await this.request({
      amount,
      convertfrom: currencyFrom,
      convertto: cloudType,
      email: this.account.email,
      password: this.account.password,
      id: this.account.userId,
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

export = Eobot;
