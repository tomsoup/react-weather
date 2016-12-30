import { FETCH_WEATHER } from './actions';
import axios from 'axios';

const API_KEY = '15a6d59e073249c647e8bdaa88b729c4';
const OWMURL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const fetchWeather = (city) => {
  const url = `${OWMURL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
