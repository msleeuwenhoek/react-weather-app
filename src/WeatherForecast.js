import React from "react";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast col">
      <div>Monday </div>

      <img
        className="weather-icon"
        src="https://openweathermap.org/img/wn/01d@2x.png"
        alt="weather-icon"
      />

      <div>
        <span className="min-temp">5 </span>
        <span className="max-temp">| 10 °C</span>
        <div className="humidity">80%</div>
      </div>
    </div>
  );
}
