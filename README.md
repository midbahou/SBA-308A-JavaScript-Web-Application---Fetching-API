# Weather App

This project is a JavaScript-based weather application that allows users to fetch the current weather for a specified city and view it in various units (Celsius, Fahrenheit, or Kelvin). The application uses the [WeatherStack API](https://weatherstack.com/) to fetch weather data and provides a clean, interactive interface with options to toggle dark mode and change units.

## Features

- Search for weather data by entering a city name.
- View weather details including temperature, humidity, wind speed, and more.
- Switch between different units (Metric, Fahrenheit, Scientific).
- Dark mode toggle for better user experience.
- Responsive and user-friendly interface.

## Technologies Used

- **HTML5**: For the structure of the page.
- **CSS3**: For styling and responsive design.
- **JavaScript**: For fetching data from the WeatherStack API and handling UI interactivity.
- **WeatherStack API**: Provides real-time weather data.

## File Structure


### `index.html`

The main HTML file includes the structure of the weather app interface, including:

- An input field to enter a city name.
- A button to fetch weather data.
- A dropdown to select the desired units (Celsius, Fahrenheit, or Kelvin).
- A section to display the weather information returned by the API.

### `styles.css`

The CSS file provides styling for the app, including:

- Responsive design for the weather information section and input fields.
- Fixed positioning for the dark mode button and unit change button at the top of the screen.
- A gradient background and modern button designs for a visually appealing layout.
- Dark mode toggle functionality.

### `script.js`

The main JavaScript file handles:

- Fetching weather data from the WeatherStack API based on user input.
- Updating the weather information displayed on the page.
- Handling the unit change functionality, allowing users to switch between Celsius, Fahrenheit, and Kelvin.
- Adding event listeners for the search and unit change buttons.

### `helpers.js`

This file contains utility functions, including:

- A function for toggling the dark mode on and off.
- A function for managing the UI when switching between different units.

## How to Use

1. Clone the repository to your local machine.
2. Open the `index.html` file in a web browser.
3. Enter a city name into the input field and click the "Get Weather" button to fetch the weather data.
4. Use the dropdown menu and "Change Unit" button to switch between Celsius, Fahrenheit, and Kelvin.
5. Click the "Change Unit" button to update the units, and the weather data will refresh accordingly.

## API Key

This app uses the [WeatherStack API](https://weatherstack.com/), which requires an API key to fetch weather data. You can obtain an API key by signing up at WeatherStack. Replace the API key in the `script.js` file with your own.

```javascript
const API_KEY = "your-api-key-here";
