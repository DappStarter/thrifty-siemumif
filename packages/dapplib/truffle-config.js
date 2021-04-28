require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drum olympic smooth elegant note soap coach hope problem fog snap'; 
let testAccounts = [
"0xce1198bd623ba2941531448f2f55153eb04c7238c9b7175056c7b6da184dc8d8",
"0xfc32c3f4375b2c0e08789aa52135e80ffe8b38d4ca263dedb7bb7ea2f267a41a",
"0xf4c8a441c5558e2fe8fd31a8af0429316e502b9389ee6826db0da99d1dc53611",
"0xc99eef04f1aeccff7be641e980da8e89937608728190ec127b33e3854aecce4a",
"0x7f78c9f5dcf64425f45d424891186b0e4bcb49d4fc91e016d0dd9a61559f6c91",
"0xb9b094e3cfaeb4d6540066f016b1875c9590fb8d3c467ae3dda9dae07e5573b7",
"0xc1fa41ea922594de40d686f0128d3f6421b2d05429404d5d2fae580166a5a9fc",
"0xb02394f4278c5759c4986aa99538a660091f3a444b579d0f38ef48cd51901765",
"0xa2c016cd604ffcaae7e44913b88d11b2f39e587b5577d95153d6f94bfbfa0dce",
"0x194a57f8f81bec0a658d78f3b593edf4aecb69bc85e1f3142e33b833f208619e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
