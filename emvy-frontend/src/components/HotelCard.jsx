import React from "react";

const HotelCard = ({ hotel, onBook }) => {
  return (
    <div className="bg-white border rounded-2xl shadow hover:shadow-xl transition p-4">
      <img
        src={hotel.image}
        alt={hotel.name}
        className="rounded-xl w-full h-48 object-cover"
      />
      <div className="mt-4">
        <h2 className="text-xl font-semibold">{hotel.name}</h2>
        <p className="text-gray-600">{hotel.location}</p>
        <p className="text-gray-800 font-medium mt-1">${hotel.price}/night</p>
        <button
          onClick={() => onBook(hotel)}
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default HotelCard;
