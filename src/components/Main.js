import "../styles/components/Main.scss";
import CurrentWeather from "./CurrentWeather";
import ForeCast from "./ForeCast";
import { useContext } from "react";
import WeatherContext from "../context/weather.context";
import Loader from "./Loader";
function Main() {
  const { loading, dailyForecast, hourlyForecast, currentWeather } =
    useContext(WeatherContext);
  return (
    <div className="Main">
      {loading ? (
        <Loader />
      ) : (
        <>
          <CurrentWeather data={currentWeather} />
          <ForeCast
            type="hourly"
            title="Hourly Forecast"
            data={hourlyForecast}
          />
          <ForeCast type="daily" title="21 Day Forecast" data={dailyForecast} />
        </>
      )}
    </div>
  );
}

export default Main;
