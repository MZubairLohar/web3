// console.log(Web3);

// const rpcURL = 'http://127.0.0.1:7545';

// let web3 = new Web3(rpcURL);

// let account = '0x3906A021ACC2f4791ac63dE654C0Ba3784f1C56e';

// web3.eth.getBalance(account, (err, wei) => {
//   console.log('Blance', wei);
//   balance = web3.utils.fromWei(wei, 'ether');
//   console.log('Balance in Ether', balance);
// });

// first npm init 
// second npm install web3



console.log(Web3);
const rpcURL= 'https://ropsten.infura.io/v3/9ecfaa0df154400c9995105c2f8feb96'

var web3 = new Web3 (rpcURL)
var abi = [
	{
		"inputs": [],
		"name": "getName",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "setName",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
var account = '0x3906A021ACC2f4791ac63dE654C0Ba3784f1C56e'

var contract = new web3.eth.Contract(abi , account)

// web3.eth.getBalance(account, (err, wei) => {
//   console.log('balance ', wei);
//   balance = web3.utils.fromWei(wei, 'ether');
//   console.log('Balance in ether' , balance);
// });