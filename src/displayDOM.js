export default function displayCurrentWeather(data) {
  for (const property in data) {
    const info = document.querySelector(`.${property}`);
    info.textContent = data[property];
  }
}
