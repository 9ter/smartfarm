var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "thanankornm",
  password: "BrqHAmTC3w_ZRCut"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});