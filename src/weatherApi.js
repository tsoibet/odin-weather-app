const API_KEY = 'd788732bd839cde5cbf83ee69d3ad8ff';

export default async function getCurrentWeather(cityName) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);
  const data = await response.json();
  console.log('Get: ', data);
  return processData(data);
}

function processData(data) {
  const object = {
    cityName: data.name,
    temp: data.main.temp,
    weather: data.weather[0].main,
    windSpeed: data.wind.speed,
    humidity: data.main.humidity,
    maxTemp: data.main.temp_max,
    minTemp: data.main.temp_min,
  };
  console.log('Processed: ', object);
  return object;
}
