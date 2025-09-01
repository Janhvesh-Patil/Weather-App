const api_key = "e4d83a03265841e28b9135948252808";
const base_URL = "https://api.weatherapi.com/v1/current.json";

const getWeatherBtn = document.getElementById("Get-weather");

getWeatherBtn.addEventListener("click", () => {
    const cityLocation = document.getElementById("City-search").value;
    const url = `${base_URL}?key=${api_key}&q=${cityLocation}&aqi=no`;

    let promise = async () => {
    let response = await fetch(url);
    
    // Response
    let data = await response.json();

    const icon_url = data.current.condition.icon;

    document.getElementById("Weather-icon").innerHTML = `<span class="material-symbols-outlined"><img src="${icon_url}" alt="Weather Icon"></span>`;
        
    //Location data
    document.getElementById("Location-info").innerHTML = `Lattitude : ${data.location.lat} <br> Longitude : ${data.location.lon}`;
    
    //Temperature data
    document.getElementById("Temp-info").innerHTML = `Celcius : ${data.current.temp_c} °C <br> Fahrenheit : ${data.current.temp_f} °F`;
    
    //Weather data
    document.getElementById("Weather-info").innerHTML = `${data.current.condition.text}`;

    //Humidity data
    document.getElementById("Humidity-data").innerHTML = `${data.current.humidity} %`;

    //Wind Data
    document.getElementById("Wind-data").innerHTML = `Wind speed (mph) : ${data.current.wind_mph} <br> Wind speed (kmph) : ${data.current.wind_kph} <br> Wind Degree : ${data.current.wind_degree} ° <br> Wind Direction : ${data.current.wind_dir}`;
    }
    promise();
})