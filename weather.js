const apiKey = "06cbdf525d41c0784e061f2c4ebd7753"; 
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search-button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apiKey}`);
    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        return;
    }else{
        var data = await response.json();
    

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";

    if(data.weather[0].main == "Clouds") {
        weatherIcon.src = "clouds.png";
    }else if(data.weather[0].main == "Clear") {
        weatherIcon.src = "clear.png";
    }else if(data.weather[0].main == "Rain") {
        weatherIcon.src = "rain.png";
    }else if(data.weather[0].main == "Drizzle") {
        weatherIcon.src = "drizzle.png";
    }else if(data.weather[0].main == "Mist") {
        weatherIcon.src = "mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
    
}


searchBtn.addEventListener("click", () => {
    checkWeather(searchbox.value);
});