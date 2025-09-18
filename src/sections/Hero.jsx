import React from 'react'
import LiquidEther_H from '../components/LiquidEther_H';
import Navbar from '../components/Navbar';

const Hero = () => {
  return (
    <section id='Hero' className="relative w-full min-h-screen bg-black">
      <div className="absolute inset-0 w-full h-full">
        <LiquidEther_H />
      </div>
      
      {/* Hero content overlay */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block mb-2">Welcome to</span>
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              My Portfolio
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Immerse yourself in fluid interactions and mesmerizing visual effects
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
            Explore My Work
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero
