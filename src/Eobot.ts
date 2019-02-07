var request = require('request');
class Eobot {
  urlApi: string;

  constructor() {
    this.urlApi = 'https://www.eobot.com/api.aspx?';
  }

  getBalances(userId, callback) {
    request(this.urlApi+'total='+userId+'&json=true', function (error, response, json) {
      if (!error && response.statusCode == 200) {
        var myJson = JSON.parse(json);
        callback(true,myJson);
      } else {
        callback(false,"");
      }
    });
  }

  getMiningMode(userId,callback) {
    request(this.urlApi+'idmining='+userId+'&json=true', function (error, response, json) {
      if (!error && response.statusCode == 200) {
        var myJson = JSON.parse(json);
        callback(true,myJson);
      } else {
        callback(false,"");
      }
    });
  };
  
  getSpeed(userId,callback) {
    request(this.urlApi+'idspeed='+userId+'&json=true', function (error, response, json) {
      if (!error && response.statusCode == 200) {
        var myJson = JSON.parse(json);
        callback(true,myJson);
      } else {
        callback(false,"");
      }
    });
  };
  
  getDepositAddress(userId,depositType,callback) {
    request(this.urlApi+'id='+userId+'&deposit='+depositType+'&json=true', function (error, response, json) {
      if (!error && response.statusCode == 200) {
        var myJson = JSON.parse(json);
        callback(true,myJson);
      } else {
        callback(false,"");
      }
    });
  };
  
  getUserID(email,password,callback) {
    request(this.urlApi+'email='+email+'&password='+password+'&json=true', function (error, response, json) {
      if (!error && response.statusCode == 200) {
        var myJson = JSON.parse(json);
        callback(true,myJson);
      } else {
        callback(false,"");
      }
    });
  };
  
  setMiningMode(userId,email,password,miningMode,callback) {
    var options = 'id='+userId;
      options += '&email='+email;
      options += '&password='+password;
      options += '&mining='+miningMode;
  
    request(this.urlApi+options+'&json=true', function (error, response, json) {
      if (!error && response.statusCode == 200) {
        callback(true);
      } else {
        callback(false);
      }
    });
  };
  
  setAutomaticWithdraw(myUserID,myEmail,myPassword,currency,amount,walletAddress,callback) {
    var options = 'id='+myUserID;
      options += '&email='+myEmail;
      options += '&password='+myPassword;
      options += '&withdraw='+currency;
      options += '&amount='+amount;
      options += '&wallet='+walletAddress;
  
    request(this.urlApi+options+'&json=true', function (error, response, json) {
      if (!error && response.statusCode == 200) {
        var myJson = JSON.parse(json);
        callback(true,myJson);
      } else {
        callback(false,"");
      }
    });
  };
  
  manualWithdraw(myUserID,myEmail,myPassword,currency,amount,walletAddress,callback) {
    var options = 'id='+myUserID;
      options += '&email='+myEmail;
      options += '&password='+myPassword;
      options += '&manualwithdraw='+currency;
      options += '&amount='+amount;
      options += '&wallet='+walletAddress;
  
    request(this.urlApi+options+'&json=true', function (error, response, json) {
      if (!error && response.statusCode == 200) {
        var myJson = JSON.parse(json);
        callback(true,myJson);
      } else {
        callback(false,"");
      }
    });
  };
  
  buyCloudWithCryptocurrency(myUserID,myEmail,myPassword,currencyFrom,amount,cloudType,callback) {
    var options = 'id='+myUserID;
      options += '&email='+myEmail;
      options += '&password='+myPassword;
      options += '&convertfrom='+currencyFrom;
      options += '&amount='+amount;
      options += '&convertto='+cloudType;
  
    request(this.urlApi+options+'&json=true', function (error, response, json) {
      if (!error && response.statusCode == 200) {
        var myJson = JSON.parse(json);
        callback(true,myJson);
      } else {
        callback(false,"");
      }
    });
  };
  
  exchangeEstimate(hasExchangeFee,currencyFrom,amount,currencyTo,callback) {
    var options = 'exchangefee='+hasExchangeFee;
      options += '&convertfrom='+currencyFrom;
      options += '&amount='+amount;
      options += '&convertto='+currencyTo;
  
    request(this.urlApi+options+'&json=true', function (error, response, json) {
      if (!error && response.statusCode == 200) {
        var myJson = JSON.parse(json);
        callback(true,myJson);
      } else {
        callback(false,"");
      }
    });
  };
  
}

export = Eobot;