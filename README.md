gladys-forecast
=======================

Gladys weather provider for the forecast API.

Need Gladys >= 3.4

## Installation

- Create a Forecast account here => https://darksky.net/dev/
- In Gladys dashboard, in "Parameters" => "Parameters" :
    - Create a Gladys param "FORECAST_API_KEY" with the API key provided by darksky.
    - Create a Gladys param "FORECAST_UNITS" with either ('si' or 'us' ) (si => celsius + km/h, us => fahrenheit + mph)
- Install the module in Gladys
- Reboot Gladys

## Usage

### Basic

```javascript

var options = {
    latitude: 45,
    longitude: 45
};

gladys.weather.get(options)
    .then((result) => {
        console.log(result);
        console.log(result.temperature);
        console.log(result.weather);
        console.log(result.humidity);
    })
    .catch(console.log);
```

### Offset

If you want the weather in 2 hours, simply call :

```javascript

var options = {
    latitude: 45,
    longitude: 45,
    offset: 2 // in hour
};

gladys.weather.get(options)
    .then((result) => {
        console.log(result);
        console.log(result.temperature);
        console.log(result.weather);
        console.log(result.humidity);
    })
    .catch(console.log);
```

If you wants in 2 days, put offset: 48

It works up to 7 days.
