import { useEffect, useState } from "react";
import { getFormatedWeatherData, getWeatherData } from "./API/weatherServices";
import "./App.css";
import CurrentTimeLocation from "./components/CurrentTimeLocation";
import Forecast from "./components/Forecast";
import Inputs from "./components/Inputs";
import TempAndDetails from "./components/TempAndDetails";
import TopButton from "./components/TopButton";
import { useDispatch, useSelector } from "react-redux";
import { weatherActions } from "./redux/store";

function App() {
  const dispatch = useDispatch();
  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     let lat = position.coords.latitude;
  //     let lon = position.coords.longitude;
  //     console.log(lat, lon);
  //     setQuery({
  //       lat,
  //       lon,
  //     });
  //   });
  // }
  const weather = useSelector((state) => state.weather.weather);
  const [query, setQuery] = useState({ q: "mumbai" });
  const [units, setUnits] = useState("metric");
  // const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      console.log(await getWeatherData("weather", { q: "mumbai" }));
      await getFormatedWeatherData({ ...query, units }).then((data) => {
        dispatch(weatherActions.setWeather(data));
        // setWeather(data);
      });
    };
    fetchWeather();
  }, [query, units, dispatch]);
  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";
    return "from-yellow-700 to-orange-700";
  };
  return (
    <div
      className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br  h-fit shadbow-xl shadow-gray-400 ${formatBackground()}`}
    >
      <TopButton setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
      {weather && (
        <>
          <CurrentTimeLocation weather={weather} />
          <TempAndDetails weather={weather} />
          <Forecast title="hourly forecast" items={weather.hourly} />
          <Forecast title="daily forecast" items={weather.daily} />
        </>
      )}
    </div>
  );
}

export default App;
