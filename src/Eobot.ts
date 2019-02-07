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
    .then(res => res.data);
  }

  async getBalances(userId:number) {
    return await this.request({
      total: Math.round(userId),
    });
  }

  async getMiningMode(userId:number) {
    return await this.request({
      idmining: userId,
    });
  }

  async getSpeed(userId:number) {
    return await this.request({
      idspeed: userId,
    });
  }

  async getDepositAddress(userId:number, depositType:string) {
    return await this.request({
      id: userId,
      deposit: depositType,
    });
  }

  async getUserID(email:string, password:string) {
    return await this.request({
      email,
      password,
    });
  }

  async setMiningMode(userId:number, email:string, password:string, miningMode:string) {
    return await this.request({
      email,
      password,
      id: userId,
      mining: miningMode,
    });
  }

  async setAutomaticWithdraw(userId:number, email:string, password:string, currency:string, amount:number, walletAddress:string) {
    return await this.request({
      amount,
      email,
      password,
      id: userId,
      withdraw: currency,
      wallet: walletAddress,
    });
  }

  async manualWithdraw(userId:number, email:string, password:string, currency:string, amount:number, walletAddress:string) {
    // manualwithdraw=BTC&amount=1&wallet=163fJyirjtxP585bukr73F1yDi2fYuCcDr
    return await this.request({
      amount,
      email,
      password,
      id: userId,
      manualwithdraw: currency,
      wallet: walletAddress,
    });
  }

  async buyCloudWithCryptocurrency(userId:number, email:string, password:string, currencyFrom:string, amount:number, cloudType:string) {
    return await this.request({
      amount,
      email,
      password,
      id: userId,
      convertfrom: currencyFrom,
      convertto: cloudType,
    });
  }

  async exchangeEstimate(hasExchangeFee:boolean, currencyFrom:string, amount:number, currencyTo:string) {
    return await this.request({
      amount,
      exchangefee: hasExchangeFee,
      convertfrom: currencyFrom,
      convertto: currencyTo,
    });
  }

}

export = Eobot;
