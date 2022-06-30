//creation of object
const fs=require('fs')
const biodata={
    name:"sai",
    age:26,
    location:"karimnagar"
}
console.log(biodata.name)

//Convert Object into JSON
const jsonData=JSON.stringify(biodata)
console.log(jsonData)
fs.writeFile("fileJson.json",jsonData,(err)=>{
    console.log("error");
});

fs.readFile("fileJson.json",'utf-8',(error,data)=>{
    //console.log(data)
const obj=JSON.parse(data);
console.log(obj);
})
