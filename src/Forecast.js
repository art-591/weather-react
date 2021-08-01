import React from "react";
import "./Forecast.css";
//import axios from "axios";

export default function Forecast(props) {
  let dailyWeather = 85;
  console.log(props.data);
  console.log(dailyWeather);
  /*if (props.data.dataValue === true) {
    function getForecastData(response) {
      dailyWeather = response.data.daily.temp[0];
    }

    let lat = props.data.latitude;
    let lon = props.data.longitude;
    let urlForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${props.data.apiKey}&units=${props.data.units}`;
    axios.get(urlForecast).then(getForecastData);
*/
  return <div>85</div>;
}
