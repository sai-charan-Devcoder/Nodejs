const http=require('http')
const chalk=require('chalk')
const fs=require('fs');
//create a webserver
//we have to use http.createServer() which includes response
// and request parameters which is supplied by nodejs

//request object is used to get info about current http request
//response object is used to send response for a current http request
const server=http.createServer((req,res)=>{
    const data=fs.readFileSync(`userapi.json`,"utf-8");
        console.log(data);
        const objData=JSON.parse(data);
        
    

   if(req.url=="/"){
    res.end("hello page");
}else if(req.url=="/about"){
    res.end("about");
}else if(req.url=="/contact"){
    res.end("contact page");
}else if(req.url=="/userapi"){
    res.writeHead(200,{"content-type":"application/json"});
    res.end(objData[0].fname);
}else 
    res.end("error");

});
//create a request listener on some port

server.listen(8000,"127.0.0.1",()=>{
console.log(chalk.red.bold("istening to port 8000"))
})