var request = require('request');
var urlApi = 'https://www.eobot.com/api.aspx?';

exports.getBalances = function(userId,callback){
  request(urlApi+'total='+userId+'&json=true', function (error, response, json) {
    if (!error && response.statusCode == 200) {
      var myJson = JSON.parse(json);
      callback(true,myJson);
    } else {
      callback(false,"");
    }
  });
};

exports.getMiningMode = function(userId,callback){
  request(urlApi+'idmining='+userId+'&json=true', function (error, response, json) {
    if (!error && response.statusCode == 200) {
      var myJson = JSON.parse(json);
      callback(true,myJson);
    } else {
      callback(false,"");
    }
  });
};

exports.getSpeed = function(userId,callback){
  request(urlApi+'idspeed='+userId+'&json=true', function (error, response, json) {
    if (!error && response.statusCode == 200) {
      var myJson = JSON.parse(json);
      callback(true,myJson);
    } else {
      callback(false,"");
    }
  });
};

exports.getDepositAddress = function(userId,depositType,callback){
  request(urlApi+'id='+userId+'&deposit='+depositType+'&json=true', function (error, response, json) {
    if (!error && response.statusCode == 200) {
      var myJson = JSON.parse(json);
      callback(true,myJson);
    } else {
      callback(false,"");
    }
  });
};

exports.getUserID = function(email,password,callback){
  request(urlApi+'email='+email+'&password='+password+'&json=true', function (error, response, json) {
    if (!error && response.statusCode == 200) {
      var myJson = JSON.parse(json);
      callback(true,myJson);
    } else {
      callback(false,"");
    }
  });
};

exports.setMiningMode = function(userId,email,password,miningMode,callback){
  var options = 'id='+userId;
    options += '&email='+email;
    options += '&password='+password;
    options += '&mining='+miningMode;

  request(urlApi+options+'&json=true', function (error, response, json) {
    if (!error && response.statusCode == 200) {
      callback(true);
    } else {
      callback(false);
    }
  });
};

exports.exchangeEstimate = function(hasExchangeFee,currencyFrom,amount,currencyTo,callback){
  var options = 'exchangefee='+hasExchangeFee;
    options += '&convertfrom='+currencyFrom;
    options += '&amount='+amount;
    options += '&convertto='+currencyTo;

  request(urlApi+options+'&json=true', function (error, response, json) {
    if (!error && response.statusCode == 200) {
      var myJson = JSON.parse(json);
      callback(true,myJson);
    } else {
      callback(false,"");
    }
  });
};

exports.buyCloudWithCryptocurrency = function(myUserID,myEmail,myPassword,currencyFrom,amount,cloudType,callback){
  var options = 'id='+myUserID;
    options += '&email='+myEmail;
    options += '&password='+myPassword;
    options += '&convertfrom='+currencyFrom;
    options += '&amount='+amount;
    options += '&convertto='+cloudType;

  request(urlApi+options+'&json=true', function (error, response, json) {
    if (!error && response.statusCode == 200) {
      var myJson = JSON.parse(json);
      callback(true,myJson);
    } else {
      callback(false,"");
    }
  });
};

exports.setAutomaticWithdraw = function(myUserID,myEmail,myPassword,currency,amount,walletAddress,callback){
  var options = 'id='+myUserID;
    options += '&email='+myEmail;
    options += '&password='+myPassword;
    options += '&withdraw='+currency;
    options += '&amount='+amount;
    options += '&wallet='+cloudwalletAddressType;

  request(urlApi+options+'&json=true', function (error, response, json) {
    if (!error && response.statusCode == 200) {
      var myJson = JSON.parse(json);
      callback(true,myJson);
    } else {
      callback(false,"");
    }
  });
};
