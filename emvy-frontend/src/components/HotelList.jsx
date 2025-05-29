import React from "react";
import HotelCard from "./HotelCard";

const HotelList = ({ hotels, onBook }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} onBook={onBook} />
      ))}
    </div>
  );
};

export default HotelList;
