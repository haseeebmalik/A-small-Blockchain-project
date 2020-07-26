
/*in this code we are accessing the functions of one of our deployed
contract on ropsten .This is not transaction ,we are only reading Data.
In this case we are using abi.Here web3 is connecting us 
with infura's ropsten node.
we are accessing blockchain data on web browser.
*/ 


function myFun(){

var write = document.getElementById('h2');
	

	
	   
		
	   








//infura's node end point 
const rpcURL="https://ropsten.infura.io/v3/6f37c18a549041e6a64e2b5b1b938b8d";

let web3=new Web3(rpcURL);
//address of contract deployed on Test Network i.e Ropsten
let address="0x3E148216435ed31219D87DcFc52AB505A732DAf3";
// Taking abi code of the contract ,whom functions we want to call
let abi=[
	{
		"inputs": [],
		"name": "doSomeThing",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getNumber",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "num",
				"type": "uint256"
			}
		],
		"name": "setNumber",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
const contract = new web3.eth.Contract(abi, address);

// calling the dosomework function of contract 


contract.methods.doSomeThing().call(function(err,result){
		
	 if(err){
	console.log('error =',err);
	write.innerHTML=`message = ${err} `;
}
     else
	write.innerHTML=`return " ${result} "`;
})


   
   }


