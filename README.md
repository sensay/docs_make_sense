# Sense Network Documentation

Documentation for interacting with Sense network contracts.

## Prerequisites

* [Ropsten Testnet node](https://github.com/ethereum/ropsten)
* [Pre-approval for attribution developers](#developer-approval)
* [Web3 Client](#web3-client)

## Contract Interaction Samples

Sense operates on two smart contracts as follows:

* [Attribution Contract](/know/README.md)
* [Knowledge Access Contract](/access/README.md)

## Developer Approval

Developers can work on different ways to contribute contacts and data to the Sense Network. Data sets can be mined to assign different knowledge attributes or categories to a specific ERC-20 Wallet ID.

There are currently two samples of this, with different data sets.

### Sensay

Sensay is the first app to leverage the Sense Network. As users have chats on the Sensay platform, data points on those users are assigned. Once the data is categorized, and user is determined knowledgeable on a subject the data is prepared to be mined via the [Attribution Contract](#attribution).

### MakeSense

MakeSense is the second app to leverage the Sense Network. Users can oAuth with either GitHub or Reddit, and the app will scan data and form a knowledge profile on the user. The profile can be broken down into different knowledge categories (i.e. Developer, Startups, Blockchain). Again, these data points are normalized to be mined via the [Attribution Contract](#attribution).

### Developer Partnerships

A developer can have a different approach in determing a certain user is knowledgeable in a category or subject. This can be through scanning profiles, creating chat applications / bots, gamification or other means. Once enough data points are built to validate a certain level of knowledge, a request to attribute the data and mine a block via the attribution contract can be made.

This requires developers to be thorough and mindful in their block requests in order to keep the quality of data attributed high. For this reason, all developers must be pre-approved in order to become attribution contract imners.

A proposal on how to attribute data, which data points will be analyzed and what constitutes a request for a block should be submitted via developers@makesense.com for review. A ERC-20 Wallet ID for the developer is also required.

If approved, the contract holder will approve the developer's wallet via the smart contract. This will allow the developer to transact with the `mineBlock` function from the attribution contract. Attribution contract address will also be issued.

For testnet portion of attribution, Sense Network will maintain concensus of data quality, and for continuing quality of a developers block requests. There is work going on to defer this governance to approved developers, with a shared interest in maintaining data quality and fair requests for blocks.

### Web3 Client

A client to interact with the Ethereum API (JSON-RPC) will be needed, whether interacting from the frontend or server side. Currently the two clients we recommend are the following:

* [web3.js](https://github.com/ethereum/web3.js)
* [web3.py](https://github.com/pipermerriam/web3.py)
