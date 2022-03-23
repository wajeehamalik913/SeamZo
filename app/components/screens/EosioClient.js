import React from 'react';
import { Api, JsonRpc, JsSignatureProvider } from 'eosjs';
import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs2'; 
const endpoint = "http://localhost:8888";

const network = {
    blockchain: "eos",
    protocol: "http",
    host: "localhost",
    port: 8888,
    chainId: "cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f" 
  };

export default class EOSIOClient extends React.Component {
constructor(contractAccount) {
    super(contractAccount);
    this.contractAccount = contractAccount;
    ScatterJS.plugins(new ScatterEOS());
    try {
        ScatterJS.scatter.connect(this.contractAccount).then(connected => {
          if (!connected) return console.log("Issue Connecting");
        const scatter = ScatterJS.scatter;
        const requiredFields = {
          accounts: [network] // We defined this above
        };
        scatter.getIdentity(requiredFields).then(() => {
          this.account = scatter.identity.accounts.find(
            x => x.blockchain === "eos"
          );
          const rpc = new JsonRpc(endpoint);
            this.eos = scatter.eos(network, Api, { rpc });
          });
          window.ScatterJS = null; // Don't forget to do this!
   
            });
        } 
        catch (error) {
            console.log(error);
        }
    }
  }