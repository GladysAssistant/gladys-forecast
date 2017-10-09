// Create parameters
module.exports = function(){
	
	var param = {
		name: 'FORECAST_API_KEY',
		value: '123456789'
	};

	gladys.param.setValue(param);
		
	var param = {
		name: 'FORECAST_UNITS',
		value: 'si'
	};

	return gladys.param.setValue(param);
};
