module.exports=[
	{
		"constant": false,
		"inputs": [
			{
				"name": "_id",
				"type": "uint256"
			},
			{
				"name": "sender",
				"type": "string"
			},
			{
				"name": "to",
				"type": "string"
			},
			{
				"name": "message",
				"type": "string"
			},
			{
				"name": "timeStamp",
				"type": "string"
			}
		],
		"name": "createPost",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "getPostArrayLength",
		"outputs": [
			{
				"name": "len",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getPostByIndex",
		"outputs": [
			{
				"name": "_id",
				"type": "uint256"
			},
			{
				"name": "sender",
				"type": "string"
			},
			{
				"name": "to",
				"type": "string"
			},
			{
				"name": "message",
				"type": "string"
			},
			{
				"name": "timeStamp",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "allPost",
		"outputs": [
			{
				"name": "_id",
				"type": "uint256"
			},
			{
				"name": "sender",
				"type": "string"
			},
			{
				"name": "to",
				"type": "string"
			},
			{
				"name": "message",
				"type": "string"
			},
			{
				"name": "timeStamp",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "postArray",
		"outputs": [
			{
				"name": "_id",
				"type": "uint256"
			},
			{
				"name": "sender",
				"type": "string"
			},
			{
				"name": "to",
				"type": "string"
			},
			{
				"name": "message",
				"type": "string"
			},
			{
				"name": "timeStamp",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]