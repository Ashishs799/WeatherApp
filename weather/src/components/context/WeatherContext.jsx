import { createContext, useContext, useEffect, useState } from "react";
import { fetchWeather, fetchForecast } from "../services/weatherApi";

export const WeatherContext = createContext();

export const WeatherContextProvider = ({ children }) => {
  const [city, setCity] = useState("Sydney");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);

  const [error, setError] = useState("");

  useEffect(() => {
    const loadWeather = async () => {
      try {
        setError("");
        const data = await fetchWeather(city);
        setWeather(data);
      } catch {
        setError("City not found !!");
      }
    };

    loadWeather();
  }, []);

  useEffect(() => {
    const loadForecast = async () => {
      try {
        const data = await fetchForecast(city);

        // Extract one object per day
        const dailyForecast = [];
        const map = new Map();
        data.list.forEach((item) => {
          const date = item.dt_txt.split(" ")[0];
          if (!map.has(date)) {
            map.set(date, item);
            dailyForecast.push(item);
          }
        });

        setForecast(dailyForecast);
      } catch {
        setError("City not found !!");
      }
    };
    loadForecast();
  }, [city]);

  const handleSearch = async () => {
    if (!city) {
      setError("Please enter the city.");
      return;
    }
    try {
      setError("");
      const data = await fetchWeather(city);
      setWeather(data);
    } catch {
      setError("City not found !!");
    }
  };

  const value = {
    handleSearch,
    city,
    setCity,
    weather,
    error,
    forecast,
  };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};
