const API_KEY = 'd788732bd839cde5cbf83ee69d3ad8ff';

export default async function getWeatherInfo(cityName) {
  console.log('Start fetching...');
  const data = await Promise.all([getCurrentWeather(cityName), getWeatherForecast(cityName)]);
  console.log('Done fetching. ', data);
  return processData(data);
}

async function getCurrentWeather(cityName) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);
  const data = await response.json();
  console.log('Current: ', data);
  return data;
}

async function getWeatherForecast(cityName) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`);
  const data = await response.json();
  console.log('Forecast: ', data);
  return data;
}

function processData(dataArray) {
  const currentObject = {
    cityName: dataArray[0].name,
    temp: dataArray[0].main.temp,
    weather: dataArray[0].weather[0].main,
    windSpeed: dataArray[0].wind.speed,
    humidity: dataArray[0].main.humidity,
    maxTemp: dataArray[0].main.temp_max,
    minTemp: dataArray[0].main.temp_min,
  };
  console.log('Processed current: ', currentObject);

  const forecastObjectArray = [];
  for (let i = 0; i < 6; i += 1) {
    const dateObject = new Date((dataArray[1].list[i].dt + dataArray[1].city.timezone) * 1000);
    const object = {
      localTime: hour24to12(dateObject.getUTCHours()),
      temp: dataArray[1].list[i].main.temp,
      weather: dataArray[1].list[i].weather[0].main,
      windSpeed: dataArray[1].list[i].wind.speed,
      humidity: dataArray[1].list[i].main.humidity,
    };
    forecastObjectArray.push(object);
  }
  console.log('Processed forecast: ', forecastObjectArray);

  return [currentObject, forecastObjectArray];
}

function hour24to12(hour) {
  const end = (hour >= 12) ? 'PM' : 'AM';
  if (hour !== 12) {
    hour %= 12;
  }
  return hour + end;
}
