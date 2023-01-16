import getWeatherInfo from './weatherApi';

const initialLocation = 'Tokyo';

export default function renderHomepage() {
  const body = document.querySelector('body');

  const searchBar = document.createElement('div');
  searchBar.classList.add('searchBar');

  const toggleSwitch = document.createElement('div');
  toggleSwitch.classList.add('toggleSwitch');
  toggleSwitch.addEventListener('click', () => {
    toggleUnit();
    const city = document.querySelector('.weatherInfo .cityName').textContent;
    displayLoading();
    getWeatherInfo(city, window.unit)
      .then((data) => renderWeatherInfo(data))
      .catch((error) => renderErrorMessage(error.message));
  });
  const toggleButton = document.createElement('div');
  toggleButton.classList.add('toggleButton');
  toggleSwitch.appendChild(toggleButton);
  const cToggle = document.createElement('div');
  cToggle.textContent = '°C';
  cToggle.classList.add('toggle');
  toggleSwitch.appendChild(cToggle);
  const fToggle = document.createElement('div');
  fToggle.textContent = '°F';
  fToggle.classList.add('toggle');
  toggleSwitch.appendChild(fToggle);
  body.appendChild(toggleSwitch);

  const searchForm = document.createElement('form');
  searchForm.addEventListener('submit', (event) => {
    if (searchForm.checkValidity()) {
      console.log('Button Clicked!');
      displayLoading();
      getWeatherInfo(searchBox.value, window.unit)
        .then((data) => renderWeatherInfo(data))
        .catch((error) => renderErrorMessage(error.message));
    }
    searchBox.value = '';
    event.preventDefault();
  });

  const searchBox = document.createElement('input');
  searchBox.type = 'search';
  searchBox.name = 'searchBox';
  searchBox.required = true;
  searchBox.autocomplete = 'off';
  searchBox.placeholder = 'City name';
  searchForm.appendChild(searchBox);

  const searchButton = document.createElement('button');
  searchButton.type = 'submit';
  searchForm.appendChild(searchButton);

  searchBar.appendChild(searchForm);
  body.appendChild(searchBar);

  const weatherInfo = document.createElement('div');
  weatherInfo.classList.add('weatherInfo');

  body.appendChild(weatherInfo);

  displayLoading();
  getWeatherInfo(initialLocation, window.unit)
    .then((data) => renderWeatherInfo(data))
    .catch((error) => renderErrorMessage(error.message));

  const footer = document.createElement('div');
  footer.classList.add('footer');
  footer.textContent = 'Created by Betsy @ The Odin Project 2022';
  body.appendChild(footer);
}

function renderWeatherInfo(data) {
  clearWeatherInfo();
  renderCurrentWeather(data[0]);
  renderWeatherForecast(data[1]);
  setTimeout(() => {
    const currentWeather = document.querySelector('.currentWeather');
    currentWeather.classList.remove('fadeIn');
    const weatherForecast = document.querySelector('.weatherForecast');
    weatherForecast.classList.remove('fadeIn');
  }, 100);
}

function clearWeatherInfo() {
  const weatherInfo = document.querySelector('.weatherInfo');
  weatherInfo.textContent = '';
}

