import React from "react";
import "./CurrentData.css";
import CurrentTime from "./CurrentTime";

export default function CurrentData(props) {
  if (props.data[6] === true) {
    let weatherData = {
      city: props.data[0],
      temperature: Math.round(props.data[1]),
      description: props.data[2],
      humidity: props.data[3],
      wind: Math.round(props.data[4]),
      iconUrl: `https://openweathermap.org/img/wn/${props.data[5]}@2x.png`,
    };
    return (
      <div className="data">
        <div className="row">
          <div className="col-8">
            <h1 className="current-city">{weatherData.city}</h1>
            <CurrentTime />
            <div className="sky">{weatherData.description}</div>
            <div className="weather">
              Humidity:{" "}
              <span className="humidity property">{weatherData.humidity}%</span>
              , Wind:{" "}
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
  } else {
    return <div></div>;
  }
}
