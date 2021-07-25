import React from "react";
import "./CurrentData.css";

export default function CurrentData(props) {
  let weatherData = {
    city: props.data[0],
    temperature: Math.round(props.data[1]),
    description: props.data[2],
    humidity: props.data[3],
    wind: props.data[4],
    iconUrl: "https://ssl.gstatic.com/onebox/weather/64/rain_light.png",
  };
  return (
    <div className="data">
      <div className="row">
        <div className="col-8">
          <h1 className="current-city">{weatherData.city}</h1>
          <div className="current-time property"></div>
          <div className="sky">{weatherData.description}</div>
          <div className="weather">
            Humidity:
            <span className="humidity property">{weatherData.humidity}%</span>,
            Wind:
            <span className="wind property">{weatherData.wind} mph</span>
          </div>
        </div>
        <div className="col-1">
          <img src={weatherData.iconUrl} alt="" className="current-emoji" />
        </div>
        <div className="col-3 current-temp">
          <span>{weatherData.temperature}</span>
          <span className="units">°F</span>
        </div>
      </div>
    </div>
  );
}
