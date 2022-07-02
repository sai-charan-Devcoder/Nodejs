//create a class with the help of Events
const EventEmitter=require("events");

//create an object
const event=new EventEmitter();


//create an event listener
event.on('saymyname',()=>{
    console.log("my name is saicharan");
})

//create an event listener
event.on('saymyname',()=>{
    console.log("my name is charan");
})

//firing an event onetime
event.emit('saymyname');
event.on("checkPage",(sc,msg)=>{
    console.log(`status code is ${sc}`);
})

event.emit('checkPage',200,"ok");


