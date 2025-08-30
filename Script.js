const api_key = "e4d83a03265841e28b9135948252808";
const base_URL = "https://api.weatherapi.com/v1/current.json";

const getWeatherBtn = document.getElementById("Get-weather");

getWeatherBtn.addEventListener("click", () => {
    const cityLocation = document.getElementById("City-search").value;
    const url = `${base_URL}?key=${api_key}&q=${cityLocation}&aqi=no`;

    let promise = async () => {
    let response = await fetch(url);
    console.log(response);

    let data = await response.json();
    console.log("Lattitude : ", data.location.lat);
    console.log("Longitutde : ", data.location.lon);
    }

    promise();
})

// const cityLocation = "London";

// const url = `${base_URL}?key=${api_key}&q=${cityLocation}&aqi=no`;

// let promise = async () => {
//     let response = await fetch(url);
//     console.log(response);

//     let data = await response.json();
//     console.log(data.location.lat);
// }

// promise();