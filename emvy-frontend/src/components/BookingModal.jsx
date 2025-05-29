import React from "react";

const BookingModal = ({ hotel, onClose }) => {
  if (!hotel) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md mx-4 relative">
        <h2 className="text-2xl font-bold mb-2 text-center">Book {hotel.name}</h2>
        <p className="text-center text-gray-600 mb-4">{hotel.location}</p>
        <p className="text-center text-gray-800 font-semibold mb-6">${hotel.price} per night</p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => {
              alert("Booking confirmed!");
              onClose();
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Confirm
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-xl hover:bg-gray-400 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
