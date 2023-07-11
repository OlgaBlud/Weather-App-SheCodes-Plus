let currentDate = new Date();
function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
}
let time = document.querySelector(".current-date");
time.innerHTML = formatDate(currentDate);

let cityForm = document.querySelector("form");

let newCity = document.querySelector(".search-field");
function changeCity(event) {
  event.preventDefault();

  let citySearch = newCity.value;

  let key = "99b8f9330a1bfba3a85e523fd3c2e528";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${key}&units=metric`;
  axios.get(url).then(showCityWeather);
  console.log(url);
}
function showCityWeather(response) {
  let currentTemperature = Math.floor(response.data.main.temp);
  let city = document.querySelector("h1");
  city.innerHTML = `${newCity.value}`;
  console.log(currentTemperature);
  let temperatureElement = document.querySelector(".temperature");

  temperatureElement.innerHTML = currentTemperature;
}
cityForm.addEventListener("submit", changeCity);

let fahrenheitUnit = document.querySelector(".fahrenheit-unit");
function convertToFahrenheit(event) {
  event.preventDefault();
}
fahrenheitUnit.addEventListener("click", convertToFahrenheit);

let celsiusUnit = document.querySelector(".celsius-unit");
function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector(".temperature");

  temperatureElement.innerHTML = 19;
}
celsiusUnit.addEventListener("click", convertToCelsius);

