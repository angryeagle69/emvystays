import React, { useState } from "react";
import HotelList from "../components/HotelList";
import BookingModal from "../components/BookingModal";

const hotels = [
  {
    id: 1,
    name: "Ocean View Resort",
    location: "Goa, India",
    price: 120,
    image: "https://picsum.photos/400/300?random=1",
  },
  {
    id: 2,
    name: "Mountain Retreat",
    location: "Manali, India",
    price: 90,
    image: "https://picsum.photos/400/300?random=2",
  },
  {
    id: 3,
    name: "City Lights Hotel",
    location: "Mumbai, India",
    price: 150,
    image: "https://picsum.photos/400/300?random=3",
  },
];

const HomePage = () => {
const [selectedHotel, setSelectedHotel] = useState(null);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-white shadow p-8 text-center">
        <h1 className="text-4xl font-bold text-blue-700">Welcome to EMVY Hotels</h1>
        <p className="text-gray-600 mt-2 text-lg">Book your dream stay today</p>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <HotelList
          hotels={hotels}
          onBook={(hotel) => setSelectedHotel(hotel)}
        />
      </main>

      {selectedHotel && (
        <BookingModal
          hotel={selectedHotel}
          onClose={() => setSelectedHotel(null)}
        />
      )}
    </div>
  );
}

export default HomePage;