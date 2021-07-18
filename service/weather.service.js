import dotenv from 'dotenv'
import axios from 'axios'

dotenv.config();

const WEATHER_API = "http://api.openweathermap.org/data/2.5/weather?q="
const API_KEY = process.env.WEATHER_API_KEY;

export default class WeatherService {

    static async getData(string) {
        try {
            return await axios.get(`${WEATHER_API}${string}&units=metric&APPID=${API_KEY}`);
        } catch (error) {
            throw new Error("😬 Weather error!");
        }
    }
}