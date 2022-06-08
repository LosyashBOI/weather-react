import { format } from "date-fns";

function getCelsius(temp) {
    return Math.round(temp - 273.15);
}

function getTime(time) {
    const unixTime = (time - 10800) * 1000; //for Moscow
    const date = new Date(unixTime);

    const hours = (date.getHours() < 10) ? `0${date.getHours()}` : date.getHours();
    const minutes = (date.getMinutes() < 10) ? `0${date.getMinutes()}` : date.getMinutes();

    return `${hours}:${minutes}`;
}

function getDate(time) {
    const date = new Date(time);

    return format(date, "LLLL d");
}

export {getCelsius, getDate, getTime};