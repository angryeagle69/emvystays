import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import HotelList from "./components/HotelList";
import BookingModal from "./components/BookingModal";
import SearchPage from "./pages/SearchPage";
import LocationSelectionPage from "./pages/LocationSelectionPage";
import HotelVibeSelectionPage from "./pages/HotelVibeSelectionPage";
import AmenitiesSelectionPage from "./pages/AmenitiesSelectionPage";
import BudgetSelectionPage from "./pages/BudgetSelectionPage";

function App() {
  const [selectedHotel, setSelectedHotel] = useState(null);

  return (
    <Router>
      <div className="bg-white text-gray-900">
        {/* You can add a header/nav here if needed */}

        <main className="max-w-7xl mx-auto px-4">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/location" element={<LocationSelectionPage />} />
            <Route path="/vibe" element={<HotelVibeSelectionPage />} />
            <Route path="/amenity" element={<AmenitiesSelectionPage />} />
            <Route path="/budget" element={<BudgetSelectionPage />} />
            <Route 
              path="/hotels" 
              element={
                <HotelList
                  onBook={(hotel) => setSelectedHotel(hotel)}
                />
              } 
            />
            {/* Add more routes as needed */}
          </Routes>
        </main>

        {/* Booking modal outside routes so it can overlay any page */}
        {selectedHotel && (
          <BookingModal
            hotel={selectedHotel}
            onClose={() => setSelectedHotel(null)}
          />
        )}
      </div>
    </Router>
  );
}

export default App;
