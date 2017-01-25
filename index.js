module.exports = function(sails) {

    var init = require('./lib/init.js');
    var get = require('./lib/weather/weather.get.js');

    gladys.on('ready', function(){
        init().catch(sails.log.warn);
    });
    
    return {
        weather: {
            get
        }
    };
};