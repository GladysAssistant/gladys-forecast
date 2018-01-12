// Create parameters
module.exports = function(){
	
	var param1 = {
		name: 'FORECAST_API_KEY',
		value: '123456789'
	};
		
	var param2 = {
		name: 'FORECAST_UNITS',
		value: 'si'
	};

	//then we check if the parameters exists
	return gladys.param.getValues([param1.name, param2.name])
		.catch(() => {
			//is they doesn't, we create them
			return gladys.param.setValue(param1)
				.then(() => gladys.param.setValue(param2));
		});
};
