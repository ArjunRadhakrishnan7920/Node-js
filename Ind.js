// console.log("New first");

// setTimeout(function(){
//     console.log("hello");
// },1000);
// console.log("first");

// var i=0;
// var res=setInterval(function(){
//     i++;

//     console.log(i);
//    if (i==10){
//        clearInterval(res);}
// },2000);

// var http=require("http");
// http.createServer(function(request,response){
//     response.write("<h1>Welocme</h1>");
    
// }).listen(8000);

// var fs=require("fs");
// fs.writeFile("new.txt","hello welocme",function(err){
//     if(err){
//         console.log("not working");
//     }
// })

// var fs=require("fs");
// fs.appendFile("new.txt"," more tetxt added to the content ",function(err){
//     if(err){
//         console.log("not working");
//     }
// })


//reading a file

// var fs=require("fs");
// fs.readFile("new.txt","utf8",function(err,data){
//     console.log(data);
// })


//deleting afile

// var fs=require("fs");
// fs.unlink("new.txt",function(err){

// })

// var http=require("http");
// var fs=require("fs");

// http.createServer(function(req,res){
//  fs.readFile("index.html",function(err,data){
//      res.write(data);
//      res.end();
//  })    

// }).listen(3000);






//url and accesing multiple files in server


const url=require("url")
var http=require("http")
var fs=require("fs")

http.createServer(function(req,res){
    
    url.parse(req.url);

    fs.readFile("."+ parsed.pathname,function(err,data){
        if(err){
            res.writeHead(404,{'Content-type':'text/html'});
            return res.end("Error page notfound");
        }
        res.writeHead(200,{'Content-type':'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(8000);