import React from "react";
import "./CurrentData.css";

export default function CurrentData() {
  let weatherData = {
    city: "New York",
    temperature: 80,
    description: "Light Rain",
    humidity: 90,
    wind: 3,
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
