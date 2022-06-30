const fun=require("fs");

// fun.writeFileSync('read.txt',"read channel");
// fun.writeFileSync('read.txt',"sai,read channel");

//fun.appendFileSync('read.txt',"hi how are you");
const buf_data=fun.readFileSync('read.txt');
console.log(buf_data);
const data=buf_data.toString()
console.log(data);