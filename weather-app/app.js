const getWeatherDetails = require('./weather.js');
const location = process.argv[2];

if (!location){
    console.log("Please Provide the location!");
} else {
    getWeatherDetails(location, (err, { location, current } = {}) => {
        if (err) {
            return console.log(err);
        }
    
        console.log(location);
        console.log(current);
    });
}
