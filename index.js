var request = require('request');

exports.getBalances = function(userId,callback){

  request('https://www.eobot.com/api.aspx?total='+userId+'&json=true', function (error, response, json) {
    if (!error && response.statusCode == 200) {

      var myJson = JSON.parse(json);
      callback(true,myJson);
    } else {
      callback(false,"");
    }
  });
}
