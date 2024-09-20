import React from "react";
import "../styles/components/Forecast.scss";
import DailyForecastWidget from "./DailyForecastWidget";
import HourlyForecastWidget from "./HourlyForecastWidget";
import HorizontallyScrollable from "./HorizontallyScrollable";

function ForeCast({ type, title, data }) {
  return (
    <div className="Forecast">
      <div className="forecast-container">
        <h3>{title}</h3>
        <HorizontallyScrollable className="widget-container">
          {data.map((singleData) => (
            <div key={singleData.date || singleData.day}>
              {type === "hourly" ? (
                <HourlyForecastWidget data={singleData} />
              ) : (
                <DailyForecastWidget data={singleData} />
              )}
            </div>
          ))}
        </HorizontallyScrollable>
      </div>
    </div>
  );
}

export default ForeCast;
