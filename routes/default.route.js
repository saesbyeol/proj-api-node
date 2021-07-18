// APP
import { render_home } from '../controllers/home.controller.js'

// ROUTES
import city_route from "../routes/city/city.route.js";

// API START
const api_path = "/api/";
const city_path = "city/";

// URL
const root = "/";
const city = api_path+city_path;

// EXPORT
export default function (app) {

    // RENDER HOME
    app.get(root, [ render_home ]);

    // RENDER API
    app.use(city, city_route);
}