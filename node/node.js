var http=require("http");
console.log("hai")
function samp(request,response)
{
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write("Hello");
    response.write("<h1>Hello World<h1>");
}
var server = http.createServer(samp);
server.listen(4000);
console.log