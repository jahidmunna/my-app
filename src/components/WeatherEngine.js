import { useState, useEffect } from "react";
import PulseLoader from "react-spinners/PulseLoader";

import WeatherCard from "./WeatherCard/Component";

const WeatherEngine = ({ location }) => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    country: null,
    condition: null,
  });

  const getWeather = async (requestedQuery) => {
    setQuery("");
    setLoading(true);
    try {
      const apiRes = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${requestedQuery}&units=metric&APPID=7d92d87c3e7b7e83e213e1eae05bba0d`
      );
      const resJSON = await apiRes.json();
      setWeather({
        temp: resJSON.main.temp,
        city: resJSON.name,
        country: resJSON.sys.country,
        condition: resJSON.weather[0].main,
      });
    } catch (error) {
      setError(true);
    }

    setLoading(false);
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);

  if (error) {
    return (
      <div style={{ color: "red" }}>
        There has been an error in the input. Please type the city name
        correctly!
        <br />
        <button onClick={() => setError(false)}>Reset!</button>
      </div>
    );
  }

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          width: "200px",
          height: "240px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PulseLoader size={15} color="purple" />
      </div>
    );
  }

  return (
    <div>
      <WeatherCard
        temp={weather.temp}
        condition={weather.condition}
        city={weather.city}
        country={weather.country}
        getWeather={getWeather}
      />
    </div>
  );
};

export default WeatherEngine;
