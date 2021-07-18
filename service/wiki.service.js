import axios from 'axios'

const WIKI_API = "https://en.wikipedia.org/api/rest_v1/page/summary/"

export default class WikiService {
    static async getData(string) {
        try {
            return await axios.get(`${WIKI_API}${string}`);
        } catch (error) {
            throw new Error("😬 Wikipedia error");
        }
    }
}