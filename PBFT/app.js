const express = require("express");
const bodyParser = require("body-parser");
const Wallet = require("./wallet");
const TransactionPool = require("./transaction-pool");
const Validators = require("./validators");
const Blockchain = require("./blockchain");
const BlockPool = require("./block-pool");

const { NUMBER_OF_NODES } = require("./config");
const HTTP_PORT = process.env.HTTP_PORT || 3001;

const wallet = new Wallet(process.env.SECRET);
const transactionPool = new TransactionPool();
const validators = new Validators(NUMBER_OF_NODES);
const blockchain = new Blockchain(validators);
const blockPool = new BlockPool();

const app = express();
app.use(bodyParser.json());

// sends all transactions in the transaction pool to the user
app.get("/transactions", (req, res) => {
  res.json(transactionPool.transactions);
});

// sends the entire chain to the user
app.get("/blocks", (req, res) => {
  res.json(blockchain.chain);
});

// creates transactions for the sent data
app.post("/transact", (req, res) => {
  const { data } = req.body;
  const transaction = wallet.createTransaction(data);
  transactionPool.addTransaction(transaction);
  res.redirect("/transactions");
});

app.listen(HTTP_PORT, () => {
  console.log(`Listening on port ${HTTP_PORT}`);
});
