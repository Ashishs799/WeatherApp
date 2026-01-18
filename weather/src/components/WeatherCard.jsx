import { useContext } from "react";
import { WeatherContext } from "./context/WeatherContext";
import ForecastCard from "./Forecast";
import DayForecast from "./DayForecast";

const WeatherCard = ({ data }) => {
  console.log(data);
  const { forecast } = useContext(WeatherContext);

  return (
    <div className="weathercard w-full h-full text-white px-40 flex flex-col justify-between items-center">
      <div className="w-full flex justify-between items-start">
        <div className=" w-[400px] h-full  flex flex-col justify-center">
          <h2 className="text-2xl">{data.name}</h2>
          <div className="flex justify-between ">
            <h1 className="text-8xl">{Math.round(data.main.temp)}°C</h1>
            <img
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt="weather"
              className="w-[120px]"
            />
          </div>
          <p className="text-4xl capitalize">{data.weather[0].description}</p>
          <div className="my-8 flex gap-x-8">
            <div className="flex flex-col items-center">
              <span>💧Humidity </span>
              <span>{data.main.humidity}%</span>
            </div>
            <div className="flex flex-col items-center">
              <span>🌬 Wind </span>
              <span>{data.wind.speed} m/s</span>
            </div>
          </div>
        </div>

        <div className="w-[200px] px-8 py-6 bg-white/10 backdrop-blur-md p-6 rounded-lg flex flex-col">
          <div className=" flex flex-col">
            {forecast.map((day, index) => (
              <ForecastCard key={index} day={day} />
            ))}
          </div>
        </div>
      </div>
      <DayForecast />
    </div>
  );
};

export default WeatherCard;
