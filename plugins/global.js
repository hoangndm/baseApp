/*
* Global Class that contains reuse functions
*/
import moment from "moment";

export default class Global {
    static convertPrice(number, seperator) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, seperator);
    }

    static convertDate(date, format) {
        return moment(date).format(format);
    }
}