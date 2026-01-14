import { useContext, useEffect } from "react";
import { WeatherContext } from "./context/WeatherContext";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  const { city, setCity, handleSearch } = useContext(WeatherContext);

  return (
    <div className="search bg-white/10 backdrop-blur-lg my-4 px-6 py-1 rounded-xl flex max-w-md mx-auto">
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="flex-1 p-2 rounded-lg rounded-r-none  text-white placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-white/30"
      />
      <button
        className=" text-xl rounded-lg rounded-l-none  text-white hover:text-white/60 transition cursor-pointer"
        onClick={handleSearch}
      >
        <CiSearch />
      </button>
    </div>
  );
};

export default SearchBar;
