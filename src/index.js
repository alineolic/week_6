let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentDay = days[now.getDay()];

let hour = now.getHours();

let minutes = now.getMinutes();

let h2 = document.querySelector("h2");
h2.innerHTML = `${currentDay} ${hour}:${minutes} GMT`;

function measures(event) {
  event.preventDefault();
  let currentTemp = document.querySelector("#current-temp");
  currentTemp.innerHTML = 51;
}

let conversion = document.querySelector("#f-link");
conversion.addEventListener("click", measures);

function measures2(event) {
  event.preventDefault();
  let celsiusTemp = document.querySelector("#current-temp");
  celsiusTemp.innerHTML = 11;
}

let conversionCelsius = document.querySelector("#c-link");
conversionCelsius.addEventListener("click", measures2);

function search(city) {
  let apiKey = "3a5b83d2290ca8aeea736a82a10e7ea7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function displayWeatherCondition(response) {
  document.querySelector("#current-city").innerHTML = response.data.name;
  document.querySelector("#current-temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#sky-now").innerHTML = response.data.weather[0].main;
  document.querySelector("#min-temperature").innerHTML = Math.round(
    response.data.main.temp_min
  );
  document.querySelector("#max-temperature").innerHTML = Math.round(
    response.data.main.temp_max
  );
  console.log(response);
}

function enterCity(event) {
  event.preventDefault();
  let city = document.querySelector("#search-input").value;
  search(city);
}

let form = document.querySelector("form");
form.addEventListener("submit", enterCity);

search("New York");
