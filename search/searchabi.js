'use strict'

module.exports = [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_offerIndex",
          "type": "uint8"
        }
      ],
      "name": "confirmOffer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "txs",
      "outputs": [
        {
          "name": "initiator",
          "type": "address"
        },
        {
          "name": "url",
          "type": "bytes"
        },
        {
          "name": "search",
          "type": "string"
        },
        {
          "name": "numOffers",
          "type": "uint8"
        },
        {
          "name": "limit",
          "type": "uint256"
        },
        {
          "name": "searchProcessed",
          "type": "bool"
        },
        {
          "name": "finalized",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_limit",
          "type": "uint256"
        }
      ],
      "name": "updateRateLimit",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "requestCount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "rateLimit",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "unconfirmedCount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "removeRequest",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_id",
          "type": "bytes32"
        },
        {
          "name": "_searchOption",
          "type": "string"
        },
        {
          "name": "_callback",
          "type": "bytes"
        }
      ],
      "name": "search",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "confirmedCount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_results",
          "type": "bytes32"
        },
        {
          "name": "_tx",
          "type": "address"
        },
        {
          "name": "_tokens",
          "type": "uint256"
        }
      ],
      "name": "createOffer",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_offerIndex",
          "type": "uint8"
        }
      ],
      "name": "getOffer",
      "outputs": [
        {
          "name": "",
          "type": "address"
        },
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "agent",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "token",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_token",
          "type": "address"
        },
        {
          "name": "_agent",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "constructor"
    },
    {
      "payable": false,
      "type": "fallback"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_requestor",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_id",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "_time",
          "type": "uint256"
        }
      ],
      "name": "Request",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_requestor",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_id",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "_time",
          "type": "uint256"
        }
      ],
      "name": "Processed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_requestor",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "_time",
          "type": "uint256"
        }
      ],
      "name": "Confirmed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_requestor",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_time",
          "type": "uint256"
        }
      ],
      "name": "Cancelled",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_limit",
          "type": "uint256"
        }
      ],
      "name": "LimitChange",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    }
  ]