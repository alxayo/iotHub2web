# iotHub2web
======
Sample application demonstrating how to send Azure IoT Hub Device messages directly to web application.

##Motivation 
Number of Azure IoT Hub samples demonstrate how to consume IoT device messages through Azure IoT Hub Service SDK.
Most of these samples follow architecture similar to the use used in Azure IoT suite where device messages are initially stored in Blob or other form of storage and then read from that storage and rendered to Web App UI.
This sample application demonstrates how to push messages directly from Azure IoT Hub to Web App without persisting the data – resulting in near real time data visualization.

##Tech notes
The sample was build using: 
*Azure IoT Hub Client and Service SDK - https://github.com/azure/azure-iot-sdk-node
*Azure Event Hub SDK - https://github.com/Azure/azure-event-hubs
*Web App
 *Express - https://github.com/expressjs/express
 *Socket.io - https://socket.io/get-started/

### Visual Studio Code
The code was developed using Visual Studio Code. All necessary launch configurations were added as part of the launch.json.

##Inspiration
The original idea about the implementation was inspired by the functionality of [IoT Hub Explorer] https://github.com/Azure/iothub-explorer  (a tool that allows you to explore and test Azure IoT Hub features).
The Event Monitor implementation (https://github.com/Azure/iothub-explorer/blob/master/iothub-explorer-monitor-events.js) was key part to developing this sample.

## Running the sample
TBD
### prerequisite
TBD

### Steps to run the app