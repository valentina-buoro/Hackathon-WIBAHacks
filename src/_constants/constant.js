const contractAddress = "0x7A245F271c4886498615B96671Ce1cBe1513094E"

const contractAbi = [
	{
	  "inputs": [
		{
		  "internalType": "string",
		  "name": "_electionName",
		  "type": "string"
		},
		{
		  "internalType": "uint256",
		  "name": "_voteChoice",
		  "type": "uint256"
		}
	  ],
	  "name": "castVote",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "string",
		  "name": "_electionName",
		  "type": "string"
		},
		{
		  "internalType": "string[]",
		  "name": "_choiceTexts",
		  "type": "string[]"
		}
	  ],
	  "name": "createElection",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": true,
		  "internalType": "string",
		  "name": "electionName",
		  "type": "string"
		},
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "creator",
		  "type": "address"
		}
	  ],
	  "name": "ElectionCreated",
	  "type": "event"
	},
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "voter",
		  "type": "address"
		},
		{
		  "indexed": true,
		  "internalType": "string",
		  "name": "electionName",
		  "type": "string"
		},
		{
		  "indexed": false,
		  "internalType": "uint256",
		  "name": "voteChoice",
		  "type": "uint256"
		}
	  ],
	  "name": "Voted",
	  "type": "event"
	},
	{
	  "inputs": [
		{
		  "internalType": "string",
		  "name": "_electionName",
		  "type": "string"
		}
	  ],
	  "name": "getCandidates",
	  "outputs": [
		{
		  "internalType": "string[]",
		  "name": "",
		  "type": "string[]"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "string",
		  "name": "_electionName",
		  "type": "string"
		}
	  ],
	  "name": "getResults",
	  "outputs": [
		{
		  "internalType": "uint256[]",
		  "name": "",
		  "type": "uint256[]"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	}
  ]

export { contractAddress, contractAbi }