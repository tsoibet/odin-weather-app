import generateHomepage from './generateDOM';
import getWeatherInfo from './weatherApi';
import displayWeatherInfo from './displayDOM';
import './styles.css';

generateHomepage();
getWeatherInfo('Tokyo')
  .then((data) => displayWeatherInfo(data));
