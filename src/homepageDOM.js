import getWeatherInfo from './weatherApi';

const initialLocation = 'Tokyo';

export default function renderHomepage() {
  const body = document.querySelector('body');

  const searchBar = document.createElement('div');
  searchBar.classList.add('searchBar');

  const searchForm = document.createElement('form');
  searchForm.addEventListener('submit', (event) => {
    if (searchForm.checkValidity()) {
      console.log('Button Clicked!');
      getWeatherInfo(searchBox.value)
        .then((data) => renderWeatherInfo(data));
    } else {
      // Err msg
    }
    event.preventDefault();
  });

  const searchBox = document.createElement('input');
  searchBox.type = 'search';
  searchBox.name = 'searchBox';
  searchBox.required = true;
  searchBox.autocomplete = 'off';
  searchBox.placeholder = 'City name';
  searchForm.appendChild(searchBox);

  const searchButton = document.createElement('input');
  searchButton.type = 'submit';
  searchForm.appendChild(searchButton);

  searchBar.appendChild(searchForm);
  body.appendChild(searchBar);

  const weatherInfo = document.createElement('div');
  weatherInfo.classList.add('weatherInfo');

  const currentWeather = document.createElement('div');
  currentWeather.classList.add('currentWeather');
  weatherInfo.appendChild(currentWeather);

  const weatherForecast = document.createElement('div');
  weatherForecast.classList.add('weatherForecast');
  weatherInfo.appendChild(weatherForecast);

  getWeatherInfo(initialLocation)
    .then((data) => renderWeatherInfo(data));
  body.appendChild(weatherInfo);

  const footer = document.createElement('div');
  footer.classList.add('footer');
  footer.textContent = 'Created by Betsy @ The Odin Project 2022';
  body.appendChild(footer);
}

function renderWeatherInfo(data) {
  renderCurrentWeather(data[0]);
  renderWeatherForecast(data[1]);
}

function renderCurrentWeather(data) {
  const currentWeather = document.querySelector('.currentWeather');
  currentWeather.textContent = '';

  const cityName = document.createElement('div');
  cityName.classList.add('cityName');
  cityName.textContent = data.cityName;
  currentWeather.appendChild(cityName);

  const temp = document.createElement('div');
  temp.classList.add('temp');
  temp.classList.add('degree');
  temp.textContent = data.temp.toFixed(1);
  currentWeather.appendChild(temp);

  const weather = document.createElement('div');
  weather.classList.add('weather');
  weather.textContent = data.weather;
  currentWeather.appendChild(weather);

  const otherInfo = document.createElement('div');
  otherInfo.classList.add('infoRow');
  const windSpeed = document.createElement('div');
  windSpeed.classList.add('windSpeed');
  windSpeed.textContent = data.windSpeed.toFixed();
  otherInfo.appendChild(windSpeed);
  const humidity = document.createElement('div');
  humidity.classList.add('humidity');
  humidity.textContent = data.humidity.toFixed();
  otherInfo.appendChild(humidity);
  currentWeather.appendChild(otherInfo);

  const dayTemp = document.createElement('div');
  dayTemp.classList.add('infoRow');
  const maxTemp = document.createElement('div');
  maxTemp.classList.add('maxTemp');
  maxTemp.classList.add('degree');
  maxTemp.textContent = data.maxTemp.toFixed(1);
  dayTemp.appendChild(maxTemp);
  const minTemp = document.createElement('div');
  minTemp.classList.add('minTemp');
  minTemp.classList.add('degree');
  minTemp.textContent = data.minTemp.toFixed(1);
  dayTemp.appendChild(minTemp);
  currentWeather.appendChild(dayTemp);
}

function renderWeatherForecast(data) {
  const weatherForecast = document.querySelector('.weatherForecast');
  weatherForecast.textContent = '';

  for (const item of data) {
    const forecast = document.createElement('div');
    forecast.classList.add('forecastBlock');

    const time = document.createElement('div');
    time.classList.add('time');
    time.textContent = hour24to12(item.localTime);
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

    weatherForecast.appendChild(forecast);
  }
}

function hour24to12(hour) {
  const end = (hour >= 12) ? 'PM' : 'AM';
  if (hour !== 12) {
    hour %= 12;
  }
  return hour + end;
}
