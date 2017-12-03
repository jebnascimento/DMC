var Backendless = require('backendless');
var serialport = require('serialport');
var SerialPort = serialport.SerialPort;
var port = new SerialPort('/dev/ttyS1', {
	baudrate: 9600,
	parser: serialport.parsers.readline('\n')
});

port.on('data', function (data) {
  	console.log('Data: ' + data);
	BackendService(data);
});

function BackendService(data) {
	var self = this;
	var APPLICATION_ID = '0694BCFE-17FA-8AD1-FF86-9A142CF8E500';
	var SECRET_KEY = '451C2025-2D99-C9FC-FF4B-8FB90373DB00';

        Backendless.initApp(APPLICATION_ID, SECRET_KEY);

        Backendless.Data.of("frequencia").save({
                id: 1,
                bpm: parseInt(data)
        }).then(function (obj) {
                console.log("object saved. objectId " + obj.objectId)
        }).catch(function (error) {
                console.log("got error - " + error)
        });
};
