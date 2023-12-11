const contractAddress = "0x648EbB014a3889909D08E00c5d5f77c994047250"

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
			},
			{
				"internalType": "uint256",
				"name": "_startTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_endTime",
				"type": "uint256"
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
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "startTime",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "endTime",
				"type": "uint256"
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
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
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
				"components": [
					{
						"internalType": "string",
						"name": "choiceText",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "voteCount",
						"type": "uint256"
					}
				],
				"internalType": "struct Voting.ElectionChoice[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
export { contractAddress, contractAbi }