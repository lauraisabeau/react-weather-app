import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./ForecastDay.css";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="forecast">
      <div className="forecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={30} />
      <div className="forecast-temp">
        <span className="forecast-temp-max">
          <strong>{maxTemperature()}°</strong>
        </span>{" "}
        <span className="forecast-temp-min">{minTemperature()}°</span>
      </div>
    </div>
  );
}
