# Knowledge Attribution Contract

## Contract Interaction Samples

The knowledge attribution contract is currently implemented in beta for Github and Reddit. After the approved attributor processes a data set (in this case Github and Reddit profiles) for Sense block worth, a request to mine a block is called via the attribution contract.

An example using web3.py
```
def attribute_data(self):
    print("trying to attribute")
    result = self.contract2.transact({'from':
      self.oracle_address}).mineBlock(self.data_payload, self.attr_address)
    print("result txn:", result)
    return result
```

A txn_hash is returned to the developer for tracking status of block mine. The request for a block must include the following parameters:

1. Wallet ID of data source
2. Source - Github, Reddit, or other valid data sources.
3. URL - This is an encoded url using Sense public key where the full data can be retrieved async.

Sample:
```
{"data_url":"hlV9BWSe6Cn1shTV81qK6C1liTM9-8mE91kCEfz86Ktkoktj1jBmOzllwtdZiIQ-4946bAUlitCpYLUsZLnApSxr-yM0MqFH0O2hya_IwK25nPRwC6B2SmYSmps2Fk-Xj_Vhd925-IH_rByux2Q62idYcweXDVswDYD_CkgNZJ8kPhPTuU2nCa5ERkYiok-O5FgND1PJc7ngW4h21pdNd3OjnM65eno1qT-o5jCROjw5WGPO8Mt88JuQnLH-M6lhdYVdEcgPtN5QhYX7y3N3aq8JzyQWuAw4e_KfkIBBCSxDuEHuhycnNwb4hqeLwysVBoXd6qhr7bNhpuG11YCBHbrRnXwngLXNnB57V88mWbadGJWiK3b5grNtzkKUgES6mSAvhPEyiI3lxyJT5intvuPhKKKZK-bhP_jC4ewiBdqgdj6H31xzXZqmoEFRQ25tQdSH9bUogB0aLl1eXwLCjgIqidogUWwb5HZtEiWItdAT6kqEtKUM2D5tKyBN6AdEursmcSBFjzH48PFPF0PR6nVcPPa6Gatqz2KgwINmLAmW-5UFLJ2sHYPxo1faUvnIBPstTcecE0s8237gzpysCJG2rwkYFNSRb6J8fMBN5VSssrHV1Rmh1c_Jze9Nldsfrpf5yAjMkZCPgb3_qTSSEEJnmSOrFMzO5Zf8m2hNS8A=","credit_id":"hashofcreditattributionrecord","attr_address":"0xcc036143c68a7a9a41558eae739b428ecde5ef66"}
```

In the above sample, the `data_url` field is the result of encoding this developers url, with the credit_id record. For example: `https://approved-attributor.com/api/full_record/:credit_id` where `:credit_id` is `hashofcreditattributionrecord`.

Once the request is received, the sense network server will access that URL for the full data payload. The full data payload needs to include:

* wallet_id
* source
* categories
* full searchable data set
