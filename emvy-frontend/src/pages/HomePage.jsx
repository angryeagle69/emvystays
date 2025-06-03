import React, { useState } from "react";
import HotelList from "../components/HotelList";
import BookingModal from "../components/BookingModal";
import hotelData from "../data/HotelData";

const HomePage = ({ onBook }) => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-white shadow p-8 text-center">
        <h1 className="text-4xl font-bold text-blue-700">Welcome to EMVY Hotels</h1>
        <p className="text-gray-600 mt-2 text-lg">Book your dream stay today</p>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Use hotelData imported from hotelData.js */}
        <HotelList hotels={hotelData} onBook={onBook} />
      </main>
    </div>
  );
};

export default HomePage;
