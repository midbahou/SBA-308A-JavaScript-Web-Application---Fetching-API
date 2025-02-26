import { screenMode, darkLightBtn } from "./helpers.js";

// const darkLightBtn = document.createElement("button");


// declaration of variables
const searchBarInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const unitButton = document.getElementById("unitBtn");
const unitSelect = document.getElementById("unitSelect");


// store the API_KEY and the url in a variable
const API_KEY = "0de02c77cc88db2abc82790f1a813b15"
const options = {
    method: 'GET'
}

// fetch weather data
async function fetchWeatherData() {
    const city = searchBarInput.value.trim();
    
    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`;
    
    try {
        const response = await fetch(url, options);
        console.log(response);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        console.log("This is the Response Data: ", responseData);

        if (responseData.error) {
            document.getElementById("weatherInfo").innerHTML = `<p>${responseData.error.info}</p>`;
            return;
        }

        // document.body.style.backgroundImage = "url('sunny.jpg')"
        
        // extract data
        const { temperature, weather_descriptions, humidity, wind_speed, weather_icons, feelslike, precip } = responseData.current;
        
        // Update Weather Info
        let weatherInfo = document.getElementById("weatherInfo");
        weatherInfo.innerHTML = `
        <h2>${responseData.location.name}, ${responseData.location.country}</h2>
        <h3>Local Time: ${responseData.location.localtime}</h3>
        <img src="${weather_icons[0]}" alt="Weather Icon">
        
        <table>
        <tr><td><b>Temperature: </b></td><td>${temperature}°C</td></tr>
        <tr><td><b>Feels Like: </b></td><td>${feelslike}°C</td></tr>
        <tr><td><b>Weather_Description: </b></td><td>${weather_descriptions[0]}</td></tr>
        <tr><td><b>Precipitation: </b></td><td>${precip}%</td></tr>
        <tr><td><b>Humidity: </b></td><td>${humidity}%</td></tr>
        <tr><td><b>Wind_Speed: </b></td><td>${wind_speed} km/h</td></tr>
        </table>`
        
        
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
}


// Handle Unit Selection
async function unitMode() {
    const city = searchBarInput.value.trim();
    console.log(unitSelect.value)
    let unit = "m"; // Default to Metric

    switch(unitSelect.value){
        case "Fahrenheit":
            unit = "f";
            break;
        case "Scientific":
            unit = "s";
            break;
        case "Metric":
            default:
                unit = "m";
                break;
    }


    
    const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}&units=${unitSelect.value}`;

    try {
        const res = await fetch(url, options);
        const data = await res.json();
        
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        console.log("Updated Weather data: ",data);
        unitSelect.classList.toggle("show");

        let unitSymbol = unitSelect.value === "f" ? "°F" : unitSelect.value === "s" ? "°K" : "°C";

        const { temperature, weather_descriptions, humidity, wind_speed, weather_icons, feelslike, precip } = data.current;

        // Update Weather Info
        let weatherInfo = document.getElementById("weatherInfo");
        weatherInfo.innerHTML = `
        <h2>${data.location.name}, ${data.location.country}</h2>
        <h3>Local Time: ${data.location.localtime}</h3>
        <img src="${weather_icons[0]}" alt="Weather Icon">

        <table>
            <tr><td><b>Temperature: </b></td><td>${temperature}${unitSymbol}</td></tr>
            <tr><td><b>Feels Like: </b></td><td>${feelslike}${unitSymbol}</td></tr>
            <tr><td><b>Weather_Description: </b></td><td>${weather_descriptions[0]}</td></tr>
            <tr><td><b>Precipitation: </b></td><td>${precip}%</td></tr>
            <tr><td><b>Humidity: </b></td><td>${humidity}%</td></tr>
            <tr><td><b>Wind_Speed: </b></td><td>${wind_speed} ${unitSelect.value==="f"?"mph" : unitSelect.value==="s"?"m/s" : "km/h"}</td></tr>
        </table>`
        
    } catch (error) {
        console.error(error);
    }
}


// Event Listeners
searchBtn.addEventListener("click", fetchWeatherData);
darkLightBtn.addEventListener("click", screenMode);
unitButton.addEventListener("click", unitMode);








// ============= Unused Code (I tried different ways to implement it) ===================================================

// document.getElementById("WeatherInfo").innerHTML = `
// <h2>${responseData.location.name}</h2>;
// <table>;
// <tr><td><b>Temperature</b></td><td>${responseData.current.temperature}</td></tr>;
// </table>`

// const unitMenu = document.getElementById("dropdownBtn");

// if(unitSelect.value === "Fahrenheit") unit = "f";
// if(unitSelect.value === "Scientific") unit = "s";

// let unitValue = "°C";
// if (responseData.request.unit === "m") {
//     unitValue = "°C";
// } else if (responseData.request.unit  === "f") {
//     unitValue = "°F"
// } else {
//     unitValue = "°K"
// }

// let unitValue = "°C";
// switch (unit) {
//     case "f":
//         unitValue = "°F";
//         break;

//     case "s":
//         unitValue = "°K"
//         break;

//     case "m": 
//     default:
//         unitValue = "°C";
//         break;
// }

