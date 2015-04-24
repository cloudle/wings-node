"use strict";

const
  net = require('net'),
  port = process.argv[2],
  client = net.connect({port: port});

if (!port) {
  throw new Error("You must specify the port!");
}

client.on('data', function(data){
  let message = JSON.parse(data);
  if (message.type === 'watching') {
    console.log("Now watching '" + message.filename);
  } else if (message.type === 'changed') {
    let date = new Date(message.timestamp);
    console.log("File '" + message.filename + "' changed at " + date);
  }
  else {
    throw new Error("Unrecognized message type: " + message.type);
  }
});