function renderCurrentWeather(data) {
  const weatherInfo = document.querySelector('.weatherInfo');
  const currentWeather = document.createElement('div');
  currentWeather.classList.add('currentWeather');
  currentWeather.classList.add('fadeIn');

  const cityName = document.createElement('div');
  cityName.classList.add('cityName');
  cityName.textContent = data.cityName;
  currentWeather.appendChild(cityName);

  const weather = document.createElement('div');
  const icon = new Image();
  icon.src = `../weatherIcon/${data.icon}.png`;
  weather.appendChild(icon);
  currentWeather.appendChild(weather);

  const temp = document.createElement('div');
  temp.classList.add('temp');
  temp.classList.add('degree');
  if (window.unit === 'metric') {
    temp.classList.add('metric');
    temp.textContent = data.temp.toFixed(1);
  } else if (window.unit === 'imperial') {
    temp.classList.add('imperial');
    temp.textContent = data.temp.toFixed();
  }
  currentWeather.appendChild(temp);

  const otherInfo = document.createElement('div');
  otherInfo.classList.add('infoRow');
  const windSpeed = document.createElement('div');
  windSpeed.classList.add('windSpeed');
  if (window.unit === 'metric') {
    windSpeed.classList.add('metric');
  } else if (window.unit === 'imperial') {
    windSpeed.classList.add('imperial');
  }
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
  if (window.unit === 'metric') {
    maxTemp.classList.add('metric');
    maxTemp.textContent = data.maxTemp.toFixed(1);
  } else if (window.unit === 'imperial') {
    maxTemp.classList.add('imperial');
    maxTemp.textContent = data.maxTemp.toFixed();
  }
  dayTemp.appendChild(maxTemp);
  const minTemp = document.createElement('div');
  minTemp.classList.add('minTemp');
  minTemp.classList.add('degree');
  if (window.unit === 'metric') {
    minTemp.classList.add('metric');
    minTemp.textContent = data.minTemp.toFixed(1);
  } else if (window.unit === 'imperial') {
    minTemp.classList.add('imperial');
    minTemp.textContent = data.minTemp.toFixed();
  }
  dayTemp.appendChild(minTemp);
  currentWeather.appendChild(dayTemp);
  weatherInfo.appendChild(currentWeather);

  const body = document.querySelector('body');
  if (body.classList.length) {
    body.classList.remove(body.classList.item(0));
  }
  if (data.weather.includes('Clear')) {
    body.classList.add('clear');
  } else if (data.weather.includes('Cloud')) {
    body.classList.add('cloud');
  } else if (data.weather.includes('Rain')) {
    body.classList.add('rain');
  } else if (data.weather.includes('Snow')) {
    body.classList.add('snow');
  }
}

function renderWeatherForecast(data) {
  const weatherInfo = document.querySelector('.weatherInfo');
  const weatherForecast = document.createElement('div');
  weatherForecast.classList.add('weatherForecast');
  weatherForecast.classList.add('fadeIn');

  for (const item of data) {
    const forecast = document.createElement('div');
    forecast.classList.add('forecastBlock');

    const time = document.createElement('div');
    time.classList.add('time');
    time.textContent = hour24to12(item.localTime);
    forecast.appendChild(time);

    const weather = document.createElement('div');
    const icon = new Image();
    icon.src = `../weatherIcon/${item.icon}.png`;
    weather.appendChild(icon);
    forecast.appendChild(weather);

    const temp = document.createElement('div');
    temp.classList.add('temp');
    temp.classList.add('degree');
    if (window.unit === 'metric') {
      temp.classList.add('metric');
      temp.textContent = item.temp.toFixed(1);
    } else if (window.unit === 'imperial') {
      temp.classList.add('imperial');
      temp.textContent = item.temp.toFixed();
    }
    forecast.appendChild(temp);

    const windSpeed = document.createElement('div');
    windSpeed.classList.add('windSpeed');
    if (window.unit === 'metric') {
      windSpeed.classList.add('metric');
    } else if (window.unit === 'imperial') {
      windSpeed.classList.add('imperial');
    }
    windSpeed.textContent = item.windSpeed.toFixed();
    forecast.appendChild(windSpeed);

    const humidity = document.createElement('div');
    humidity.classList.add('humidity');
    humidity.textContent = item.humidity;
    forecast.appendChild(humidity);

    weatherForecast.appendChild(forecast);
    weatherInfo.appendChild(weatherForecast);
  }
}

function renderErrorMessage(errMsg) {
  clearWeatherInfo();
  const weatherInfo = document.querySelector('.weatherInfo');

  const error = document.createElement('div');
  error.classList.add('error');
  error.textContent = 'Oops, something went wrong. Try again!';
  weatherInfo.appendChild(error);

  const errorMessage = document.createElement('div');
  errorMessage.classList.add('error');
  errorMessage.classList.add('message');
  errorMessage.textContent = `Error message: ${errMsg}`;
  weatherInfo.appendChild(errorMessage);
}

function hour24to12(hour) {
  const end = (hour >= 12) ? 'PM' : 'AM';
  if (hour !== 12) {
    hour %= 12;
  }
  return hour + end;
}

function toggleUnit() {
  const toggleButton = document.querySelector('.toggleButton');
  if (window.unit === 'imperial') {
    window.unit = 'metric';
    if (toggleButton.classList.contains('imperial')) {
      toggleButton.classList.remove('imperial');
    }
  } else {
    window.unit = 'imperial';
    toggleButton.classList.add('imperial');
  }
}

function displayLoading() {
  clearWeatherInfo();
  const weatherInfo = document.querySelector('.weatherInfo');
  const loading = document.createElement('div');
  loading.classList.add('loading');
  weatherInfo.appendChild(loading);
}
