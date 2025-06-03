import React from "react";
import HotelCard from "./HotelCard";

const HotelList = ({ hotels, onBook }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} onBook={onBook} />
      ))}
    </div>
  );
};

export default HotelList;
