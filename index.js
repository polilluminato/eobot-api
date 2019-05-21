const request = require('request');
const urlApi = 'https://www.eobot.com/api.aspx?';
const format = '&json=true';

function makeRequest(url,callback){
  request(url,function(error,response,json){
    if (!error && response.statusCode == 200) {
      var myJson = JSON.parse(json);
      return callback(true,myJson);
    } else {
      return callback(false,"");
    }
  });
}

/*****************/

exports.getBalances = function(userId,callback){
  
  let urlToCall = urlApi+'total='+userId+format;
  makeRequest(urlToCall,function(result,response){
    callback(result,response);
  });

};

/*****************/

exports.getMiningMode = function(userId,callback){
  
  let urlToCall = urlApi+'idmining='+userId+format;
  makeRequest(urlToCall,function(result,response){
    callback(result,response);
  });

};

/*****************/

exports.getSpeed = function(userId,callback){
  
  let urlToCall = urlApi+'idspeed='+userId+format;
  makeRequest(urlToCall,function(result,response){
    callback(result,response);
  });

};

/*****************/

exports.getDepositAddress = function(userId,depositType,callback){
  
  let urlToCall = urlApi+'id='+userId+'&deposit='+depositType+format;
  makeRequest(urlToCall,function(result,response){
    callback(result,response);
  });

};

/*****************/

exports.getUserID = function(email,password,callback){

  let urlToCall = urlApi+'email='+email+'&password='+password+format;
  makeRequest(urlToCall,function(result,response){
    callback(result,response);
  });

};

/*****************/

exports.setMiningMode = function(userId,email,password,miningMode,callback){
  
  var options = 'id='+userId
                +'&email='+email
                +'&password='+password
                +'&mining='+miningMode;
  let urlToCall = urlApi+options+format;

  makeRequest(urlToCall,function(result,response){
    callback(result,response);
  });

};

/*****************/

exports.setAutomaticWithdraw = function(myUserID,myEmail,myPassword,currency,amount,walletAddress,callback){
  
  var options = 'id='+myUserID
                 +'&email='+myEmail
                 +'&password='+myPassword
                 +'&withdraw='+currency
                 +'&amount='+amount
                 +'&wallet='+walletAddress;
  let urlToCall = urlApi+options+format;

  makeRequest(urlToCall,function(result,response){
    callback(result,response);
  });
  
};

/*****************/

exports.manualWithdraw = function(myUserID,myEmail,myPassword,currency,amount,walletAddress,callback){
  
  var options = 'id='+myUserID
                  +'&email='+myEmail
                  +'&password='+myPassword
                  +'&manualwithdraw='+currency
                  +'&amount='+amount
                  +'&wallet='+walletAddress;
  let urlToCall = urlApi+options+format;

  makeRequest(urlToCall,function(result,response){
    callback(result,response);
  });

};

/*****************/

exports.buyCloudWithCryptocurrency = function(myUserID,myEmail,myPassword,currencyFrom,amount,cloudType,callback){
  
  var options = 'id='+myUserID
                  +'&email='+myEmail
                  +'&password='+myPassword
                  +'&convertfrom='+currencyFrom
                  +'&amount='+amount
                  +'&convertto='+cloudType;
  let urlToCall = urlApi+options+format;

  makeRequest(urlToCall,function(result,response){
    callback(result,response);
  });

};

/*****************/

exports.exchangeEstimate = function(hasExchangeFee,currencyFrom,amount,currencyTo,callback){
  
  var options = 'exchangefee='+hasExchangeFee
                  +'&convertfrom='+currencyFrom
                  +'&amount='+amount
                  +'&convertto='+currencyTo;
  let urlToCall = urlApi+options+format;

  makeRequest(urlToCall,function(result,response){
    callback(result,response);
  });

};
