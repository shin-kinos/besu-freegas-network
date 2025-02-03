
require( "@nomicfoundation/hardhat-toolbox" );

module.exports = {
  solidity: {
    version: "0.8.20"
  },
  networks: {
    besu: {
      /* This is RPC-HTTP endpoint of Besu network */
      url: "http://127.0.0.1:4989",
      /* This is private key of coinbase account (0xfe3b557e8fb62b89f4916b721be55ceb828dbd73) */
      accounts: [ "0x8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63" ]
    }
  }
}
