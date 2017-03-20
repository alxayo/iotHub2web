'use strict';

//read from the local configuration
var config = require('./config.json');
var WebApp = require('./web/app.js'); 

var iotWebApp;

var EventHubsClient = require('azure-event-hubs').Client;

var connectionString = config.iotHubConnectionString;

var client = EventHubsClient.fromConnectionString(connectionString);

var receiveAfterTime = Date.now() - 500000;

var printError = function (err) {
  console.error(err.message);
};

var printEvent = function (ehEvent) {
  console.log('Event Received: ');
  var jsonMsg =JSON.stringify(ehEvent.body)
  console.log(jsonMsg);
  console.log('');
  //emit msg over WS
  iotWebApp.emitMsg(jsonMsg);
};

client.open()
      .then(client.getPartitionIds.bind(client))
      .then(function (partitionIds) {
        return partitionIds.map(function (partitionId) {
          return client.createReceiver('$Default', partitionId, { 'startAfterTime' : receiveAfterTime}).then(function(receiver) {
            receiver.on('errorReceived', printError);
            receiver.on('message', printEvent);
            // start the IoT web application
            iotWebApp = new WebApp();
          });
        });
      })
      .catch(printError);
