import React, { useState } from 'react'
import {Eos,  Api, JsonRpc } from 'eosjs'
import { JsSignatureProvider } from 'eosjs/dist/eosjs-jssig'

const httpEndpoint = 'https://jungle3.cryptolions.io:443'
const chainId = '2a02a0053e5a8cf73a56ba0fda11e4d92e0238a4a2aa74fccf46d5a910746840'
const signatureProvider = new JsSignatureProvider(['5JpWBEkxm5N9qvAHdQS35BWKnGm139LVudm2MhSx3BB8cjQKfE1'])

const api = new Api({
  rpc: new JsonRpc(httpEndpoint),
  chainId,
  signatureProvider,
  textDecoder: new TextDecoder(),
  textEncoder: new TextEncoder()
})
// eos=Eos(api)
// options = {
//     authorization: 'accountuser1@active',
//     broadcast: true,
//     sign: true
//   }
function Nft(props) {
  const [symbol, setSymbol] = useState('')
   const [error, setError] = useState('')
  const [result, setResult] = useState( '')
  

  const handleKeyPress = async () => {
    if(e.key !== 'Enter') return
    await sum()
  }
const sum = async () => {
    try{
      const transactionResult = await api.transact({
        "actions": [
          {
            "account": "accountuser1",
            "name": "create",
            "data": {
              "issuer": "accountuser1",
              "symbol": symbol
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
      
    }
  }

  const retry = () => {
    setResult(undefined)
  }

    
    return (
        <div className='contract-container'>
          <div className='contract-header-container'>
            <div className='contract-header'>Addition</div>
             <button className='button' onClick={e => sum()} >Get Result</button>
            {typeof result === 'number' && <button className='button' onClick={e => retry()} >Retry</button>}
          </div>
          <div className='equation'>
            
            <div className='input-container'>
              <input
                className='input'
                name='second'
                type='string'
                onChange={e => setSymbol(e.target.value)}
               >
              </input>
            </div>
            {result === undefined && <div className='result'>?</div>}
            {typeof result === 'number' && <div className='result'>{result}</div>}
          </div>
    
          
        </div>
      )
    
}
export default Nft;