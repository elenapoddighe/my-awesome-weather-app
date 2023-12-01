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
  let fewCloudsNightImage =
    'url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/424/original/ali-choubin-aO-Wq5CV0z8-unsplash.jpg?1701354815")';
  let scatteredCloudsDayImage =
    'url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/426/original/roberto-sorin-w5AIBOeo9Uo-unsplash.jpg?1701355464")';
  let scatteredCloudsNightImage =
    'url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/427/original/aral-tasher-njMi2OFoQqQ-unsplash.jpg?1701355721")';
  let brokenCloudsDayImage =
    'url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/429/original/tim-oliver-metz-glFocUiIyWo-unsplash.jpg?1701356115")';
  let brokenCloudsNightImage =
    'url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/430/original/anandu-vinod-pbxwxwfI0B4-unsplash.jpg?1701356375")';
  let showerRainDayImage =
    'url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/433/original/nick-nice-ve-R7PCjJDk-unsplash.jpg?1701356693")';
  let showerRainNightImage =
    'url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/434/original/eutah-mizushima-F-t5EpfQNpk-unsplash.jpg?1701357234")';
  let rainDayImage =
    'url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/435/original/inge-maria-pv2ZlDfstXc-unsplash.jpg?1701357295")';
  let thunderstormDayImage =
    'url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/441/original/raychel-sanner-1cJXplTxrmI-unsplash.jpg?1701357734")';
  let thunderstormNightImage =
    'url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/439/original/melody-p-wFN9B3s_iik-unsplash.jpg?1701357654")';
  let snowDayImage =
    'url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/443/original/chandler-cruttenden-kM1p1c1q8qo-unsplash.jpg?1701358190")';
  let snowNightImage =
    'url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/444/original/william-topa-dG8d8JYnnvA-unsplash.jpg?1701358410")';
  let mistDayImage =
    'url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/445/original/ricardo-gomez-angel-jg4pkrwaico-unsplash.jpg?1701358560")';
  let mistNightImage =
    'url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/446/original/stephen-hamilton-lNIQCHMuOTI-unsplash.jpg?1701358779")';

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

  console.log("iconDescriptionElement:", iconDescriptionElement);
  console.log("temperature:", temperature);

  if (iconDescriptionElement === "clear-sky-day") {
    if (temperature >= 30) {
      suggestionElement.innerHTML = "🥵 alert 🚨 Drink 💧 and wear 🕶️ & 🧴!";
    } else if (temperature > 20) {
      suggestionElement.innerHTML = "💧, 🕶️, 🧴 and you are ready to go!";
    } else if (temperature === 20) {
      suggestionElement.innerHTML =
        "Enjoy the perfect weather, you deserve it!😎";
    } else if (temperature >= 15) {
      suggestionElement.innerHTML =
        "Amazing weather, but don't forget to bring a 🧥!";
    } else if (temperature >= 10) {
      suggestionElement.innerHTML = "Mandatory: 🧥, 🧣, 🧤, 🕶️";
    } else if (temperature < 10) {
      suggestionElement.innerHTML =
        "Beautiful but 🥶, make sure to keep yourself warm!";
    }
    bodyElement.style.backgroundImage = clearSkyDayImage;
  }

  if (iconDescriptionElement === "clear-sky-night") {
    if (temperature >= 30) {
      suggestionElement.innerHTML =
        "Nope, you can't spend the night inside the refrigerator...but I get you 🥵";
    } else if (temperature > 20) {
      suggestionElement.innerHTML = "🥵 Make sure you stay hydrated 💧!!";
    } else if (temperature === 20) {
      suggestionElement.innerHTML = "Such a wonderful night, enjoy it!";
    } else if (temperature >= 15) {
      suggestionElement.innerHTML = "Don't forget that 🧥!";
    } else if (temperature >= 10) {
      suggestionElement.innerHTML = "Mandatory: 🧥, 🧣, 🧤, 🕶️";
    } else if (temperature < 10) {
      suggestionElement.innerHTML =
        "It's beautiful outside but don't you prefer to stay in tonight? 🥶";
    }
    bodyElement.style.backgroundImage = clearSkyNightImage;
  }

  if (iconDescriptionElement === "few-clouds-day") {
    if (temperature >= 30) {
      suggestionElement.innerHTML =
        "🥵 At least the clouds help with the shade! Don't forget 💧 & 🕶️";
    } else if (temperature > 20) {
      suggestionElement.innerHTML = "💧, 🕶️, 🧴 and you are ready to go!";
    } else if (temperature === 20) {
      suggestionElement.innerHTML = "Almost perfect weather, enjoy! 😎";
    } else if (temperature >= 15) {
      suggestionElement.innerHTML = "Don't forget that 🧥!";
    } else if (temperature >= 10) {
      suggestionElement.innerHTML = "Mandatory: 🧥, 🧣, 🧤, 🕶️";
    } else if (temperature < 10) {
      suggestionElement.innerHTML =
        "Beautiful but 🥶, make sure to keep yourself warm!";
    }
    bodyElement.style.backgroundImage = fewCloudsDayImage;
  }

  if (iconDescriptionElement === "few-clouds-night") {
    if (temperature >= 30) {
      suggestionElement.innerHTML =
        "🥵 At least the clouds help with the shade! Don't forget 💧 & 🕶️";
    } else if (temperature > 20) {
      suggestionElement.innerHTML = "💧, 🕶️, 🧴 and you are ready to go!";
    } else if (temperature === 20) {
      suggestionElement.innerHTML = "Enjoy the almost perfect weather! 😎";
    } else if (temperature >= 15) {
      suggestionElement.innerHTML = "Don't forget that 🧥!";
    } else if (temperature >= 10) {
      suggestionElement.innerHTML = "Mandatory: 🧥, 🧣, 🧤, 🕶️";
    } else if (temperature < 10) {
      suggestionElement.innerHTML =
        "Nice sky but 🥶, make sure to keep yourself warm!";
    }
    bodyElement.style.backgroundImage = fewCloudsNightImage;
  }

  if (iconDescriptionElement === "scattered-clouds-day") {
    if (temperature >= 30) {
      suggestionElement.innerHTML =
        "🥵 At least the cloud help with the shade! Don't forget 💧 & 🕶️";
    } else if (temperature > 20) {
      suggestionElement.innerHTML = "💧, 🕶️, 🧴 and you are ready to go!";
    } else if (temperature === 20) {
      suggestionElement.innerHTML = "Almost perfect weather, enjoy! 😎";
    } else if (temperature >= 15) {
      suggestionElement.innerHTML = "Don't forget that 🧥!";
    } else if (temperature >= 10) {
      suggestionElement.innerHTML = "Mandatory: 🧥, 🧣, 🧤, 🕶️";
    } else if (temperature < 10) {
      suggestionElement.innerHTML =
        "Beautiful but 🥶, make sure to keep yourself warm!";
    }
    bodyElement.style.backgroundImage = scatteredCloudsDayImage;
  }

  if (iconDescriptionElement === "scattered-clouds-night") {
    if (temperature > 30) {
      suggestionElement.innerHTML =
        "🥵 At least the cloud help with the shade! Don't forget 💧 & 🕶️";
    } else if (temperature >= 20) {
      suggestionElement.innerHTML = "💧, 🕶️, 🧴 and you are ready to go!";
    } else if (temperature === 20) {
      suggestionElement.innerHTML = "Almost perfect weather, enjoy! 😎";
    } else if (temperature >= 15) {
      suggestionElement.innerHTML = "Don't forget that 🧥!";
    } else if (temperature >= 10) {
      suggestionElement.innerHTML = "Mandatory: 🧥, 🧣, 🧤, 🕶️";
    } else if (temperature < 10) {
      suggestionElement.innerHTML =
        "Beautiful but 🥶, make sure to keep yourself warm!";
    }
    bodyElement.style.backgroundImage = scatteredCloudsNightImage;
  }

  if (iconDescriptionElement === "broken-clouds-day") {
    if (temperature >= 30) {
      suggestionElement.innerHTML =
        "🥵 At least the cloud help with the shade! Don't forget to 💧";
    } else if (temperature >= 20) {
      suggestionElement.innerHTML =
        "Maybe you want to consider to bring an ☂️?";
    } else if (temperature === 20) {
      suggestionElement.innerHTML =
        "Sky could be better, but the temperature is perfect! 🙃";
    } else if (temperature >= 15) {
      suggestionElement.innerHTML = "Don't forget that 🧥!";
    } else if (temperature >= 10) {
      suggestionElement.innerHTML = "Mandatory: 🧥, 🧣, 🧤";
    } else if (temperature < 10) {
      suggestionElement.innerHTML = "🥶 Make sure to keep yourself warm!";
    }
    bodyElement.style.backgroundImage = brokenCloudsDayImage;
  }

  if (iconDescriptionElement === "broken-clouds-night") {
    if (temperature >= 30) {
      suggestionElement.innerHTML = "I guess this is how hell feels like? 🥵";
    } else if (temperature > 20) {
      suggestionElement.innerHTML = "Maybe you want to consider to bring an ☂️";
    } else if (temperature === 20) {
      suggestionElement.innerHTML =
        "Sky could be better, but the temperature is perfect! 🙃";
    } else if (temperature >= 15) {
      suggestionElement.innerHTML = "Don't forget that 🧥!";
    } else if (temperature >= 10) {
      suggestionElement.innerHTML = "Mandatory: 🧥, 🧣, 🧤";
    } else if (temperature < 10) {
      suggestionElement.innerHTML =
        "🥶 make sure to keep yourself warm...and you might want to take your ☂️!";
    }
    bodyElement.style.backgroundImage = brokenCloudsNightImage;
  }

  if (iconDescriptionElement === "shower-rain-day") {
    if (temperature >= 30) {
      suggestionElement.innerHTML = "Tropical storm? ☂️";
    } else if (temperature > 20) {
      suggestionElement.innerHTML = "Tropical storm? ☂️";
    } else if (temperature === 20) {
      suggestionElement.innerHTML = "At least the temperature is perfect...🫣";
    } else if (temperature >= 15) {
      suggestionElement.innerHTML = "Don't forget 🧥 and ☂️!";
    } else if (temperature >= 10) {
      suggestionElement.innerHTML = "Mandatory: 🧥, 🧣, 🧤, ☂️";
    } else if (temperature < 10) {
      suggestionElement.innerHTML = "Do you really want to go out?!";
    }
    bodyElement.style.backgroundImage = showerRainDayImage;
  }

  if (
    iconDescriptionElement === "shower-rain-night" ||
    iconDescriptionElement === "rain-night"
  ) {
    if (temperature >= 30) {
      suggestionElement.innerHTML = "Tropical storm? ☂️";
    } else if (temperature >= 20) {
      suggestionElement.innerHTML = "Tropical storm? ☂️";
    } else if (temperature === 20) {
      suggestionElement.innerHTML = "At least the temperature is perfect...🫣";
    } else if (temperature >= 15) {
      suggestionElement.innerHTML = "Don't forget 🧥 and ☂️!";
    } else if (temperature >= 10) {
      suggestionElement.innerHTML = "Mandatory: 🧥, 🧣, 🧤, ☂️";
    } else if (temperature < 10) {
      suggestionElement.innerHTML = "Netflix & chill? ☕️";
    }
    bodyElement.style.backgroundImage = showerRainNightImage;
  }

  if (iconDescriptionElement === "rain-day") {
    if (temperature >= 30) {
      suggestionElement.innerHTML = "Tropical storm? ☂️";
    } else if (temperature >= 20) {
      suggestionElement.innerHTML = "Tropical storm? ☂️";
    } else if (temperature === 20) {
      suggestionElement.innerHTML = "At least the temperature is perfect...🫣";
    } else if (temperature >= 15) {
      suggestionElement.innerHTML = "Don't forget 🧥 and ☂️!";
    } else if (temperature >= 10) {
      suggestionElement.innerHTML = "Mandatory: 🧥, 🧣, 🧤, ☂️";
    } else if (temperature < 10) {
      suggestionElement.innerHTML = "Do you really want to go out?!";
    }
    bodyElement.style.backgroundImage = rainDayImage;
  }

  if (iconDescriptionElement === "thunderstorm-day") {
    if (temperature >= 30) {
      suggestionElement.innerHTML = " 🫣🥵🫣🥵🫣";
    } else if (temperature > 20) {
      suggestionElement.innerHTML = "🫣🫣🫣";
    } else if (temperature === 20) {
      suggestionElement.innerHTML = "At least the temperature is perfect...🫣";
    } else if (temperature >= 15) {
      suggestionElement.innerHTML =
        "You really need to get out? Be careful! 👀🧥🧣";
    } else if (temperature >= 10) {
      suggestionElement.innerHTML = "Mandatory: 🧥, 🧣, 🧤, ☂️";
    } else if (temperature < 10) {
      suggestionElement.innerHTML = "Do you really want to go out?!";
    }
    bodyElement.style.backgroundImage = thunderstormDayImage;
  }

  if (iconDescriptionElement === "thunderstorm-night") {
    if (temperature >= 30) {
      suggestionElement.innerHTML = " 🫣🥵🫣🥵🫣";
    } else if (temperature >= 20) {
      suggestionElement.innerHTML = "🫣🫣🫣";
    } else if (temperature === 20) {
      suggestionElement.innerHTML = "At least the temperature is perfect...🫣";
    } else if (temperature >= 15) {
      suggestionElement.innerHTML =
        "You really need to get out? Be careful! 👀🧥🧣";
    } else if (temperature >= 10) {
      suggestionElement.innerHTML = "Mandatory: 🧥, 🧣, 🧤, ☂️";
    } else if (temperature < 10) {
      suggestionElement.innerHTML = "Do you really want to go out?!";
    }
    bodyElement.style.backgroundImage = thunderstormDayImage;
  }

  if (iconDescriptionElement === "snow-day") {
    if (temperature < 10) {
      suggestionElement.innerHTML = "Yes to: ☃️ 🏂 🎿 ❄️! ";
    } else if (temperature < 0) {
      suggestionElement.innerHTML = "🥶🥶🥶! ";
    }
    bodyElement.style.backgroundImage = snowDayImage;
  }

  if (iconDescriptionElement === "snow-night") {
    if (temperature < 10) {
      suggestionElement.innerHTML = "Yes to: ☃️ 🏂 🎿 ❄️! ";
    } else if (temperature < 0) {
      suggestionElement.innerHTML = "Netflix & chill! ☕️ ";
    }
    bodyElement.style.backgroundImage = snowNightImage;
  }

  if (iconDescriptionElement === "mist-day") {
    suggestionElement.innerHTML =
      "Are you driving today? Make sure to pay attention 👀";
    bodyElement.style.backgroundImage = mistDayImage;
  }

  if (iconDescriptionElement === "mist-night") {
    suggestionElement.innerHTML =
      "Are you driving tonight? Make sure to pay attention 👀";
    bodyElement.style.backgroundImage = mistNightImage;
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

function getForecast(city) {
  let apiKey = "e52093t32d4f473a570bb10aoa2ca4e0";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function forecastDay(timestamp) {
  let currentDate = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let nextDay = new Date(currentDate);
  nextDay.setDate(currentDate.getDate() + 1);
  return days[nextDay.getDay()];
}

function displayForecast(response) {
  console.log(response.data);

  let forecastHtml = "";

  response.data.daily.forEach(function (day, index) {
    if (index < 5) {
      forecastHtml =
        forecastHtml +
        `
                <div class="row">
                    <div class="class-2">
                        <div class="forecast-date">${forecastDay(
                          day.time
                        )} </div>
                        
                        <img src="${
                          day.condition.icon_url
                        }" class="forecast-icon" />
                    
                        <div class="forecast-temperature">
                            <span class="maximum-temp">
                                ${Math.round(day.temperature.maximum)}°
                            </span>
                            <span class="minimum-temp">
                                ${Math.round(day.temperature.minimum)}°
                            </span>
                        </div>
                    </div>
                </div>
                `;
    }
  });

  let forecast = document.querySelector("#forecast");
  forecast.innerHTML = forecastHtml;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Barcelona");
