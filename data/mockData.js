const ccy = [
  {
    symbol: "$",
    name: "US Dollar",
    symbol_native: "$",
    decimal_digits: 2,
    rounding: 0,
    code: "USD",
  },
  {
    symbol: "£",
    name: "UK Pound",
    symbol_native: "£",
    decimal_digits: 2,
    rounding: 0,
    code: "GBP",
  },
];

const bondlist = [
  {
    bondId: 1,
    isin: "GB1234567890",
    desc: "TEST BOND 1",
    issueCcy: "USD",
  },
  {
    bondId: 2,
    isin: "US1TESTBOND2",
    desc: "US 2",
    issueCcy: "USD",
  },
  {
    bondId: 3,
    isin: "GB1234567899",
    desc: "GB 3",
    issueCcy: "GBP",
  },
  {
    bondId: 4,
    isin: "US1TESTBOND4",
    desc: "XS 2",
    issueCcy: "USD",
  },
];

const counterparties = [
  {
    counterpartyId: 1,
    nick: "A",
    cparty: "A Counterparty",
    fullname: "A Counterparty Inc.",
  },
  {
    counterpartyId: 2,
    nick: "B",
    cparty: "B Counterparty",
    fullname: "B Counterparty Inc.",
  },
  {
    counterpartyId: 3,
    nick: "C",
    cparty: "C Counterparty",
    fullname: "C Counterparty Inc.",
  },
  {
    counterpartyId: 4,
    nick: "D",
    cparty: "D Counterparty",
    fullname: "D Counterparty Inc.",
  },
];

const cashByMonth = [
  {
    name: "Sell Buy",
    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
  },
  {
    name: "Buy Sell",
    data: [2.8, 4.8, 2.8, 6.2, 8.4, 23.5, 5.2, 6.7, 22.3, 6.1, 18.9, 3.6],
  },
  {
    name: "Repo",
    data: [0.8, 2.1, 1.8, 2.2, 2.3, 0.5, 1.9, 3.7, 2.7, 2.5, 1.3, 3.6],
  },
];

const totalClients = {
  total: 15,
};

const totalTrades = {
  total: 90,
};

const topTrades = [
  {
    tradeId: "oa4ea1eb4-5533-7825-1f83-862ce9j47f912",
    value: 4569048560938,
  },
  {
    tradeId: "ia4ea2eb9-4788-2373-of83-262da9j47f914",
    value: 34346,
  },
];

const rejectedTrades = [
  {
    cptyName: "A Counterparty Inc",
    error: "Rejected: Market Data outdated",
    isin: "GB1234567890",
    ticketId: "53656-4243",
    ticketStatus: "Rejected",
  },
  {
    cptyName: "A Counterparty Inc",
    error: "Rejected: Market Data outdated",
    isin: "GB1234567890",
    ticketId: "13556-2242",
    ticketStatus: "Rejected",
  },
  {
    cptyName: "B Counterparty Inc",
    error: "Rejected: Something outdated",
    isin: "US1TESTBOND2",
    ticketId: "53110-4243",
    ticketStatus: "Rejected",
  },
];

const trades = [
  {
    bondId: 1,
    cleanPrice: "104",
    desc: "TEST BOND 1",
    dirtyPrice: 45,
    endCash: 90909534.87324,
    endDate: 1647964879000,
    fixed: true,
    fullname: "A Counterparty Inc.",
    haircut: 10,
    isin: "US1TESTBOND3",
    issueCcy: "USD",
    qtyDirection: "positive",
    quantity: "98234586",
    repoRate: 1,
    repoRateType: "Fixed",
    repoYearBasis: "360",
    settlementCcy: "EUR",
    startCash: null,
    startDate: 1646064079000,
    ticketId: "dbea0eb2-2639-4375-9f83-843cc7a44f90",
    ticketStatus: "New",
    trader: "Demo",
    transactionType: "Reverse Repo",
    yieldValue: 1.5,
  },
  {
    bondId: 2,
    cleanPrice: "604",
    desc: "TEST BOND afgadsf asdfasdf",
    dirtyPrice: 45,
    endCash: 5552.87324,
    endDate: 1647964879000,
    fixed: true,
    fullname: "B Counterparty Inc.",
    haircut: 10,
    isin: "US1TESTBOND4",
    issueCcy: "USD",
    qtyDirection: "positive",
    quantity: "73345",
    repoRate: 1,
    repoRateType: "Fixed",
    repoYearBasis: "360",
    settlementCcy: "EUR",
    startCash: 71400,
    startDate: 1646064079000,
    ticketId: "ieea1eb4-2633-4825-0f83-847ce7j47f91",
    ticketStatus: "New",
    trader: "Demo",
    transactionType: "Reverse Repo",
    yieldValue: 2.5,
  },
  {
    bondId: 3,
    cleanPrice: "552",
    desc: "TEST BOND 3",
    dirtyPrice: null,
    endCash: 5552342344.87,
    endDate: 1647964879000,
    fixed: true,
    fullname: "C Counterparty Inc.",
    haircut: 10,
    isin: "GB1234567890",
    issueCcy: "USD",
    qtyDirection: "positive",
    quantity: "39",
    repoRate: 1,
    repoRateType: "Fixed",
    repoYearBasis: "360",
    settlementCcy: "EUR",
    startCash: 600,
    startDate: 1646064079000,
    ticketId: "bebea2ee2-2639-4302-9f22-793cc7a44f90",
    ticketStatus: "New",
    trader: "Demo",
    transactionType: "Reverse Repo",
    yieldValue: 0.3,
  },
  {
    bondId: 4,
    cleanPrice: "73",
    desc: "TEST BOND 4",
    dirtyPrice: 45,
    endCash: 423434.87324,
    endDate: 1647964879000,
    fixed: true,
    fullname: "D Counterparty Inc.",
    haircut: 10,
    isin: "GB1234567899",
    issueCcy: "USD",
    qtyDirection: "positive",
    quantity: "2224",
    repoRate: 1,
    repoRateType: "Fixed",
    repoYearBasis: "360",
    settlementCcy: "EUR",
    startCash: 5600,
    startDate: 1646064079000,
    ticketId: "egea0eb2-2884-20375-9f83-843uo7a36f90",
    ticketStatus: "New",
    trader: "Demo",
    transactionType: "Reverse Repo",
    yieldValue: null,
  },
];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  ccy,
  bondlist,
  counterparties,
  cashByMonth,
  totalClients,
  totalTrades,
  topTrades,
  rejectedTrades,
  trades,
};
