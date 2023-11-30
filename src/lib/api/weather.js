// @ts-ignore
export async function get(request) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=-31.948999&lon=115.827003&appid=82e21111c0f1ac69e012708d4972dc15`);
    const data = await response.json();

    if (response.ok) {
        return {
            body: {
                weather: data.weather[0].main,
                temperature: Math.round(data.main.temp - 273.15) // Convert from Kelvin to Celsius
            }
        };
    } else {
        return {
            status: response.status,
            error: new Error('Could not fetch weather data')
        };
    }
}
