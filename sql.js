var http=require('http');
var url=require('url');
var fs=require('fs');
var querystring=require('querystring')


var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Jaisuriyad.20cse",
  database: "mydb"
});



http.createServer(function(request,response)
{
   var file=url.parse(request.url).pathname;
   if(request.url=='/')
   {
      fs.readFile('main.html',function(err,data)
      {
         if(err)
         {
            response.writeHead(404,{'content-type':'text/html'})
            return response.end("error")
         }
         response.writeHead(200,{'content-type':'text/html'})
         response.write(data)
         response.end()
      })
   }
   else if(file=="/staffdone")
   {
   var query=url.parse(request.url).query;
   var name=querystring.parse(query)["name"]
   var password=querystring.parse(query)["pwd"]
   var std=querystring.parse(query)["selectstd"]

   var qur="select password from teacherpassword";
con.query(qur,function(err,result)
{
    if(err) throw err;
    if(result==password)
    {
        fs.readFile('10thmark.html',function(err,data)
      {
         if(err)
         {
            response.writeHead(404,{'content-type':'text/html'})
            return response.end("error")
         }
         response.writeHead(200,{'content-type':'text/html'})
         response.write(data)
         response.end()
      })
    }
})



   response.end()
   }
   else{
      response.end("invalid ")
   }
}).listen(8070);
console.log('running')