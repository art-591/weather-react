import React from "react";
import "./CurrentData.css";
import CurrentTime from "./CurrentTime";
import Forecast from "./Forecast";

export default function CurrentData(props) {
  if (props.data.dataValue === true) {
    let weatherData = props.data;

    let iconUrl = `https://openweathermap.org/img/wn/${weatherData.iconID}@2x.png`;
    return (
      <div>
        <div className="data">
          <div className="row">
            <div className="col-8">
              <h1 className="current-city">{weatherData.cityName}</h1>
              <CurrentTime />
              <div className="sky">{weatherData.weatherDescription}</div>
              <div className="weather">
                Humidity:{" "}
                <span className="humidity property">
                  {weatherData.humidityPercentage}%
                </span>
                , Wind:{" "}
                <span className="wind property">
                  {weatherData.windSpeed} mph
                </span>
              </div>
            </div>
            <div className="col-1">
              <img src={iconUrl} alt="" className="current-emoji" />
            </div>
            <div className="col-3 current-temp">
              <span>{weatherData.temperature}</span>
              <span className="units">°F</span>
            </div>
          </div>
        </div>
        <Forecast
          data={weatherData}
          dataValue={props.data.dataValue}
          lat={props.data.latitude}
          lon={props.data.longitude}
        />
      </div>
    );
  } else {
    return <div></div>;
  }
}
