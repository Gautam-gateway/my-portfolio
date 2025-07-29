// src/pages/Home.tsx

import { Link } from 'react-router-dom';
import portfolioImage from '../assets/portfolio image.jpeg';
import WeatherCard from '../components/WeatherCard';

const Home = () => {
  return (
    <>
      {/* 
        Main section with a solid black background.
        It's designed to fill the screen and center its content perfectly.
      */}
      
        <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
  <div
    className="
      flex flex-row items-center justify-center gap-16 p-10 rounded-2xl border border-gray-700
      bg-white/5 backdrop-blur-lg shadow-lg transition-all duration-500
      hover:bg-white/10 hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] hover:scale-105
    "
  >
    {/* Column 1: Text Content */}
    <div className="max-w-md text-center md:text-left">
      <h1 className="text-5xl md:text-7xl font-bold mb-4">
        Gautam Pankuta
      </h1>
      <p className="text-lg md:text-xl mb-8 text-gray-300 font-mono leading-relaxed">
        AI & ML Developer specializing in building intelligent, data-driven solutions.
      </p>
      <Link
        to="/About"
        className="
          inline-block px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-bold rounded-lg
          transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.8)]
        "
      >
        Let's get started
      </Link>
    </div>

    {/* Column 2: Image */}
    <div className="flex-shrink-0">
      <img
        src={portfolioImage}
        alt="A portrait of Gautam Pankuta"
        className="
          w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl
          transition-transform duration-500 hover:scale-110
        "
      />
    </div>
  </div>
</section>


      {/* The WeatherCard is kept, as it's a unique feature of your home page */}
      <WeatherCard />
    </>
  );
};

export default Home;