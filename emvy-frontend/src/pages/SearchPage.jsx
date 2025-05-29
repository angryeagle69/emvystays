import React, { useState } from 'react';
import { MapPin, Calendar, Users, Baby, Dog, Minus, Plus, Map } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchPage = ({ onBack }) => {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const navigate = useNavigate();
  const [guests, setGuests] = useState({
    adults: 1,
    children: 1,
    infants: 1,
    pets: 0
  });

  const updateGuestCount = (type, increment) => {
    setGuests(prev => ({
      ...prev,
      [type]: Math.max(0, prev[type] + (increment ? 1 : -1))
    }));
  };

  const handleContinue = () => {
    // Handle continue logic - navigate to search results
    console.log('Search parameters:', {
      destination,
      startDate,
      endDate,
      guests
    });
    // Replace with your navigation logic
    navigate('/location');
  };

  const handleMapSelection = () => {
    // Handle map selection logic
    console.log('Map selection clicked');
  };

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #d1d5db transparent;
        }
      `}</style>

      {/* Full Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Luxury Hotel Search"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Centered Search Card */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-2xl backdrop-blur-sm bg-opacity-95 overflow-hidden">
            <div className="p-8 custom-scrollbar overflow-y-auto max-h-[90vh]">
              {/* Logo */}
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800">
                  em<span className="text-orange-500">:</span>vy
                </h1>
              </div>

              <div className="space-y-6">
                {/* Header */}
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">Find Your Perfect Stay</h2>
                  <p className="text-gray-600 text-sm">Search through amazing hotels worldwide</p>
                </div>

                {/* Destination Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Where are you headed?</h3>
                  
                  {/* Destination Input */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      placeholder="Write your destination here"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  {/* Map Option */}
                  <button
                    onClick={handleMapSelection}
                    className="w-full flex items-center justify-between p-4 border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      <Map className="h-5 w-5 text-gray-600" />
                      <div className="text-left">
                        <div className="font-medium text-gray-800">Map</div>
                        <div className="text-sm text-gray-600">Pick destination from Map</div>
                      </div>
                    </div>
                    <div className="text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </button>
                </div>

                {/* Dates Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Pick Your Dates</h3>
                  
                  {/* Start Date */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      min={today}
                      placeholder="Start Date"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  {/* End Date */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      min={startDate || today}
                      placeholder="End Date"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Number of Guests Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Number of Guests</h3>
                  
                  {/* Adults */}
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-gray-600" />
                      <span className="text-gray-800 font-medium">Adults</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => updateGuestCount('adults', false)}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
                        disabled={guests.adults <= 1}
                      >
                        <Minus className="h-4 w-4 text-gray-600" />
                      </button>
                      <span className="w-8 text-center font-medium text-gray-800">
                        {guests.adults}
                      </span>
                      <button
                        onClick={() => updateGuestCount('adults', true)}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
                      >
                        <Plus className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>
                  </div>

                  {/* Children */}
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-gray-600" />
                      <span className="text-gray-800 font-medium">Children</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => updateGuestCount('children', false)}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
                        disabled={guests.children <= 0}
                      >
                        <Minus className="h-4 w-4 text-gray-600" />
                      </button>
                      <span className="w-8 text-center font-medium text-gray-800">
                        {guests.children}
                      </span>
                      <button
                        onClick={() => updateGuestCount('children', true)}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
                      >
                        <Plus className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>
                  </div>

                  {/* Infants */}
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center space-x-3">
                      <Baby className="h-5 w-5 text-gray-600" />
                      <span className="text-gray-800 font-medium">Infant</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => updateGuestCount('infants', false)}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
                        disabled={guests.infants <= 0}
                      >
                        <Minus className="h-4 w-4 text-gray-600" />
                      </button>
                      <span className="w-8 text-center font-medium text-gray-800">
                        {guests.infants}
                      </span>
                      <button
                        onClick={() => updateGuestCount('infants', true)}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
                      >
                        <Plus className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>
                  </div>

                  {/* Pets */}
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center space-x-3">
                      <Dog className="h-5 w-5 text-gray-600" />
                      <span className="text-gray-800 font-medium">Pets</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => updateGuestCount('pets', false)}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
                        disabled={guests.pets <= 0}
                      >
                        <Minus className="h-4 w-4 text-gray-600" />
                      </button>
                      <span className="w-8 text-center font-medium text-gray-800">
                        {guests.pets}
                      </span>
                      <button
                        onClick={() => updateGuestCount('pets', true)}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
                      >
                        <Plus className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Continue Button */}
                <button
                  onClick={handleContinue}
                  className="w-full flex justify-center bg-green-400 hover:bg-green-500 text-white font-semibold py-3 rounded-lg transition-colors duration-200 transform hover:scale-[1.02]"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;