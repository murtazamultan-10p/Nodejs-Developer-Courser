const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json');
const dataString = dataBuffer.toString();
var dataParsed = JSON.parse(dataString);

dataParsed.name = 'Murtaza';
dataParsed.age = 25;

const updatedDataString = JSON.stringify(dataParsed);
fs.writeFileSync('1-json.json', updatedDataString);