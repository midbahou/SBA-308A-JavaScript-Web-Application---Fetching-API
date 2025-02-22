// the search bar input element
const searchBarInput = document.getElementById("cityInput");
// The search button
const searchBtn = document.getElementById("searchBtn");


// store the API_KEY and the url in a variable
const API_KEY = "11d8406ae7ff6bace178c0f49e2310c2"
const options = {
    method: 'GET'
}


async function fetchWeatherData() {
    const city = searchBarInput.value;
    
    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`;
    
    try {
        const response = await fetch(url);
        console.log(response);
        
        if (!response.ok) {
            throw new Error("HTTP error! Status: ", response.status);
        }

        const responseData = await response.json();
        console.log("This is the Response Data: ", responseData);

        if (responseData.error) {
            document.getElementById("weatherInfo").innerHTML = `<p>${responseData.error.info}</p>`;
            return;
        }

        document.body.style.backgroundImage = "url('sunny.jpg')"

        const { temperature, weather_descriptions, humidity, wind_speed, weather_icons, feelslike } = responseData.current;

        let WeatherInfo = document.getElementById("WeatherInfo");
        WeatherInfo.innerHTML = "";
        WeatherInfo.innerHTML += `<h2>${responseData.location.name}, ${responseData.location.country}</h2>`;
        WeatherInfo.innerHTML += `<table>`;

        WeatherInfo.innerHTML += `<img src="${weather_icons[0]}" alt="Weather Icon"><br>`;
        WeatherInfo.innerHTML += `<tr><td><b>Temperature: </b></td><td>${temperature}°C</td></tr><br>`;
        WeatherInfo.innerHTML += `<tr><td><b>Feels Like: </b></td><td>${feelslike}°C</td></tr><br>`;
        WeatherInfo.innerHTML += `<tr><td><b>Weather_Description: </b></td><td>${weather_descriptions[0]}</td></tr><br>`;
        WeatherInfo.innerHTML += `<tr><td><b>Humidity: </b></td><td>${humidity}%</td></tr><br>`;
        WeatherInfo.innerHTML += `<tr><td><b>Wind_Speed: </b></td><td>${wind_speed} km/h</td></tr><br>`;
        
        WeatherInfo.innerHTML += `</table>`;


        // document.getElementById("WeatherInfo").innerHTML = `
        // <h2>${responseData.location.name}</h2>;
        // <table>;
        // <tr><td><b>Temperature</b></td><td>${responseData.current.temperature}</td></tr>;
        // </table>`

    
    

        
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
}

// fetchWeatherData()

searchBtn.addEventListener("click", fetchWeatherData);


