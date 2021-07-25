import axios from "axios";
import React, { useState } from "react";
import CurrentData from "./CurrentData";

export default function SearchForm() {
  const [city, setCity] = useState(null);
  const [temp, setTemp] = useState(null);
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState(null);
  const [data, setData] = useState(false);

  let weatherData = [city, temp, description, humidity, wind, icon, data];

  let apiKey = `1f6bf5f6e1d5da325c16280778c22717`;
  let units = "imperial";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  function searchWeather(response) {
    setTemp(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function searchCity(event) {
    event.preventDefault();
    axios.get(url).then(searchWeather);
    setData(true);
  }

  function searchCoordinates(event) {
    event.preventDefault();
    alert("good morning");
  }

  return (
    <div className="searchForm">
      <div className="row">
        <form className="search col-10 row" onSubmit={searchCity}>
          <input
            type="text"
            className="col-9"
            placeholder="Search City"
            id="city-input"
            onChange={updateCity}
          />
          <input
            type="submit"
            className="col-3 btn btn-warning"
            value="Submit"
          />
        </form>
        <form className="col-2" onClick={searchCoordinates}>
          <input
            type="button"
            className="current btn btn-warning"
            value="Current"
          />
        </form>
      </div>
      <CurrentData data={weatherData} />
    </div>
  );
}
