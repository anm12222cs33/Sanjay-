async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'd92fcc34c4b01f6c3c4cbd9705969e10'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById('cityName').innerText = `City: ${data.name}`;
            document.getElementById('temperature').innerText = `Temperature: ${data.main.temp} °C`;
            document.getElementById('description').innerText = `Description: ${data.weather[0].description}`;
            document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
            document.getElementById('windSpeed').innerText = `Wind Speed: ${data.wind.speed} m/s`;
        } else {
            alert('City not found!');
        }
    } catch (error) {
        alert('Error fetching weather data');
    }
}
