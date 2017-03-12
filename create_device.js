'use strict';

//read from the local configuration
var config = require('./config.json');

var iothub = require('azure-iothub');

var connectionString = config.iotHubConnectionString;
var deviceID = config.deviceID;

var registry = iothub.Registry.fromConnectionString(connectionString);
var device = {
  deviceId: deviceID,
  status: 'enabled'
};

registry.create(device, function (err) {
  if(err) {
    console.error('Could not create device: ' + err.message);
  } else {
    registry.get(device.deviceId, function(err, deviceInfo) {
      if(err) {
        console.error('Could not get device: ' + err.message);
      } else {
        console.log(JSON.stringify(deviceInfo));
      }
    });
  }
});