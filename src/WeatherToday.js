import React from "react";

export default function WeatherToday() {
  return (
    <div className="WeatherToday">
      <div className="today">
        <h1 className="current-city">Rotterdam</h1>
        Wednesday, february 8 2022
      </div>
      <div>Last updated - 12.45</div>
      <div className="row split-weather">
        <div className="col">
          <img className="todays-icon" src="/" alt="weather-icon" />
          <span className="temp">9</span>
        </div>
        <div className="col split-weather">
          <div className="weather-description text-capitalize">Cloudy</div>
          <div className="humidity">Humidity: 80%</div>
          <div className="wind">Wind: 2 m/sec</div>
        </div>
      </div>
    </div>
  );
}
