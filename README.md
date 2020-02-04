# Eobot-api - a Node.js module for Eobot public API

![Eobot API](https://www.eobot.com/eobotlogo.png "Eobot.com")

[![npm package](https://nodei.co/npm/eobot-api.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/eobot-api/)

This node module provides a Node.js implementation for the API of the Cloud mining and Bitcoin mining [Eobot.com](https://www.eobot.com/)   
> Eobot is the easiest, cheapest, and best way to get or mine Bitcoin, Litecoin, BlackCoin, Namecoin, Dogecoin, Dash, Reddcoin, BitShares, CureCoin, StorjcoinX, Monero, Voxels, Lumens, Bytecoin, Peercoin, NXT, MaidSafeCoin, Ethereum, and Factom. Whether or not you use our Cloud Mining or your own hardware, you can mine any cryptocurrency, regardless if it is based on a SHA-256 or Scrypt algorithm.

The API that Eobot expose are listed in this page: [Eobot Developers](https://www.eobot.com/developers).

## API Implementation

I implement all the APIs listed in the developers page. Every API uses as input all the parameters required by Eobot, in the same order as described in the developers page, and a callback function for the returned values. As example a simple call to get balances could be
```javascript
var eobot = require('eobot-api');
var myUserID = '12345'
eobot.getBalances(myUserID,function(resp,data){
  if(resp){
    console.log('\nTotals: ' + JSON.stringify(data));
  } else {
    console.log('\nError');
  }
});
```
All callbacks have got this structure
```javascript
/*
* @return {Boolean} response: result of the call.
* @return {String} json: data returned from Eobot API in JSON format, if the response is false json is an empty string
*/
callback(response,json);
```
Based on the example above, the response for the get balance is
```
{
  "Total":"6.10402110",
  "BTC":"0.00000000",
  "ETH":"0.00000000",
  ...
  "GHS":"0.00000000",
  "GHS2":"0.00000000",
  "SCRYPT":"0.00000000",
  "BPPD":"0.00000000",
  "PPD":"0.00000000"
}
```

#### Get Balances
Returns total account value followed by cryptocurrency balances. Pass in querystring UserID.
```javascript
exports.getBalances = function(userId,callback){};
```

#### Get Mining Mode
Returns the cryptocurrency you are currently mining. Pass in querystring UserID.
```javascript
exports.getMiningMode = function(userId,callback){};
```

#### Get Speed
Returns the mining and cloud speeds. Pass in querystring UserID.
```javascript
exports.getSpeed = function(userId,callback){};
```

#### Get Deposit Address
Returns a deposit wallet address for specified cryptocurrency. Pass in querystring UserID and deposit type (BTC, ETH, LTC, etc.).
```javascript
exports.getDepositAddress = function(userId,depositType,callback){};
```

#### Get UserID
Returns the UserID. Pass in querystring (or post parameters) email and password/API Key.
```javascript
exports.getUserID = function(email,password,callback){};
```

#### Set Mining Mode
Programmatically set your mining mode. Pass in querystring (or post parameters) UserID, email, password/API Key, and mining mode (BTC, ETH, LTC, etc.).
```javascript
exports.setMiningMode = function(userId,email,password,miningMode,callback){};
```

#### Set Automatic Withdraw
Programmatically set an automatic withdraw. Pass in querystring (or post parameters) UserID, email, password/API Key, automatic withdraw type (BTC, ETH, LTC, etc.), amount, and wallet address.
```javascript
exports.setAutomaticWithdraw = function(myUserID,myEmail,myPassword,currency,amount,walletAddress,callback){};
```

#### Manual Withdraw
Performs a one-time manual withdraw. Pass in querystring (or post parameters) UserID, email, password/API Key, manual withdraw type (BTC, ETH, LTC, etc.), amount, and wallet address.
```javascript
exports.manualWithdraw = function(myUserID,myEmail,myPassword,currency,amount,walletAddress,callback){};
```

#### Buy Cloud with Cryptocurrency
Programmatically buy Cloud. Pass in querystring (or post parameters) UserID, email, password/API Key, cloud type (GHS or GHS4 or SCRYPT), cryptocurrency source (BTC, ETH, LTC, etc.), and cryptocurrency amount.
```javascript
exports.buyCloudWithCryptocurrency = function(myUserID,myEmail,myPassword,currencyFrom,amount,cloudType,callback){};
```

#### Exchange Estimate
Programmatically get estimate. Pass in querystring from coin type, to coin type, and cryptocurrency amount.
```javascript
exports.exchangeEstimate = function(hasExchangeFee,currencyFrom,amount,currencyTo,callback){};
```

## Disclaimer
I'm **not** associated or **related** with Eobot.com, this is my implementation based on the public API. I'm **not** responsible if **you** lose money using this library because this is a simple node.js wrapper for the Eobot.com Public API.

## Donate

If you think that code is worth of some money and are willing to pay for it, feel free to send any amount through PayPal, Bitcoin, Ethereum, Litecoin and BAT.

| Mode  | Link/Wallet                                       |
|----------|--------------------------------------------|
| Paypal   | [PayPal.Me](https://paypal.me/polilluminato)            |
| Bitcoin  | 168fmE7d1RY8S6fJSkffnVFdZTwnxRAM7y         |
| Ethereum | 0xCa080c321e9518437F78CaC4099Fb938c7e2Ffee |
| Litecoin | LQmw4mGo7hgv1ctvGgHbjXudU9ejmK95NH         |
| BAT      | 0xbbF164847aAc7E226e4EC0195fF734AD314C9422 |

## Contributing

If you have any idea, feel free to fork it and submit your changes back to me.

## License

GPL-3.0. See [gpl-3.0-standalone.html](http://www.gnu.org/licenses/gpl-3.0-standalone.html) for details.
