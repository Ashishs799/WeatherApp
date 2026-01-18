import { useContext, useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { WeatherContext } from "./components/context/WeatherContext";
import VideoBackground from "./components/WeatherBackground/WeatherBackground";


function App() {
  const { weather, error } = useContext(WeatherContext);
  return (
    <div className="relative">
      <VideoBackground weather={weather?.weather[0]?.main} />

      <div className="relative h-screen w-full  flex flex-col items-center justify-center">
        <SearchBar />

        {error && <p className="error">{error}</p>}
        {weather && <WeatherCard data={weather} />}
      </div>
    </div>
  );
}

export default App;
