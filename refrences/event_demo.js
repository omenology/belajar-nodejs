const eventEmitter = require('events');

// Create class
class MyEmitter extends eventEmitter{}

// Init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('eventss', ()=>{
    console.log('Event Fired!');
});

myEmitter.emit('eventss');