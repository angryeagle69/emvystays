import React from "react";

const HotelCard = ({ hotel, onBook }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 max-w-sm">
      <img
        src={hotel.image}
        alt={hotel.name}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="text-xl font-bold mt-2">{hotel.name}</h2>
      <p className="text-green-600 font-semibold">₹{hotel.pricePerNight} / night</p>
      <button
        onClick={() => onBook(hotel)}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Book Now
      </button>
    </div>
  );
};

export default HotelCard;
