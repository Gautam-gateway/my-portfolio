import React, { useState, useEffect } from 'react';

interface WeatherData {
  name: string;
  main: { temp: number };
  weather: { main: string; icon: string }[];
}

const WeatherCard: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

  useEffect(() => {
    if (!apiKey) {
      setError("Weather API key is missing.");
      return;
    }
    const fetchWeather = (lat: number, lon: number) => {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
      fetch(apiUrl)
        .then(res => res.ok ? res.json() : Promise.reject('API request failed'))
        .then(data => setWeather(data))
        .catch(() => setError("Could not fetch weather data."));
    };
    const getLocation = () => {
      if (!navigator.geolocation) {
        setError("Geolocation is not supported.");
        return;
      }
      navigator.geolocation.getCurrentPosition(
        (position) => fetchWeather(position.coords.latitude, position.coords.longitude),
        () => setError("Location access denied.")
      );
    };
    getLocation();
  }, [apiKey]);
  
  const Skeleton = () => (
    <div className="flex items-center animate-pulse"><div className="flex-grow pr-4"><div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2"></div><div className="h-7 bg-gray-300 dark:bg-gray-700 rounded w-1/4 mb-2"></div><div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div></div><div className="w-16 h-16 bg-gray-300 dark:bg-gray-700 rounded-full"></div></div>
  );
  
  const ErrorDisplay = ({ message }: { message: string }) => (
    <div className="text-center text-red-500 text-sm"><p><strong>Weather Error</strong></p><p>{message}</p></div>
  );

  const renderContent = () => {
    if (error) return <ErrorDisplay message={error} />;
    if (weather) {
      return (
        <div className="flex items-center"><div className="flex-grow"><p className="font-bold text-lg text-gray-900 dark:text-white">{weather.name}</p><p className="text-2xl font-semibold text-gray-800 dark:text-gray-200">{Math.round(weather.main.temp)}°C</p><p className="text-sm text-gray-600 dark:text-gray-400">{weather.weather[0].main}</p></div><img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].main} className="w-16 h-16"/></div>
      );
    }
    return <Skeleton />;
  };

  return (
    <div className="fixed bottom-16 right-5 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl rounded-lg p-4 w-72 transition-colors duration-200">
      {renderContent()}
    </div>
  );
};

export default WeatherCard;