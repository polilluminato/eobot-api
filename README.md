# Eobot-api - a Node.js module for Eobot public API

![Eobot API](https://www.eobot.com/eobotlogo.png "Eobot.com")

[![npm package](https://nodei.co/npm/eobot-api.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/eobot-api/)

This node module provides a Node.js implementation for the API of the Cloud mining and Bitcoin mining [Eobot.com](https://www.eobot.com/)
> Eobot is the easiest, cheapest, and best way to get or mine Bitcoin, Ethereum, Litecoin, Bitcoin Cash, Dogecoin, Ripple, Dash, Golem, Cardano, CureCoin, NEM, Monero, Zcash, Factom, Bytecoin, STEEM, Lisk, EOS, USD, Stellar, and Ethereum Classic. Whether or not you use our Cloud Mining or your own hardware, you can mine any cryptocurrency, regardless if it is based on a SHA-256 or Scrypt algorithm.

The API that Eobot expose are listed in this page: [Eobot Developers](https://www.eobot.com/developers).

## API Implementation

I implement all the APIs listed in the developers page. Every API uses as input all the parameters required by Eobot, in the same order as described in the developers page, and a callback function for the returned values. As example a simple call to get balances could be
```javascript
const EobotApi = require('eobot-api');

const eobot = new EobotApi();
eobot.setAccount({
  userid: 12345,
});

eobot.getBalances()
.then(data => {
  console.info(data);
});
```
Based on the example above, the response for the get balance is
```json
{
  
  "Total": "0.15710920",
  "BTC": "0.00000044",
  "ETH": "0.00000000",
  "much-more-here": "true",
  "GHS": "0.00000000",
  "GHS2": "0.00000000",
  "SCRYPT": "0.00000000",
  "BPPD": "0.00000000",
  "PPD": "0.00000000"
}
```

#### Set Account
Set the account settings by passing the user, email and password (we do not recommend, but all are optional)
```javascript
const eobot = new EobotApi({
  userid: 12345,
  email: 'foo@bar',
  password: 'thepassword'
});

// Change the userid
eobot.setAccount({
  userid: 54321
});

```

#### Get Balances
Returns total account value followed by cryptocurrency balances. Pass in querystring UserID.
```javascript
eobot.getBalances()
```

#### Get Mining Mode
Returns the cryptocurrency you are currently mining. Pass in querystring UserID.
```javascript
eobot.getMiningMode()
```

#### Get Speed
Returns the mining and cloud speeds. Pass in querystring UserID.
```javascript
eobot.getSpeed()
```

#### Get Deposit Address
Returns a deposit wallet address for specified cryptocurrency. Pass in querystring UserID and deposit type (BTC, ETH, LTC, etc.).
```javascript
eobot.getDepositAddress(depositType)
```

#### Get UserID
Returns the UserID. Pass in querystring (or post parameters) email and password/API Key.
```javascript
eobot.getUserID()
```

#### Set Mining Mode
Programmatically set your mining mode. Pass in querystring (or post parameters) UserID, email, password/API Key, and mining mode (BTC, ETH, LTC, etc.).
```javascript
eobot.setMiningMode(miningMode)
```

#### Set Automatic Withdraw
Programmatically set an automatic withdraw. Pass in querystring (or post parameters) UserID, email, password/API Key, automatic withdraw type (BTC, ETH, LTC, etc.), amount, and wallet address.
```javascript
eobot.setAutomaticWithdraw(currency, amount, walletAddress)
```

#### Manual Withdraw
Performs a one-time manual withdraw. Pass in querystring (or post parameters) UserID, email, password/API Key, manual withdraw type (BTC, ETH, LTC, etc.), amount, and wallet address.
```javascript
eobot.manualWithdraw(currency, amount, walletAddress)
```

#### Buy Cloud with Cryptocurrency
Programmatically buy Cloud. Pass in querystring (or post parameters) UserID, email, password/API Key, cloud type (GHS or GHS4 or SCRYPT), cryptocurrency source (BTC, ETH, LTC, etc.), and cryptocurrency amount.
```javascript
eobot.buyCloudWithCryptocurrency(currencyFrom, amount, cloudType)
```

#### Exchange Estimate
Programmatically get estimate. Pass in querystring from coin type, to coin type, and cryptocurrency amount.
```javascript
eobot.exchangeEstimate(hasExchangeFee, currencyFrom, amount, currencyTo)
```

### Disclaimer
I'm **not** associated or **related** with Eobot.com, this is my implementation based on the public API. I'm **not** responsible if **you** lose money using this library because this is a simple node.js wrapper for the Eobot.com Public API.

## License

GPL-3.0. See [gpl-3.0-standalone.html](http://www.gnu.org/licenses/gpl-3.0-standalone.html) for details.
