const apiKey = 'ccd3050dcdf864641f255173ff35f06d';

async function getWeather() {
    const cityInput = document.getElementById('cityInput').value;
    const weatherInfo = document.getElementById('weatherInfo');

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`);
        const data = await response.json();

        if (data.cod === '404') {
            weatherInfo.innerHTML = 'City not found';
        } else {
            const description = data.weather[0].description;
            const temperature = (data.main.temp - 273.15).toFixed(2); // Convert to Celsius
            weatherInfo.innerHTML = `Weather: ${description}<br>Temperature: ${temperature}°C`;
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        weatherInfo.innerHTML = 'Error fetching weather data. Check the console for details.';
    }
}
c1503cfe84a56f2860736155fb796415;
