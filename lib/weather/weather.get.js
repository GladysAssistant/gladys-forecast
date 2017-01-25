const shared = require('../shared.js');

module.exports = function get(options) {
    return shared.forecastInstance.getAsync([options.latitude, options.longitude])
        .then((result) => {

            var dataToReturn = {};
            var dataPoint = null;

            // if options.offset == 0, it means it's now
            if(options.offset == 0) {
                dataPoint = result.currently;

              // if options.offset < 24, we take in the hour response
            } else if(options.offset < 24){
                if(result.hourly.data.length >= options.offset) {
                    dataPoint = result.hourly.data[options.offset - 1];
                } else {
                    dataPoint = result.currently;
                }

              // else if options.offset > 24, we take in the daily response    
            } else {

                // we transform options.offset in day count
                options.offset = Math.round(options.offset/24);
                
                if(result.daily.data.length >= options.offset) {
                    dataPoint = result.daily.data[options.offset - 1];
                } else {
                    dataPoint = result.daily.data[result.daily.data.length - 1];
                }
            }

            dataToReturn.temperature = dataPoint.temperature;
            dataToReturn.humidity = dataPoint.humidity;
            dataToReturn.pressure = dataPoint.pressure;
            if(dataPoint.icon.search('snow') != -1) dataToReturn.weather = 'snow';
            if(dataPoint.icon.search('rain') != -1) dataToReturn.weather = 'rain';
            if(dataPoint.icon.search('clear') != -1) dataToReturn.weather = 'clear';
            if(dataPoint.icon.search('cloud') != -1) dataToReturn.weather = 'cloud';
            if(dataPoint.icon.search('fog') != -1) dataToReturn.weather = 'fog';
            if(dataPoint.icon.search('sleet') != -1) dataToReturn.weather = 'sleet';

            return dataToReturn;
        });
};