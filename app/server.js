var path = require('path');
var webpack = require('webpack');
var express = require('express');
var bodyParser = require('body-parser');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');
var app = express();
var compiler = webpack(config);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', express.static(path.join(__dirname, './webclient/')));

// Web3 Configuration -----------------------------------
var Web3 = require('web3');
var ABI =require('./ABI');
var web3 =new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
web3.eth.defaultAccount = '0x5c5334ae68554f1c0201fe3d4a70322315397be0';
let contractAddress='0xc45d89c7384c32aff31372f204f0fef9ef3dfaf3';
 var fareWellContract = new web3.eth.Contract(ABI, contractAddress);
// Web3 Configuration End -----------------------------------


app.post('/api/createPost', function(req, res){

    fareWellContract.methods.createPost(req.body._id, req.body.sender,req.body.to,req.body.message,req.body.timeStamp).send({from: web3.eth.defaultAccount, gas: 1000000})
    .then(function(receipt){
      console.log(receipt);
      res.send({response:"Success",
          txHash:receipt.transactionHash
      });
  });

});

app.get('/api/getPostLength', function(req, res){

    fareWellContract.methods.getPostArrayLength().call({from: web3.eth.defaultAccount, gas: 1000000}).then(function(receipt){
        console.log(receipt);
        res.send({response:receipt});
    });

});

app.get('/api/getPost/:index', function (req,res){
    fareWellContract.methods.getPostByIndex(req.params.index).call({from: web3.eth.defaultAccount, gas: 1000000}).then(function(receipt){
        console.log(receipt);
        res.send({response:receipt});
    });
})


app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    },
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
}));

app.use(webpackHotMiddleware(compiler));



//Listening to port 8081
app.listen(8080, '0.0.0.0', function(err, result) {
    if (err) {
        console.error("Error ", err);
    }

    console.log("Server started at 8080");
});
