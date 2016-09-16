# eobot-api

![Eobot API](https://www.eobot.com/eobotlogo.png "Eobot.com")

This node module provides a Node.js implementation for the API of the Cloud mining and Bitcoin mining [Eobot.com](https://www.eobot.com/)   
> Eobot is the easiest, cheapest, and best way to get or mine Bitcoin, Litecoin, BlackCoin, Namecoin, Dogecoin, Dash, Reddcoin, BitShares, CureCoin, StorjcoinX, Monero, Voxels, Lumens, Bytecoin, Peercoin, NXT, MaidSafeCoin, Ethereum, and Factom. Whether or not you use our Cloud Mining or your own hardware, you can mine any cryptocurrency, regardless if it is based on a SHA-256 or Scrypt algorithm.

The API that Eobot.com expose are listed in this page: [Eobot Developers](https://www.eobot.com/developers).

## API Implmentation

I implement all the APIs listed in the developers page:

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

### Disclaimer
I'm **not** associated or **related** with Eobot.com, this is my implementation based on the public API. I'm **not** responsible if **you** lose money using this library because this is a simple node.js wrapper for the Eobot.com Public API.

## License

GPL-3.0. See [gpl-3.0-standalone.html](http://www.gnu.org/licenses/gpl-3.0-standalone.html) for details.
