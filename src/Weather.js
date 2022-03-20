import React from "react";
import WeatherToday from "./WeatherToday";
import WeatherForecast from "./WeatherForecast";

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
      <WeatherToday />
      <WeatherForecast />
    </div>
  );
}
