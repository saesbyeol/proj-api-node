import City from "../models/city.model.js";
import WeatherService from "../service/weather.service.js";
import WikiService from "../service/wiki.service.js";
import TextUtils from "../utils/text.utils.js";

export async function get_informations(req, res) {
    try {
        let city_name = TextUtils.toTitleCase(req.params.name).replace(/\s/g, '');
        
        let wiki_summary = (await WikiService.getData(city_name)).data.extract;
        let temp = (await WeatherService.getData(city_name)).data.main.temp;
    
        res.send(new City(wiki_summary, temp));
    } catch (error) {
        res.status(400).send({
            message: '🤖 Unfortunatley we encountered an error, please try again!'
         })
    }
}
