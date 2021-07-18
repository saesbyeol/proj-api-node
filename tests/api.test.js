import axios from "axios";
import { exec } from "child_process";

import City from "../models/city.model.js";

import WeatherService from "../service/weather.service.js";
import WikiService from "../service/wiki.service.js";

// START ON LINUX
const isWin = /^win/.test(process.platform);
let server_process = exec("node .", (error, stdout, stderr) => {});

test('Check API - Positive test', async () => {
    const city = "Zagreb";

    let wiki_summary =  (await WikiService.getData(city)).data.extract;
    let temp = (await WeatherService.getData(city)).data.main.temp;

    let tempObj1 = new City(wiki_summary, temp)
    let tempObj2 = (await axios.get(`http://localhost:3000/api/city/${city}`)).data;

    expect(tempObj1).toEqual(tempObj2);
});

test('Check API - Negative test', async () => {
    const city1 = "Zagreb";
    const city2 = "Koprivnica";

    let wiki_summary =  (await WikiService.getData(city1)).data.extract;
    let temp = (await WeatherService.getData(city1)).data.main.temp;

    let tempObj1 = new City(wiki_summary, temp)
    let tempObj2 = (await axios.get(`http://localhost:3000/api/city/${city2}`)).data;

    expect(tempObj1).not.toEqual(tempObj2);
    
    if(!isWin) {
        kill(server_process.pid);
    } else {
        let cp = require('child_process');
        cp.exec('taskkill /PID ' + server_process.pid + ' /T /F', function (error, stdout, stderr) {
    });             
    }
});