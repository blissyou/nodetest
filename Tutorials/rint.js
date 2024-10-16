const EventEmitter= require('events');
const custom = new EventEmitter();

setInterval(()=>{
    custom.emit('tick');
},1000);

exports.tick = custom;