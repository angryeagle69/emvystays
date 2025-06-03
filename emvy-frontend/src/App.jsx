import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SearchPage from "./pages/SearchPage";
import LocationSelectionPage from "./pages/LocationSelectionPage";
import HotelVibeSelectionPage from "./pages/HotelVibeSelectionPage";
import AmenitiesSelectionPage from "./pages/AmenitiesSelectionPage";
import BudgetSelectionPage from "./pages/BudgetSelectionPage";
import CountdownLoadingPage from "./pages/CountdownLoadingPage";
import HotelSwipePage from "./pages/HotelSwipePage";
import HotelDetailPage from "./pages/HotelDetailPage";
import BookingModal from "./components/BookingModal";
import HotelComparisonPage from "./pages/HotelComparisonPage";
import PaymentPage from "./pages/PaymentPage";

function App() {
  const [selectedHotel, setSelectedHotel] = useState(null);

  const handleBook = (hotel) => {
    setSelectedHotel(hotel);
  };

  return (
    <Router>
      <div className="bg-white text-gray-900 min-h-screen">
        {/* You can add a header/nav here if needed */}

        <main className="max-w-7xl mx-auto px-4">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/location" element={<LocationSelectionPage />} />
            <Route path="/vibe" element={<HotelVibeSelectionPage />} />
            <Route path="/amenity" element={<AmenitiesSelectionPage />} />
            <Route path="/budget" element={<BudgetSelectionPage />} />
            <Route path="/countdown" element={<CountdownLoadingPage />} />
            <Route path="/results" element={<HotelSwipePage />} />
            <Route path="/hotels/:id" element={<HotelDetailPage />} />
            <Route path="/hotel-comparison" element={<HotelComparisonPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            {/* HomePage route with onBook handler */}
            <Route
              path="/home"
              element={<HomePage onBook={handleBook} />}
            />
          </Routes>
        </main>

        {/* Booking modal outside routes so it overlays any page */}
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
