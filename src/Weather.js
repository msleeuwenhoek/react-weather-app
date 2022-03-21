import React, { useState } from "react";
import WeatherToday from "./WeatherToday";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.city);
  function setWeather(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    let apiKey = "3a3fb11a6316d75f69f5016b49163029";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(setWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="Search row">
          <input
            type="search"
            placeholder="Search for your city"
            autoFocus="on"
            autoComplete="off"
            className="col-6 "
            onChange={updateCity}
          />
          <button type="submit" className="col-2 btn btn-primary btn-large">
            Search
          </button>
          <button type="button" className="col-2 btn btn-primary btn-large">
            Use location
          </button>
        </form>
        <WeatherToday weatherData={weatherData} />
      </div>
    );
  } else {
    search();
    return "loading..";
  }
}
