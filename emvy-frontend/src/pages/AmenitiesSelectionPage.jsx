import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AmenitiesSelectionPage = ({ onNext, onBack }) => {
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const navigate = useNavigate();

  const amenities = [
    'Breakfast Included', 'Free Wi-Fi', 'Pool',
    'Parking', 'Airport Shuttle', 'Tea Maker',
    'In-Room Safe', 'Gym Access',
    'Laundry Service'
  ];

  const handleAmenitySelect = (amenity) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity) // Deselect if already selected
        : [...prev, amenity]                // Add if not selected
    );
  };

  const handleNext = () => {
    console.log('Selected amenities:', selectedAmenities);
    //if (onNext) onNext(selectedAmenities);
    navigate('/budget');
  };

  const handleBack = () => {
    //if (onBack) onBack();
    navigate('/vibe');
  };

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
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
          alt="Hotel Amenities Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Centered Amenities Card */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-2xl backdrop-blur-sm bg-opacity-95 overflow-hidden">
            <div className="p-8">
              {/* Logo */}
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800">
                  em<span className="text-orange-500">:</span>vy
                </h1>
              </div>

              <div className="space-y-6">
                {/* Header */}
                <div className="text-center">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    What amenities are a must-have?
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Select one or more amenities that enhance your stay
                  </p>
                </div>

                {/* Amenities Grid */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Choose Your Amenities</h3>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {amenities.map((amenity) => (
                      <button
                        key={amenity}
                        onClick={() => handleAmenitySelect(amenity)}
                        className={`py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200 text-center ${
                          selectedAmenities.includes(amenity)
                            ? 'bg-green-400 text-white shadow-lg transform scale-105'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md border border-gray-300'
                        }`}
                      >
                        {amenity}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Progress Section */}
                <div className="space-y-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      {selectedAmenities.length} amenities selected
                    </p>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div className="bg-orange-500 h-1 rounded-full w-3/4 transition-all duration-500 ease-in-out"></div>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center space-x-4">
                  <button
                    onClick={handleBack}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                  >
                    <ChevronLeft className="h-6 w-6 text-gray-600" />
                  </button>

                  <button
                    onClick={handleNext}
                    className="flex-1 flex justify-center bg-green-400 hover:bg-green-500 text-white font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-[1.02]"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmenitiesSelectionPage;