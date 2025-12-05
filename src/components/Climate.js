// import React, { useState } from "react";
// import { WiDaySunny } from "react-icons/wi";
// import "./Climate.css";

// const ClimatePopupWidget = () => {
//   const [open, setOpen] = useState(false);
//   const [location, setLocation] = useState("");
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const apiKey = "8c2108f16783ced9522e1f4ae96462b5"; // ← Replace your key

//   const fetchWeather = async () => {
//     if (!location) {
//       setError("Enter a city name");
//       return;
//     }
//     setLoading(true);
//     setError("");
//     setWeather(null);

//     try {
//       const response = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`
//       );

//       if (!response.ok) {
//         setError("City not found");
//         setLoading(false);
//         return;
//       }

//       const data = await response.json();
//       setWeather({
//         city: data.name,
//         temp: data.main.temp,
//         humidity: data.main.humidity,
//         condition: data.weather[0].description,
//         wind: data.wind.speed,
//       });
//     } catch (err) {
//       setError("Error fetching weather");
//     }

//     setLoading(false);
//   };

//   return (
//     <>
//       {/* Floating Weather Button */}
//       <div className="climate-widget-btn" onClick={() => setOpen(true)}>
//         <WiDaySunny size={34} />
//       </div>

//       {/* Popup Panel */}
//       {open && (
//         <div className="climate-popup">
//           <div className="climate-popup-header">
//             <h3>🌦 Climate Checker</h3>
//             <button className="close-btn" onClick={() => setOpen(false)}>
//               ×
//             </button>
//           </div>

//           <div className="climate-popup-body">
//             <input
//               type="text"
//               placeholder="Enter city name"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//             />

//             <button onClick={fetchWeather}>Check</button>

//             {loading && <p className="loading">Checking...</p>}
//             {error && <p className="error">{error}</p>}

//             {weather && (
//               <div className="weather-box">
//                 <h3>{weather.city}</h3>
//                 <p>🌡 Temperature: {weather.temp}°C</p>
//                 <p>💧 Humidity: {weather.humidity}%</p>
//                 <p>🌤 Condition: {weather.condition}</p>
//                 <p>🌬 Wind: {weather.wind} m/s</p>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ClimatePopupWidget;
import React, { useState, useEffect } from "react";
import { WiDaySunny } from "react-icons/wi";
import "./Climate.css";

const ClimatePopupWidget = () => {
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const apiKey = "8c2108f16783ced9522e1f4ae96462b5";

  // 🚫 CLEAN CITY NAME – remove Unicode dashes / accents
  const cleanCityName = (name) => {
    if (!name) return "";
    return name
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[\u0335-\u0338]/g, "")
      .replace(/[^\w\s.-]/g, "");
  };

  // 🌾 CROP DATABASE (Scientific)
  const cropDB = [
    { name: "Rice", tempMin: 25, tempMax: 35, humidityMin: 60 },
    { name: "Sugarcane", tempMin: 25, tempMax: 40, humidityMin: 50 },
    { name: "Banana", tempMin: 25, tempMax: 35, humidityMin: 50 },
    { name: "Cotton", tempMin: 25, tempMax: 35, humidityMax: 50 },
    { name: "Millets", tempMin: 20, tempMax: 35, humidityMax: 40 },
    { name: "Groundnut", tempMin: 20, tempMax: 35 },
    { name: "Maize", tempMin: 20, tempMax: 35 },
    { name: "Tomato", tempMin: 20, tempMax: 30 },
    { name: "Papaya", tempMin: 20, tempMax: 35 },
    { name: "Wheat", tempMin: 10, tempMax: 25 },
    { name: "Potato", tempMin: 10, tempMax: 25 },
    { name: "Cabbage", tempMin: 15, tempMax: 25 },
    { name: "Turmeric", tempMin: 25, tempMax: 35, humidityMin: 60 },
    { name: "Mirchi (Red Chilli)", tempMin: 20, tempMax: 30, humidityMax: 60 },
  ];

  // ⭐ TOP 3 CROPS BASED ON CLIMATE
  const getBestCrops = (temp, humidity) => {
    return cropDB
      .map((crop) => {
        let score = 0;
        if (temp >= crop.tempMin && temp <= crop.tempMax) score += 2;
        if (crop.humidityMin && humidity >= crop.humidityMin) score += 1;
        if (crop.humidityMax && humidity <= crop.humidityMax) score += 1;

        return { ...crop, score };
      })
      .filter((crop) => crop.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
  };

  // 🌍 Weather by GPS (HIGH ACCURACY)
  const fetchGPSLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        fetchWeatherByCoords(latitude, longitude);
      },
      (err) => {
        console.log("GPS Error:", err);
        setError("Unable to fetch GPS location.");
      },
      {
        enableHighAccuracy: true, // 🔥 Use GPS chip if available
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  const fetchWeatherByCoords = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
      );
      const data = await response.json();

      if (response.ok) {
        setWeather({
          city: cleanCityName(data.name),
          temp: data.main.temp,
          humidity: data.main.humidity,
          condition: data.weather[0].description,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  // 🔍 Weather by manual search
  const fetchWeatherByCity = async () => {
    if (!location.trim()) {
      setError("Please enter a city name");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`
      );
      const data = await response.json();

      if (response.ok) {
        setWeather({
          city: cleanCityName(data.name),
          temp: data.main.temp,
          humidity: data.main.humidity,
          condition: data.weather[0].description,
        });
      } else {
        setError("City not found");
      }
    } catch {
      setError("Error fetching weather");
    }

    setLoading(false);
  };

  // Auto GPS fetch on first load
  useEffect(() => {
    fetchGPSLocation();
  }, []);

  return (
    <>
      {/* Floating Button */}
      <div className="climate-widget-btn" onClick={() => setOpen(true)}>
        <WiDaySunny size={40} />
        {weather?.temp && (
          <span className="temp-label">
            {weather.temp}°C <br />
            <small>{weather.city}</small>
          </span>
        )}
      </div>

      {/* Popup */}
      {open && (
        <div className="climate-popup">
          <div className="climate-popup-header">
            <h3>🌦 Climate Checker</h3>
            <button className="close-btn" onClick={() => setOpen(false)}>
              ×
            </button>
          </div>

          <div className="climate-popup-body">
            {/* Search Input */}
            <div className="search-row">
              <input
                type="text"
                className="search-input"
                placeholder="Enter city..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <button className="search-btn" onClick={fetchWeatherByCity}>
                Search
              </button>
            </div>

            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}

            {/* Weather Info */}
            {weather && (
              <div className="weather-box">
                <h3>{weather.city}</h3>
                <p>🌡 Temperature: {weather.temp}°C</p>
                <p>💧 Humidity: {weather.humidity}%</p>
                <p>🌤 Condition: {weather.condition}</p>

                <hr />

                <h4>Top 3 Crops for This Climate</h4>
                <ul className="crop-list">
                  {getBestCrops(weather.temp, weather.humidity).map((crop, i) => (
                    <li key={i}>{crop.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ClimatePopupWidget;
