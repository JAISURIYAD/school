var express=require('express')
var mysql=require('mysql')
var backend=express()
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Jaisuriyad.20cse",
  database: "mydb"
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });