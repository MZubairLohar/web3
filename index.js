console.log(Web3);

const rpcURL = 'http://127.0.0.1:7545';

let web3 = new Web3(rpcURL);

let account = '0x3906A021ACC2f4791ac63dE654C0Ba3784f1C56e';

web3.eth.getBalance(account, (err, wei) => {
  console.log('Blance', wei);
  balance = web3.utils.fromWei(wei, 'ether');
  console.log('Balance in Ether', balance);
});

// first npm init 
// second npm install web3
