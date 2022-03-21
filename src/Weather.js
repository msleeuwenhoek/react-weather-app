import React from "react";
import WeatherToday from "./WeatherToday";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form className="Search row">
        <input
          type="search"
          placeholder="Search for your city"
          autoFocus="on"
          autoComplete="off"
          className="col-6 "
        />
        <button type="submit" className="col-2 btn btn-primary btn-large">
          Search
        </button>
        <button type="button" className="col-2 btn btn-primary btn-large">
          Use location
        </button>
      </form>
      <div className="WeatherToday">
        <div className="today-date">
          <div className="today">
            <h1 className="current-city">Rotterdam</h1>
            Wednesday, february 8 2022
          </div>
          <div>Last updated - 12.45</div>
        </div>
        <div className="today-weather">
          <div className="split-weather">
            <img
              className="todays-icon"
              src="https://openweathermap.org/img/wn/01d@2x.png"
              alt="weather-icon"
            />
            <span className="temp">9 °C</span>
          </div>
          <div className="split-weather">
            <div className="weather-description text-capitalize">Cloudy</div>
            <div className="humidity">Humidity: 80%</div>
            <div className="wind">Wind: 2 m/sec</div>
          </div>
        </div>
      </div>
    </div>
  );
}
