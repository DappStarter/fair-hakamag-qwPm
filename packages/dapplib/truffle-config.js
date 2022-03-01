require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame food maid remember mad promote grunt light army gentle'; 
let testAccounts = [
"0x1df11e3840e5ee42a51fd4f8cd8cbf06ad1d19bff42077d0ad684debe5f31bac",
"0xdeaf6b6987e219b91257debeb7f7f542b120ab937be6d83e3e1df54a84b0ba8a",
"0x43ab49b8ab1bb0f295e04afa6cb5fed9b8ab67b507e257fb742656e2fdfdac4d",
"0x8b4f97a3ab86005601dc4d9d1fa3bbb5bdef1ec820ab6d6e916c3a7946f09dd4",
"0x4508d2bf40c40479f34fd4879d44fb7733f9138e41bb728afad85e0dad2ae32a",
"0x116507e7f1280d006e6de29949319ee490d090bd6b07ba7028490d53ea2c7dee",
"0x3e29da4e07c63cb206b7b3395d66b40aca79df37921e862b81f556709c8ac0f5",
"0xa3a0db05f52b13d5138bd6efe7ee5026edbe64c0f9d51a05b54f3e31991dd1ab",
"0xa67a0d6845e638aaae8b09841d7b7f3b8f9791a76da00bd77eee07f812cbf99c",
"0x29bf11fc988572e2354825954b2334c9f3e772cb4e284519584f807de6627653"
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
            version: '^0.8.0'
        }
    }
};

