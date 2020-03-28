const TestRPC = require("ganache-cli");

const fs = require('fs');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const testmnemonic = fs.readFileSync(".mnemonic").toString().trim();

module.exports = {
  networks: {
    development: {
      provider: TestRPC.provider({port: 7545}),
      network_id: "*" // Match any network id
    },

    tau1: {
      provider: () => new HDWalletProvider(testmnemonic, `wss://ws.tau1.artis.network`),
      //host: "116.203.118.82",     // Localhost (default: none)
      //host: "127.0.0.1",
      //port: 8545,            
      network_id: "*",       // Any network (default: none)
      gas: 500000,
      gasPrice: 100000000000
     },

     sigma1: {
      provider: () => new HDWalletProvider(testmnemonic, `wss://ws.sigma1.artis.network`),
      //host: "116.203.118.82",     // Localhost (default: none)
      //host: "127.0.0.1",
      //port: 8545,            
      network_id: "*",       // Any network (default: none)
      gas: 500000,
      gasPrice: 100000000000
     },

  }
};
