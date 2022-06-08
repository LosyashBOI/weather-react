export const API = {
    KEY: '97f36208f41daeec8c857deb48d7e06c',
    URL_MAIN: 'https://api.openweathermap.org/data/2.5/weather',
    URL_FORECAST: 'https://api.openweathermap.org/data/2.5/forecast',
};

export async function weatherData(serverUrl, cityName) {
    const url = `${serverUrl}?q=${cityName}&cnt=4&appid=${API.KEY}`;
    const response = await fetch(url);

    return response.json();
}
