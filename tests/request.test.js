import axios from "axios";

const WIKI_API = "https://en.wikipedia.org/api/rest_v1/page/summary/"
const WEATHER_API = "http://api.openweathermap.org/data/2.5/weather?q="
const API_KEY = "e14769b10f7687bcb6e935077d0aaf90";

test('Check Wiki API - Positive test', async () => {
    const city = "Zagreb";

    let data = await axios.get(WIKI_API+city);
    expect(data.status).toBe(200);
});

test('Check Wiki API - Negative test', async () => {
    const city = "ZagrebLOL";

    try {
        await axios.get(WIKI_API+city);
        expect(true).toBe(false);
    } catch (e) {
        expect(e.message).toBe("Request failed with status code 404");
    }
});

test('Check Weather API - Positive test', async () => {
    const city = "Zagreb";

    let data = await axios.get(`${WEATHER_API}${city}&units=metric&APPID=${API_KEY}`);
    expect(data.status).toBe(200);
});

test('Check Weather API - Negative test', async () => {
    const city = "ZagrebLOL";

    try {
        await axios.get(`${WEATHER_API}${city}&units=metric&APPID=${API_KEY}`);
        expect(true).toBe(false);
    } catch (e) {
        expect(e.message).toBe("Request failed with status code 404");
    }
});