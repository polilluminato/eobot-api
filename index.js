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
}

exports.getMiningMode = function(userId,callback){
  request(urlApi+'idmining='+userId+'&json=true', function (error, response, json) {
    if (!error && response.statusCode == 200) {
      var myJson = JSON.parse(json);
      callback(true,myJson);
    } else {
      callback(false,"");
    }
  });
}

exports.getSpeed = function(userId,callback){
  request(urlApi+'idspeed='+userId+'&json=true', function (error, response, json) {
    if (!error && response.statusCode == 200) {
      var myJson = JSON.parse(json);
      callback(true,myJson);
    } else {
      callback(false,"");
    }
  });
}

exports.getDepositAddress = function(userId,depositType,callback){
  request(urlApi+'id='+userId+'&deposit='+depositType+'&json=true', function (error, response, json) {
    if (!error && response.statusCode == 200) {
      var myJson = JSON.parse(json);
      callback(true,myJson);
    } else {
      callback(false,"");
    }
  });
}

exports.getUserID = function(email,password,callback){
  request(urlApi+'email='+email+'&password='+password+'&json=true', function (error, response, json) {
    if (!error && response.statusCode == 200) {
      var myJson = JSON.parse(json);
      callback(true,myJson);
    } else {
      callback(false,"");
    }
  });
}
