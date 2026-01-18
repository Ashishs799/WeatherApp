import { useContext } from "react";
import { WeatherContext } from "./context/WeatherContext";

const DayForecast = () => {
  const { forecast, weather } = useContext(WeatherContext);

  if (!forecast.length || !weather?.timezone) return null;

  const hourly12 = forecast.slice(0, 4);
  const timezone = weather.timezone;

  return (
    <div className="flex gap-4 overflow-x-auto mt-6 text-xs">
      {hourly12.map((item, index) => {
        const localTime = new Date((item.dt + timezone) * 1000)
          .toUTCString()
          .slice(17, 22);

        return (
          <div
            key={index}
            className="min-w-[100px] bg-white/10 backdrop-blur-lg rounded-xl p-3 text-center text-white"
          >
            <p className="text-sm">{localTime}</p>

            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              className="mx-auto size-12"
              alt=""
            />

            <p className="font-semibold">{Math.round(item.main.temp)}°C</p>
          </div>
        );
      })}
    </div>
  );
};

export default DayForecast;
