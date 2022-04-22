import {Eos,  Api, JsonRpc } from 'eosjs'
import { JsSignatureProvider } from 'eosjs/dist/eosjs-jssig'

//configuring the blockchain network
const httpEndpoint = 'https://jungle3.cryptolions.io:443'
const chainId = '2a02a0053e5a8cf73a56ba0fda11e4d92e0238a4a2aa74fccf46d5a910746840'
const signatureProvider = new JsSignatureProvider(['5JpWBEkxm5N9qvAHdQS35BWKnGm139LVudm2MhSx3BB8cjQKfE1'])

//creating an endpoint or api to call the smart contract deployed on the EOS network
const api = new Api({
  rpc: new JsonRpc(httpEndpoint),
  chainId,
  signatureProvider,
  textDecoder: new TextDecoder(),
  textEncoder: new TextEncoder()
})

/*creates the NFT and runs the transaction on blockchain it requires the 5 digit hash
 created at the time of uploading post*/
export  async function CreateNft (itemSymbol) {
    console.log(itemSymbol)
    try{
        const transactionResult = await api.transact({
          "actions": [
            {
              "account": "accountuser1",
              "name": "create",
              "data": {
                "issuer": "accountuser1",
                "symbol": itemSymbol
              },
              "authorization": [
                {
                  "actor": "accountuser1",
                  "permission": "active"
                }
              ]
            }
          ]
        },
        {
          "blocksBehind": 3,
          "expireSeconds": 30
        })
      } catch (e) {
        alert(e)
    }       
}
/* This funtions issues the craeted NFT to user */
export async  function IssueNft(itemSymbol,Name,Desc) {
    try{
        const transactionResult = await api.transact({
        "actions": [
          {
            "account": "accountuser1",
            "name": "issue",
            "data": {
              "to": "accountuser1",
              "quantity": "1"+ itemSymbol,
              "uris": "",
              "name": Name,
              "memo": Desc
            },
            "authorization": [
              {
                "actor": "accountuser1",
                "permission": "active"
              }
            ]
          }
        ]
      },
      {
        "blocksBehind": 3,
        "expireSeconds": 30
      })
    } catch (e) {
        alert(e)
    }       
}
export async function SelfTransferNft(itemSymbol,userAccount) {
    try{
        const transactionResult = await api.transact({
        "actions": [
          {
            "account": "accountuser1",
            "name": "transfer",
            "data": {
              "from": "accountuser1",
              "to": userAccount,
              "quantity": "1"+ itemSymbol,
              "memo": "Transfered"
            },
            "authorization": [
              {
                "actor": "accountuser1",
                "permission": "active"
              }
            ]
          }
        ]
      },
      {
        "blocksBehind": 3,
        "expireSeconds": 30
      })
    } catch (e) {
        alert(e)
    }
}
export async function SellNft(itemSymbol,userAccount,tranferAccount) {
    try{
        const transactionResult = await api.transact({
            "actions": [
              {
                "account": "accountuser1",
                "name": "transferid",
                "data": {
                  "from": "accountuser1",
                  "to": "seamzousers1",
                  "id": "0",
                  "memo": ""
                },
                "authorization": [
                  {
                    "actor": "accountuser1",
                    "permission": "active"
                  }
                ]
              }
            ]
          },
          {
            "blocksBehind": 3,
            "expireSeconds": 30
          })
    } catch (e) {
        alert(e)
    }
}
export async function BuyNft(itemSymbol,userAccount,ownerAccount) {
    try{
        const transactionResult = await api.transact({
            "actions": [
              {
                "account": "accountuser1",
                "name": "transferid",
                "data": {
                  "from": ownerAccount,
                  "to": userAccount,
                  "id": "0",
                  "memo": ""
                },
                "authorization": [
                  {
                    "actor": "accountuser1",
                    "permission": "active"
                  }
                ]
              }
            ]
          },
          {
            "blocksBehind": 3,
            "expireSeconds": 30
          })
    } catch (e) {
        alert(e)
    }
}