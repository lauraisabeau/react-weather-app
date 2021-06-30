import "./WeatherInfo.css";
import React from "react";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <Temperature celsius={props.data.temperature} />
      <div className="row">
        <div className="col-9">
          <ul>
            <li className="weatherDescription">{props.data.description}</li>
            <li className="weatherHumidity">
              Humidity: {props.data.humidity} %
            </li>
            <li className="weatherWind">
              Wind: {Math.round(props.data.wind)} km/h
            </li>
          </ul>
        </div>
        <div className="col-3">
          <WeatherIcon code={props.data.icon} size={77} />
        </div>
      </div>
    </div>
  );
}
