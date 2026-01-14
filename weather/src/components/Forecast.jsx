const ForecastCard = ({ day }) => {
  const date = new Date(day.dt_txt);
  const dayName = date.toLocaleDateString("en-US", { weekday: "short" });

  return (
    <div className="forecast-card flex flex-col justify-center">
      <div className="flex items-center justify-between text-sm">
        <p>{dayName}</p>
        <p>{Math.round(day.main.temp)}°C</p>

        <img
          src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
          alt={day.weather[0].description}
          className="size-[40px]"
        />
      </div>
      <div className="flex justify-between items-center">
        <span className="text-xs capitalize">{day.weather[0].description}</span>
      </div>
    </div>
  );
};

export default ForecastCard;
