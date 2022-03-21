import "./App.css";
import Weather from "./Weather";
import WeatherForecast from "./WeatherForecast";

export default function App() {
  return (
    <div className="App">
      <div className="landscape-background">
        <Weather />
      </div>
      <WeatherForecast />
    </div>
  );
}
