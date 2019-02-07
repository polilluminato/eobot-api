import axios from 'axios';

const objectToUrlGet = (data) => {
  const arrayData:string[] = [];

  const objectData = {
    ...{ json: true },
    ...data
  };

  for(let i in objectData) {
    const strItemData = `${i}=${objectData[i]}`;
    arrayData.push(strItemData);
  }

  const stringData = arrayData.join('&');

  return stringData;
}

class Eobot {
  urlApi: string;

  constructor() {
    this.urlApi = 'https://www.eobot.com/api.aspx?';
  }

  async request(data) {
    const stringData = objectToUrlGet(data);
    const requestUrl = this.urlApi + stringData;

    return await axios.get(requestUrl)
    .then(res => res.data)
  }

  async getBalances(userId) {
    return await this.request({
      total: userId
    });
  }

  async getMiningMode(userId) {
    return await this.request({
      idmining: userId
    });
  };
  
  async getSpeed(userId) {
    return await this.request({
      idspeed: userId
    });
  };
  
  async getDepositAddress(userId,depositType) {
    return await this.request({
      id: userId,
      deposit: depositType
    });
  };
  
  async getUserID(email,password) {
    return await this.request({
      email,
      password,
    });
  };
  
  async setMiningMode(userId,email,password,miningMode) {
    return await this.request({
      id: userId,
      mining: miningMode,
      email,
      password,
    });
  };
  
  async setAutomaticWithdraw(myUserID,myEmail,myPassword,currency,amount,walletAddress) {
    return await this.request({
      id: myUserID,
      email: myEmail,
      password: myPassword,
      withdraw: currency,
      amount: amount,
      wallet: walletAddress
    });
  };
  
  async manualWithdraw(myUserID,myEmail,myPassword,currency,amount,walletAddress) {
    return await this.request({
      id: myUserID,
      email: myEmail,
      password: myPassword,
      manualwithdraw: currency,
      amount: amount,
      wallet: walletAddress
    });
  };
  
  async buyCloudWithCryptocurrency(myUserID,myEmail,myPassword,currencyFrom,amount,cloudType) {
    return await this.request({
      id: myUserID,
      email: myEmail,
      password: myPassword,
      convertfrom: currencyFrom,
      amount: amount,
      convertto: cloudType
    });
  };
  
  async exchangeEstimate(hasExchangeFee,currencyFrom,amount,currencyTo) {
    return await this.request({
      exchangefee: hasExchangeFee,
      convertfrom: currencyFrom,
      amount: amount,
      convertto: currencyTo
    });
  };
  
}

export = Eobot;