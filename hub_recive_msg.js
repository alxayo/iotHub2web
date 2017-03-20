'use strict';

//read from the local configuration
var config = require('./config.json');
var webapp = require('web/app.js'); 

var EventHubsClient = require('azure-event-hubs').Client;

var connectionString = config.iotHubConnectionString;

var client = EventHubsClient.fromConnectionString(connectionString);

var receiveAfterTime = Date.now() - 500000;

var printError = function (err) {
  console.error(err.message);
};

var printEvent = function (ehEvent) {
  console.log('Event Received: ');
  console.log(JSON.stringify(ehEvent.body));
  console.log('');
};

client.open()
      .then(client.getPartitionIds.bind(client))
      .then(function (partitionIds) {
        return partitionIds.map(function (partitionId) {
          return client.createReceiver('$Default', partitionId, { 'startAfterTime' : receiveAfterTime}).then(function(receiver) {
            receiver.on('errorReceived', printError);
            receiver.on('message', printEvent);
          });
        });
      })
      .catch(printError);
