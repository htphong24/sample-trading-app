const fs = require("fs");
const fsPath = require("path");
const mockData = require("./mockData");

const {
  ccy,
  bondlist,
  counterparties,
  cashByMonth,
  totalClients,
  totalTrades,
  topTrades,
  rejectedTrades,
  trades,
} = mockData;
const data = JSON.stringify({
  ccy,
  bondlist,
  counterparties,
  cashByMonth,
  totalClients,
  totalTrades,
  topTrades,
  rejectedTrades,
  trades,
});
// const data = JSON.stringify(mockData);
const filepath = fsPath.join(__dirname, "db.json");

fs.writeFile(filepath, data, (err) => {
  err ? console.log(err) : console.log("Mock DB created.");
});
