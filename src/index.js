function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let humidityElement = document.querySelector("#humidity");
  let speedElement = document.querySelector("#speed");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");
  let longitudeElement = document.querySelector("#longitude");
  let latitudeElement = document.querySelector("#latitude");
  let feelsLikeElement = document.querySelector("#feels-like");
  let descriptionElement = document.querySelector("#description");

  cityElement.innerHTML = response.data.city;
  timeElement.innerHTML = formatDate(date);
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  speedElement.innerHTML = `${response.data.wind.speed}km/h`;
  temperatureElement.innerHTML = Math.round(temperature);
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="icon" />`;
  longitudeElement.innerHTML = response.data.coordinates.longitude;
  latitudeElement.innerHTML = response.data.coordinates.latitude;
  feelsLikeElement.innerHTML = `${Math.round(
    response.data.temperature.feels_like
  )}°`;
  descriptionElement.innerHTML = response.data.condition.description;
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
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

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day}, ${hours}:${minutes}`;
}

function searchCity(city) {
  let apiKey = "e52093t32d4f473a570bb10aoa2ca4e0";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  searchCity(searchInput.value);
}

function displayForecast() {
  let days = ["Fri", "Sat", "Sun", "Mon", "Tue"];
  let forecastHtml = "";

  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `
                <div class="row">
                    <div class="class-2">
                        <div class="forecast-date">
                            ${day}
                        </div>
                        <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png"
                            alt="" width="42px">
                        <div class="forecast-temperature">
                            <span class="maximum-temp">
                                18°
                            </span>
                            <span class="minimum-temp">
                                12°
                            </span>
                        </div>
                    </div>
                </div>
                `;
  });

  let forecast = document.querySelector("#forecast");
  forecast.innerHTML = forecastHtml;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Barcelona");
displayForecast();
