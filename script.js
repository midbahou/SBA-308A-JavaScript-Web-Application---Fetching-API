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
        const response = await fetch(url, options);
        console.log(response);
        
        if (!response.ok) {
            throw new Error("HTTP error! Status: ", response.status);
        }

        const responseData = await response.json();
        console.log("This is the Response Data: ", responseData);



        
        document.getElementById("WeatherInfo").innerHTML = `
        <h2>${responseData.location.name}</h2>;
        <table>;
        <tr><td><b>Temperature</b></td><td>${responseData.current.temperature}</td></tr>;
        </table>`

    
    

        
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
}

fetchWeatherData()

searchBtn.addEventListener("click", fetchWeatherData);


