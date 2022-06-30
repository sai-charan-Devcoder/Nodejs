const fs=require('fs');
// fs.writeFile('file.txt',"creating new file",
// (err)=>{
// console.log("file is created")
// console.log(err)
// });

/* append the data*/

// fs.appendFile('file.txt',"my file",
// (err)=>{
//     console.log("task completed");
// console.log(err);
// });

/*read the data*/

// fs.readFile("file.txt", 'utf-8',(err,data)=>
// {
//     console.log(data);
// });

// fs.mkdir('jsFolder',(err)=>{console.log(err)});
// fs.writeFile("Bio.txt","Javascript Mastery",(err)=>{
//     console.log("file created");
// })

fs.rename("Bio.txt","bio.txt",(err)=>{
    console.log("file renamed")
});