import React from "react";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  if (props.dataValue === true) {
    function getForecastData(response) {
      let dailyWeather = response.data.daily;
      console.log(dailyWeather);
    }
    function searchForecast(lat, lon) {
      let apiKey = props.apiKey;
      let units = `imperial`;
      let urlForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
      axios.get(urlForecast).then(getForecastData);
    }
    searchForecast(props.lat, props.lon);

    return <div></div>;
  } else {
    return <div></div>;
  }
}
