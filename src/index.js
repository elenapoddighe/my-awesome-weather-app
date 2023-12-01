function refreshWeather(response) {
  let bodyElement = document.body;
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
  let suggestionElement = document.querySelector("#suggestion");
  let iconDescriptionElement = response.data.condition.icon;
  let clearSkyDayImage =
    'url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/415/original/grooveland-designs-zjoydJb17mE-unsplash.jpg?1701351150")';
  let clearSkyNightImage =
    'url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/417/original/redd-f-5CPIzjWzGxo-unsplash.jpg?1701352914")';
  let fewCloudsDayImage =
    'url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/421/original/wolf-zimmermann-6sf5rf8QYFE-unsplash_%282%29.jpg?1701354314")';

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

  if (iconDescriptionElement === "clear-sky-day" && temperature > 30) {
    suggestionElement.innerHTML = "🥵 alert 🚨 Drink 💧 and wear 🕶️ & 🧴!";
    bodyElement.style.backgroundImage = clearSkyDayImage;
  } else if (
    iconDescriptionElement === "clear-sky-day" &&
    temperature < 30 &&
    temperature > 20
  ) {
    suggestionElement.innerHTML = "💧, 🕶️, 🧴 and you are ready to go!";
    bodyElement.style.backgroundImage = clearSkyDayImage;
  } else if (iconDescriptionElement === "clear-sky-day" && temperature === 20) {
    suggestionElement.innerHTML =
      "Enjoy the perfect weather, you deserve it!😎";
    bodyElement.style.backgroundImage = clearSkyDayImage;
  } else if (
    iconDescriptionElement === "clear-sky-day" &&
    temperature < 20 &&
    temperature > 15
  ) {
    suggestionElement.innerHTML = "Don't forget that 🧥!";
    bodyElement.style.backgroundImage = clearSkyDayImage;
  } else if (
    iconDescriptionElement === "clear-sky-day" &&
    temperature < 15 &&
    temperature > 10
  ) {
    suggestionElement.innerHTML = "Mandatory: 🧥, 🧣, 🧤, 🕶️";
    bodyElement.style.backgroundImage = clearSkyDayImage;
  } else if (iconDescriptionElement === "clear-sky-day" && temperature < 10) {
    suggestionElement.innerHTML =
      "Beautiful but 🥶, make sure to keep yourself warm!";
    bodyElement.style.backgroundImage = clearSkyDayImage;
  }

  if (iconDescriptionElement === "clear-sky-night" && temperature > 30) {
    suggestionElement.innerHTML =
      "Nope, you can't spend the night inside the refrigerator...but I get you 🥵";
    bodyElement.style.backgroundImage = clearSkyDayImage;
  } else if (
    iconDescriptionElement === "clear-sky-night" &&
    temperature < 30 &&
    temperature > 20
  ) {
    suggestionElement.innerHTML = "🥵 Make sure you stay hydrated 💧!!";
    bodyElement.style.backgroundImage = clearSkyNightImage;
  } else if (iconDescriptionElement === "clear-sky-day" && temperature === 20) {
    suggestionElement.innerHTML = "Such a wonderful night, enjoy it!";
    bodyElement.style.backgroundImage = clearSkyNightImage;
  } else if (
    iconDescriptionElement === "clear-sky-night" &&
    temperature < 20 &&
    temperature > 15
  ) {
    suggestionElement.innerHTML = "Don't forget that 🧥!";
    bodyElement.style.backgroundImage = clearSkyNightImage;
  } else if (
    iconDescriptionElement === "clear-sky-night" &&
    temperature < 15 &&
    temperature > 10
  ) {
    suggestionElement.innerHTML = "Mandatory: 🧥, 🧣, 🧤, 🕶️";
    bodyElement.style.backgroundImage = clearSkyNightImage;
  } else if (iconDescriptionElement === "clear-sky-night" && temperature < 10) {
    suggestionElement.innerHTML =
      "It's beautiful outside but don't you prefer to stay in tonight? 🥶";
    bodyElement.style.backgroundImage = clearSkyNightImage;
  }

  if (iconDescriptionElement === "few-clouds-day" && temperature > 30) {
    suggestionElement.innerHTML =
      "🥵 At least the cloud help with the shade! Don't forget 💧 & 🕶️";
    bodyElement.style.backgroundImage = fewCloudsDayImage;
  } else if (
    iconDescriptionElement === "few-clouds-day" &&
    temperature < 30 &&
    temperature > 20
  ) {
    suggestionElement.innerHTML = "💧, 🕶️, 🧴 and you are ready to go!";
    bodyElement.style.backgroundImage = fewCloudsDayImage;
  } else if (
    iconDescriptionElement === "few-clouds-day" &&
    temperature === 20
  ) {
    suggestionElement.innerHTML = "Almost perfect weather, enjoy! 😎";
    bodyElement.style.backgroundImage = fewCloudsDayImage;
  } else if (
    iconDescriptionElement === "few-clouds-day" &&
    temperature < 20 &&
    temperature > 15
  ) {
    suggestionElement.innerHTML = "Don't forget that 🧥!";
    bodyElement.style.backgroundImage = fewCloudsDayImage;
  } else if (
    iconDescriptionElement === "few-clouds-day" &&
    temperature < 15 &&
    temperature > 10
  ) {
    suggestionElement.innerHTML = "Mandatory: 🧥, 🧣, 🧤, 🕶️";
    bodyElement.style.backgroundImage = fewCloudsDayImage;
  } else if (iconDescriptionElement === "few-clouds-day" && temperature < 10) {
    suggestionElement.innerHTML =
      "Beautiful but 🥶, make sure to keep yourself warm!";
    bodyElement.style.backgroundImage = fewCloudsDayImage;
  }
  getForecast(response.data.city);
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
