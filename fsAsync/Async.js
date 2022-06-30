const fs=require('fs');
const data=fs.readFile("file.txt",'utf-8',(err,data)=>{
    console.log(data);
  
});
console.log("after the data")
