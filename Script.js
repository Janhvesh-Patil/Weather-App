const api_key = "e4d83a03265841e28b9135948252808";
const base_URL = "https://api.weatherapi.com/v1/current.json";

const getWeatherBtn = document.getElementById("Get-weather");

getWeatherBtn.addEventListener("click", () => {
    const cityLocation = document.getElementById("City-search").value;
    const url = `${base_URL}?key=${api_key}&q=${cityLocation}&aqi=no`;

    let promise = async () => {
    let response = await fetch(url);
    console.log(response);
    
    // Respones
    let data = await response.json();
    console.log("Lattitude -> ", data.location.lat);
    console.log("Longitutde -> ", data.location.lon);
    console.log("Weather -> ", data.current.condition.text);
    console.log("Temperature (C) -> ", data.current.temp_c);
    console.log("Temperature (F) -> ", data.current.temp_f);
    console.log("Humidity : ", data.current.humidity);
    console.log("Wind Data -> [ 'Wind speed(mph)' : ", data.current.wind_mph, ", 'Wind speed(kph)' : ", data.current.wind_kph, " , 'Wind Degree' : ", data.current.wind_degree, " , 'Wind Direction' : ", data.current.wind_dir, " ]");
    
    //Location data
    document.getElementById("Location-info").innerHTML = `Lattitude : ${data.location.lat} <br> Longitude : ${data.location.lon}`;
    
    //Temperature data
    document.getElementById("Temp-info").innerHTML = `Celcius : ${data.current.temp_c} °C <br> Fahrenheit : ${data.current.temp_f} °F`;
    
    //Weather data
    document.getElementById("Weather-info").innerHTML = `${data.current.condition.text}`;

    //Humidity data
    document.getElementById("Humidity-data").innerHTML = `${data.current.humidity} %`;

    //Wind Data
    document.getElementById("Wind-data").innerHTML = `Wind speed (mph) : ${data.current.wind_mph} mph <br> Wind speed (kmph) : ${data.current.wind_kph} kmph <br> Wind Degree : ${data.current.wind_degree} ° <br> Wind Direction : ${data.current.wind_dir}`;
    }
    promise();
})