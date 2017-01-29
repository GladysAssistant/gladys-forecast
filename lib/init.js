const Forecast = require('forecast');
const Promise = require('bluebird');
const shared = require('./shared.js');

module.exports = function init(){
    gladys.weather.addProvider('forecast');

    return gladys.param.getValues(['FORECAST_API_KEY', 'FORECAST_UNITS'])
        .spread((forecastApiKey, forecastUnits) => {
            
            // initialize instance with cache settings
            shared.forecastInstance = new Forecast({
                service: 'darksky',
                key: forecastApiKey,
                units: forecastUnits,
                cache: true,
                ttl: {
                    minutes: 10,
                    seconds: 0
                }
            });

            // initialize units
            shared.units = forecastUnits;

            // promisify forecast API
            Promise.promisifyAll(shared.forecastInstance);
        });
};