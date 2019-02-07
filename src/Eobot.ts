import axios from 'axios';
import objectToUrlGet from './lib/objectToUrlGet';

import { ParamsInterface } from './interfaces';

class Eobot {
  urlApi: string;

  constructor() {
    this.urlApi = 'https://www.eobot.com/api.aspx?';
  }


  async request(data:ParamsInterface) {
    const stringData = objectToUrlGet(data);
    const requestUrl = this.urlApi + stringData;

    return await axios.get(requestUrl)
    .then(res => res.data)
  }

  async getBalances(userId:number) {
    return await this.request({
      total: Math.round(userId)
    });
  }

  async getMiningMode(userId:number) {
    return await this.request({
      idmining: userId
    });
  };
  
  async getSpeed(userId:number) {
    return await this.request({
      idspeed: userId
    });
  };
  
  async getDepositAddress(userId:number, depositType:string) {
    return await this.request({
      id: userId,
      deposit: depositType
    });
  };
  
  async getUserID(email:string, password:string) {
    return await this.request({
      email,
      password,
    });
  };
  
  async setMiningMode(userId:number, email:string, password:string, miningMode:string) {
    return await this.request({
      id: userId,
      mining: miningMode,
      email,
      password,
    });
  };
  
  async setAutomaticWithdraw(myUserID:number, myEmail:string, myPassword:string, currency:string, amount:number, walletAddress:string) {
    return await this.request({
      id: myUserID,
      email: myEmail,
      password: myPassword,
      withdraw: currency,
      amount: amount,
      wallet: walletAddress
    });
  };
  
  async manualWithdraw(myUserID:number, myEmail:string, myPassword:string, currency:string, amount:number, walletAddress:string) {
    // manualwithdraw=BTC&amount=1&wallet=163fJyirjtxP585bukr73F1yDi2fYuCcDr
    return await this.request({
      id: myUserID,
      email: myEmail,
      password: myPassword,
      manualwithdraw: currency,
      amount: amount,
      wallet: walletAddress
    });
  };
  
  async buyCloudWithCryptocurrency(myUserID:number, myEmail:string, myPassword:string, currencyFrom:string, amount:number, cloudType:string) {
    return await this.request({
      id: myUserID,
      email: myEmail,
      password: myPassword,
      convertfrom: currencyFrom,
      amount: amount,
      convertto: cloudType
    });
  };
  
  async exchangeEstimate(hasExchangeFee:boolean, currencyFrom:string, amount:number, currencyTo:string) {
    return await this.request({
      exchangefee: hasExchangeFee,
      convertfrom: currencyFrom,
      amount: amount,
      convertto: currencyTo
    });
  };
  
}

export = Eobot;