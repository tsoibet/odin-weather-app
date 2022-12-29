export default function displayWeatherInfo(data) {
  displayCurrentWeather(data[0]);
  displayWeatherForecast(data[1]);
}

function displayCurrentWeather(data) {
  console.log('Display current:', data);
  for (const property in data) {
    const info = document.querySelector(`.${property}`);
    info.textContent = data[property];
  }
}

function displayWeatherForecast(data) {
  console.log('Display forecast:', data);
  const parent = document.querySelector('.weatherForecast');
  parent.textContent = '';

  for (const item of data) {
    const forecast = document.createElement('div');
    forecast.classList.add('forecastBlock');

    const time = document.createElement('div');
    time.classList.add('time');
    time.textContent = item.localTime;
    forecast.appendChild(time);

    const temp = document.createElement('div');
    temp.classList.add('temp');
    temp.classList.add('degree');
    temp.textContent = item.temp;
    forecast.appendChild(temp);

    const weather = document.createElement('div');
    weather.classList.add('weather');
    weather.textContent = item.weather;
    forecast.appendChild(weather);

    const windSpeed = document.createElement('div');
    windSpeed.classList.add('windSpeed');
    windSpeed.textContent = item.windSpeed;
    forecast.appendChild(windSpeed);

    const humidity = document.createElement('div');
    humidity.classList.add('humidity');
    humidity.textContent = item.humidity;
    forecast.appendChild(humidity);

    parent.appendChild(forecast);
  }
}
