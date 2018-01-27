// Create parameters
module.exports = function () {

  var param1 = {
    name: 'FORECAST_API_KEY',
    value: 'YOUR_API_KEY'
  };

  var param2 = {
    name: 'FORECAST_UNITS',
    value: 'si'
  };

  //then we check if the parameters exists
  return gladys.param.getValues([param1.name, param2.name])
    .catch(() => {
      
        //is they doesn't, we create them
      return Promise.all([
        gladys.param.setValue(param1),
        gladys.param.setValue(param2)
      ]);
    });
};
