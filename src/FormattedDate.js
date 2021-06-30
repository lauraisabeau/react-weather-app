import React from "react";

export default function FormattedDate() {
  let nowtime = new Date();
  let date = nowtime.getDate();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[nowtime.getMonth()];

  let hours = nowtime.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = nowtime.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div className="last-updated">
      {" "}
      last updated:
      <span className="month-main"> {month}</span>{" "}
      <span className="date-main">{date}, </span>
      <span className="time-main">
        {hours}:{minutes}
      </span>
    </div>
  );
}
