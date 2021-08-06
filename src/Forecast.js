import React from "react";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  if (props.dataValue === true) {
    let lat = props.lat;
    let lon = props.lon;
    let apiKey = `1f6bf5f6e1d5da325c16280778c22717`;
    let units = `imperial`;
    let temperature = 91;

    function getForecastData(response) {
      let dailyWeather = response.data.daily;
      console.log(dailyWeather);
    }

    let urlForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
    axios.get(urlForecast).then(getForecastData);

    return <div>{temperature}</div>;
  } else {
    return <div></div>;
  }
}
