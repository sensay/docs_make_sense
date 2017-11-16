# Access Contract

## Contract Interaction Samples

The knowledge access contract can be accessed through a light html layer to format the search options. Web3.js will be used to actually transact with the contract. The transaction will need to be signed. At this moment we are using [MetaMask](https://metamask.io) to accomplish this.

The request, the appropriate gas and tokens are required for the contract call to be made. We've put a lot of thought into queuing the data requests through the blockchain. First there's a record of the transaction, and it serves as a guard against overloading the network with bogus searches.

The request is a standard smart contract type call:

```javascript
'use strict';

const Web3 = require('web3')
const abi = require('../accessabi')

let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
let searchAddress = '0x691ed3fff27bf63f9de4e22a21a88182b341446a'

module.exports = function search(address, id, search, callback, cb) {
  var search = web3.eth.contract(abi)
  var searchInst = search.at(searchAddress)

  searchInst.search(id, search, callback, {from:address, gas: 500000}, (err, res) => {
    var myEvent = searchInst.Request().watch ( (err, response) => {
      // check the logs transaction hash with the one received when sent
      if(response.transactionHash == res) {
        return cb(null, response)
      }
    })
  })
}
```

The callback argument serves as a delivery mechanism. There are different posibilities for delivering search results once request is registered in the blockchain.

* Standard server setup by requestor
* Websocket delivery

For test implementation a websocket will be opened to the search server using the transaction hash response and a unique request id at transaction time. This socket will remain open and once search request is processed, the search payload will be delivered via this connection.

```
var socket_connection = new WebSocket('ws://sense-search-server.com/', 'wallet_id+unique_request_id')
```

SENSE team will provide first search page to interact with the Acess Contract. However developers can implement their own portals to specify custom filters or target specific data consumers. If the socket option is used, the same strategy as above can be used. The connection will be kept alive only on a temporary basis post delivery of search data.

If callback to web2.0 server is used, then an address and endpoint with any authentication should be provided in this field. This should be encrypted with Sense Network's public key.

The response will be in json format in both delivery mechanisms.

```{"results": {"contacts": ["0xA95E362c7CA86e024224C8FB7595bD4c6E8F6217", "0xdE7F40e40C094fB06b1791F3028ed1F045e84CEb", "0x91abca173d8cd0087542a120d266900737c98f51"]}, "query": "blockchain developers", "request_type": "contacts", "received": "ok", "requested_transaction": "0x00c1b6f5d5939bd8c71b3c37ce830321c47dbcdb"}```