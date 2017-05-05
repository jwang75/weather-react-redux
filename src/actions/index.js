import axios from 'axios';

const API_KEY = '48fae032a6b0c3ac57207375027ccec2';
// const ROOT_URL = 'http://samples.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;
const ROOT_URL = `https://crossorigin.me/http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`; //es6 syntax


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);


	// console.log('Request:', request);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}