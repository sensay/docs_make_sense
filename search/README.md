# Search Contract

## Contract Interaction Samples

The knowledge access contract can be accessed through a light html layer to format the search options. Web3.js will be used to actually transact with the contract. The transaction will need to be signed. At this moment we are using [MetaMask](https://metamask.io) to accomplish this.

The request, the appropriate gas and tokens are required for the contract call to be made. We've put a lot of thought into queuing the data requests through the blockchain. First there's a record of the transaction, and it serves as a guard against overloading the network with bogus searches.

The request is a standard smart contract type call:
NOTE: Pseudo Code / Contract - Not the actual ABI
```
var contractDesc = [{"constant":false,"inputs":[],"name":"getNumber","outputs":[{"name":"_next","type":"int8"}],"type":"function"}];
var account = "0x80e0f7955f537d3fb6f57a39b6fde389afb957b8";
var contract = web3.eth.contract(account, contractDesc);
var response = contract.call().getNumber();
console.log(String(response));
```

The challenge now is in delivering the data back to the user once the request has been processed. Our initial implementation will open up a temporary web socket connection with a unique and encoded name parameter to our search request server. Once the request is processed, the results will be delivered via this socket connection.

```
var socket_connection = new WebSocket('ws://sense-search-server.com/', 'wallet_id+unique_request_id')
```

The connection will be kept alive only on a temporary basis post delivery of search data.
