export default class TextUtils {
    static toTitleCase(str) {
        let fixed = "";
        let length = str.length;
        for (let index = 0; index < length; index++) {
            if(index == 0) {
                fixed += str[index].toUpperCase();
            } else {
                fixed += str[index].toLowerCase();
            }
        }
        return fixed;
    }
}