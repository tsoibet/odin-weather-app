export default async function getWeatherInfo(cityName, unit) {
  const data = await Promise.all([getCurrentWeather(cityName, unit), getWeatherForecast(cityName, unit)]);
  return processData(data, unit);
}

async function getCurrentWeather(cityName, unit) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${window.API_KEY}&units=${unit}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  return data;
}

async function getWeatherForecast(cityName, unit) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${window.API_KEY}&units=${unit}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  return data;
}

function processData(dataArray, unit) {
  const currentObject = {
    cityName: dataArray[0].name,
    displayUnit: unit,
    temp: dataArray[0].main.temp,
    weather: dataArray[0].weather[0].main,
    icon: dataArray[0].weather[0].icon,
    windSpeed: dataArray[0].wind.speed,
    humidity: dataArray[0].main.humidity,
    maxTemp: dataArray[0].main.temp_max,
    minTemp: dataArray[0].main.temp_min,
  };

  const forecastObjectArray = [];
  for (let i = 0; i < 6; i += 1) {
    const dateObject = new Date((dataArray[1].list[i].dt + dataArray[1].city.timezone) * 1000);
    const object = {
      localTime: dateObject.getUTCHours(),
      temp: dataArray[1].list[i].main.temp,
      weather: dataArray[1].list[i].weather[0].main,
      icon: dataArray[1].list[i].weather[0].icon,
      windSpeed: dataArray[1].list[i].wind.speed,
      humidity: dataArray[1].list[i].main.humidity,
    };
    forecastObjectArray.push(object);
  }

  return [currentObject, forecastObjectArray];
}
