import generateHomepage from './generateDOM';
import getCurrentWeather from './weatherApi';
import displayCurrentWeather from './displayDOM';
import './styles.css';

generateHomepage();
getCurrentWeather('Tokyo')
  .then((data) => displayCurrentWeather(data));
