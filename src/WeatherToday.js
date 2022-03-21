import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherToday(props) {
  return (
    <div className="WeatherToday">
      <div className="today-date">
        <div className="today">
          <h1 className="current-city">{props.weatherData.city}</h1>
          <FormattedDate date={props.weatherData.date} />
        </div>
      </div>
      <div className="today-weather">
        <div className="split-weather">
          <img
            className="todays-icon"
            src={props.weatherData.icon}
            alt="weather-icon"
          />
          <span className="temp">
            {Math.round(props.weatherData.temperature)} °C
          </span>
        </div>
        <div className="split-weather">
          <div className="weather-description text-capitalize">
            {props.weatherData.descriptin}
          </div>
          <div className="humidity">
            Humidity: {props.weatherData.humidity}%
          </div>
          <div className="wind">
            Wind: {Math.round(props.weatherData.wind)} m/sec
          </div>
        </div>
      </div>
    </div>
  );
}
