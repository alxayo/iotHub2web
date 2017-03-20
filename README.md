# iotHub2web

Sample application demonstrating how to send Azure IoT Hub Device messages directly to web application.

## Motivation 

Number of Azure IoT Hub samples demonstrate how to consume IoT device messages through Azure IoT Hub Service SDK.
Most of these samples follow architecture similar to the use used in Azure IoT suite where device messages are initially stored in Blob or other form of storage and then read from that storage and rendered to Web App UI.
This sample application demonstrates how to push messages directly from Azure IoT Hub to Web App without persisting the data – resulting in near real time data visualization.

## Tech notes

The sample was build using: 
* Azure IoT Hub Client and Service SDK - https://github.com/azure/azure-iot-sdk-node
* Azure Event Hub SDK - https://github.com/Azure/azure-event-hubs
* Web App
..* Express - https://github.com/expressjs/express
..* Socket.io - https://socket.io/get-started/

### Visual Studio Code

The code was developed using Visual Studio Code. All necessary launch configurations were added as part of the launch.json.

##Inspiration
The original idea about the implementation was inspired by the functionality of [IoT Hub Explorer](https://github.com/Azure/iothub-explorer) - "a tool that allows you to explore and test Azure IoT Hub features".
The Event Monitor implementation: https://github.com/Azure/iothub-explorer/blob/master/iothub-explorer-monitor-events.js was key part to developing this sample.

## Running the sample

### Pre-requisite
You need to create and Azure IoT Hub. For the purposes of this app you can use the F1 - Free tier.
Tutorial how to create Azure IoT hub here: https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-create-through-portal

You need to have NodeJS and NPM on your environment. Application was developed using the following versions:
* node - v6.9.4
* npm - 3.10.10

_Optional_ Visual Studio Code: https://code.visualstudio.com/

### Steps to run the app
1. Clone the repo
2. Run __npm install__ to insall all required npm packages
3. Create an IoT Hub Device
    1. Open __config.json__
    2. Enter "deviceID" - this will be used as ID to create a new Device in IoT Hub
    3. Place the "iotHubConnectionString" - your IoT Hub Connection String used by the Service SDK
    4. Run "IoT Device" configuration from VS Code or __node create_device.js__ to create the deavice in IoT Hub
4. Get the Device Connection String from Azure IoT Hub and place it in __config.json__ as "deviceConnectionString"
5. Run "IoTHub Msg Reader" configuration from VS Code or __node hub_recive_msg.js__ to start the application.
6. Open __http://localhost:8088__ in your web browser and you shoud see a web blank page.
7. Run "IoT Device" configuration from VS Code or __node iot_device.js__ to start the IoT device simulator.
8. The web page should start showing the IoT messages generated by the simulator.

