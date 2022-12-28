import getCurrentWeather from './weatherApi';
import displayCurrentWeather from './displayDOM';

export default function generateHomepage() {
  const body = document.querySelector('body');

  const searchBar = document.createElement('div');
  searchBar.classList.add('searchBar');
  generateSearchBar(searchBar);
  body.appendChild(searchBar);

  const weatherInfo = document.createElement('div');
  weatherInfo.classList.add('weatherInfo');
  generateWeatherInfo(weatherInfo);
  body.appendChild(weatherInfo);

  const footer = document.createElement('div');
  footer.classList.add('footer');
  footer.textContent = 'Created by Betsy @ The Odin Project 2022';
  body.appendChild(footer);
}

function generateSearchBar(parent) {
  const searchForm = document.createElement('form');
  searchForm.addEventListener('submit', (event) => {
    if (searchForm.checkValidity()) {
      getCurrentWeather(searchBox.value)
        .then((data) => displayCurrentWeather(data));
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

  parent.appendChild(searchForm);
}

function generateWeatherInfo(parent) {
  const currentWeather = document.createElement('div');
  currentWeather.classList.add('currentWeather');

  const cityName = document.createElement('div');
  cityName.classList.add('cityName');
  cityName.textContent = '--';
  currentWeather.appendChild(cityName);

  const temp = document.createElement('div');
  temp.classList.add('temp');
  temp.classList.add('degree');
  temp.textContent = '--';
  currentWeather.appendChild(temp);

  const weather = document.createElement('div');
  weather.classList.add('weather');
  weather.textContent = '--';
  currentWeather.appendChild(weather);

  const otherInfo = document.createElement('div');
  otherInfo.classList.add('infoRow');
  const windSpeed = document.createElement('div');
  windSpeed.classList.add('windSpeed');
  windSpeed.textContent = '--';
  otherInfo.appendChild(windSpeed);
  const humidity = document.createElement('div');
  humidity.classList.add('humidity');
  humidity.textContent = '--';
  otherInfo.appendChild(humidity);
  currentWeather.appendChild(otherInfo);

  const dayTemp = document.createElement('div');
  dayTemp.classList.add('infoRow');
  const maxTemp = document.createElement('div');
  maxTemp.classList.add('maxTemp');
  maxTemp.classList.add('degree');
  maxTemp.textContent = '--';
  dayTemp.appendChild(maxTemp);
  const minTemp = document.createElement('div');
  minTemp.classList.add('minTemp');
  minTemp.classList.add('degree');
  minTemp.textContent = '--';
  dayTemp.appendChild(minTemp);
  currentWeather.appendChild(dayTemp);

  parent.appendChild(currentWeather);
}
