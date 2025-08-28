const api_key = "e4d83a03265841e28b9135948252808";
const base_URL = "http://api.weatherapi.com/v1//current.json";
const cityLocation = "London";

const url = `${base_URL}?key=${api_key}&q=${cityLocation}&aqi=no`;

let promise = fetch(url);

console.log(promise);