
import axios from 'axios'

const WEATHER_API = "http://api.openweathermap.org/data/2.5/weather?q="
const API_KEY = "e14769b10f7687bcb6e935077d0aaf90";

export default class WeatherService {

    static async getData(string) {
        try {
            return await axios.get(`${WEATHER_API}${string}&units=metric&APPID=${API_KEY}`);
        } catch (error) {
            throw new Error("😬 Weather error!");
        }
    }
}