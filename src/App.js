import WeatherEngine from "./components/WeatherEngine";
import "./App.css";

function App() {
  return (
    <div className="App">
      <WeatherEngine location="Dhaka, BD" />
    </div>
  );
}

export default App;
