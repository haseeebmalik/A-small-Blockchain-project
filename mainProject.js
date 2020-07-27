
/*in this code we are accessing the functions of one of our deployed
contract on ropsten .This is not transaction ,we are only reading Data.
In this case we are using abi.Here web3 is connecting us 
with infura's ropsten node.
we are accessing blockchain data on web browser.
*/ 


function myFun(){

var write = document.getElementById('h2');
	

	
	   
		
	   








//infura's node end point 
const rpcURL="https://mainnet.infura.io/v3/6f37c18a549041e6a64e2b5b1b938b8d";

let web3=new Web3(rpcURL);
//address of contract deployed on Test Network i.e Ropsten
let address="0x6C095A05764A23156eFD9D603eaDa144a9B1AF33";
// Taking abi code of the contract ,whom functions we want to call
let abi=  
[{"constant":true,"inputs":[],"name":"supportedToken","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_signer","type":"address"}],"name":"unregisteringNode","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"adminKey","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"minDeposit","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_signer","type":"address"},{"name":"_url","type":"string"},{"name":"_props","type":"uint192"},{"name":"_weight","type":"uint64"},{"name":"_additionalDeposit","type":"uint256"}],"name":"updateNode","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_signer","type":"address"},{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"timestampAdminKeyActive","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_url","type":"string"},{"name":"_props","type":"uint192"},{"name":"_signer","type":"address"},{"name":"_weight","type":"uint64"},{"name":"_depositAmount","type":"uint256"},{"name":"_v","type":"uint8"},{"name":"_r","type":"bytes32"},{"name":"_s","type":"bytes32"}],"name":"registerNodeFor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"maxDepositFirstYear","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"nodeRegistryData","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalNodes","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"activateNewLogic","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_url","type":"string"},{"name":"_props","type":"uint192"},{"name":"_weight","type":"uint64"},{"name":"_deposit","type":"uint256"}],"name":"registerNode","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"updateTimeout","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pendingNewLogic","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newLogic","type":"address"}],"name":"adminUpdateLogic","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_signer","type":"address"}],"name":"returnDeposit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_signer","type":"address"}],"name":"adminRemoveNodeFromRegistry","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_hash","type":"bytes32"}],"name":"convict","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_signer","type":"address"},{"name":"_blockhash","type":"bytes32"},{"name":"_blockNumber","type":"uint256"},{"name":"_v","type":"uint8"},{"name":"_r","type":"bytes32"},{"name":"_s","type":"bytes32"}],"name":"revealConvict","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"blockRegistry","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"VERSION","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_blockRegistry","type":"address"},{"name":"_nodeRegistryData","type":"address"},{"name":"_minDeposit","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"url","type":"string"},{"indexed":false,"name":"props","type":"uint192"},{"indexed":false,"name":"signer","type":"address"},{"indexed":false,"name":"deposit","type":"uint256"}],"name":"LogNodeRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"signer","type":"address"}],"name":"LogNodeConvicted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"url","type":"string"},{"indexed":false,"name":"signer","type":"address"}],"name":"LogNodeRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"url","type":"string"},{"indexed":false,"name":"props","type":"uint192"},{"indexed":false,"name":"signer","type":"address"},{"indexed":false,"name":"deposit","type":"uint256"}],"name":"LogNodeUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"signer","type":"address"},{"indexed":false,"name":"oldOwner","type":"address"},{"indexed":false,"name":"newOwner","type":"address"}],"name":"LogOwnershipChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newPendingContract","type":"address"}],"name":"LogNewPendingContract","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"signer","type":"address"},{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"deposit","type":"uint256"},{"indexed":false,"name":"erc20Token","type":"address"}],"name":"LogDepositReturned","type":"event"}]
const contract = new web3.eth.Contract(abi, address);

// calling the dosomework function of contract 


contract.methods.totalNodes().call(function(err,result){
		
	 if(err){
	console.log('error =',err);
	write.innerHTML=`message = ${err} `;
}
     else
	write.innerHTML=`WE HAVE ${result} NODES REGISTER `;
})


   
   }


