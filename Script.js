// Weather API data
const api_key = "e4d83a03265841e28b9135948252808";
const base_URL = "https://api.weatherapi.com/v1/current.json";
const getWeatherBtn = document.getElementById("Get-weather");

// Fetch weather data
async function fetchWeather(cityLocation) {
    const url = `${base_URL}?key=${api_key}&q=${cityLocation}&aqi=no`;
    let response = await fetch(url);
    let data = await response.json();
    let uv = data.current.uv;
    let UV_Index;
    if (uv <= 2) {
        UV_Index = "Low";
    } else if (uv > 2 && uv <= 5) {
        UV_Index = "Moderate";
    } else if (uv > 5 && uv <= 7) {
        UV_Index = "High";
    } else if (uv > 7 && uv <= 10) {
        UV_Index = "Very High";
    } else {
        UV_Index = "Extreme";
    }

    const icon_url = data.current.condition.icon;

    // Weather Icon
    document.getElementById("Weather-icon").innerHTML = `<span class="material-symbols-outlined"><img src="${icon_url}" alt="Weather Icon" class="weather-img"></span>`;
        
    // Location data
    document.getElementById("Location-info").innerHTML = `City : ${data.location.name} <br> Region : ${data.location.region} <br> Lattitude : ${data.location.lat} <br> Longitude : ${data.location.lon}`;
    
    // Temperature data
    document.getElementById("Temp-info").innerHTML = `Celcius : ${data.current.temp_c} °C <br> Fahrenheit : ${data.current.temp_f} °F <br> UV Index : ${UV_Index} <br> <br>`;
    
    // Weather data
    document.getElementById("Weather-info").innerHTML = `Condition : ${data.current.condition.text} <br> Visibility: ${data.current.vis_km} km <br> Pressure: ${data.current.pressure_mb} mb <br> <br>`;

    // Humidity data
    document.getElementById("Humidity-data").innerHTML = `Humidity % : ${data.current.humidity} % <br> Cloud Cover: ${data.current.cloud} % <br> Precipitation: ${data.current.precip_mm} mm <br> <br>`;

    // Wind Data
    document.getElementById("Wind-data").innerHTML = `Wind speed (mph) : ${data.current.wind_mph} <br> Wind speed (kmph) : ${data.current.wind_kph} <br> Wind Degree : ${data.current.wind_degree} ° <br> Wind Direction : ${data.current.wind_dir}`;
}

// On button click
getWeatherBtn.addEventListener("click", () => {
    const cityLocation = document.getElementById("City-search").value;
    fetchWeather(cityLocation);
});

// On page load, show default city info
window.addEventListener("DOMContentLoaded", () => {
    const defaultCity = "Pune";
    fetchWeather(defaultCity);
});