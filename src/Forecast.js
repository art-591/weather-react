import React from "react";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  if (props.data.dataValue === false) {
    return <div></div>;
  } else {
    let WeatherData = props.data;
    function getForecastData(response) {
      let dailyWeather = response.data.daily;
      console.log(dailyWeather);
    }
    function searchForecast(lat, lon) {
      let apiKey = WeatherData.apiKey;
      let units = `imperial`;
      let urlForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
      axios.get(urlForecast).then(getForecastData);
    }
    searchForecast(WeatherData.latitude, WeatherData.longitude);
    let temperature = 91;

    return <div>{temperature}</div>;
  }
}
