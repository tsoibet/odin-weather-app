import renderHomepage from './homepageDOM';
import './styles.css';

const apiKey = prompt("1. Get a free api key at https://openweathermap.org\n2. Enter your api key:");
window.API_KEY = apiKey;
window.unit = 'metric';
renderHomepage();
