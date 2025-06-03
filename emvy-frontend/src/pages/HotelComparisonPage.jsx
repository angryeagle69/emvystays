import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Star, MapPin, Check, Heart, Trash2, RefreshCw } from "lucide-react";

const HotelComparisonPage = () => {
  const [likedHotels, setLikedHotels] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const navigate = useNavigate();

  // Load liked hotels from localStorage on component mount
  useEffect(() => {
    const savedLikedHotels = localStorage.getItem('likedHotels');
    if (savedLikedHotels) {
      setLikedHotels(JSON.parse(savedLikedHotels));
    }
  }, []);

  const handleSelectHotel = (hotel) => {
    setSelectedHotel(hotel);
  };

  const handleProceedToPayment = () => {
    if (selectedHotel) {
      // Save selected hotel to localStorage for payment page
      localStorage.setItem('selectedHotel', JSON.stringify(selectedHotel));
      // Navigate to payment page
    //   navigate(`/payment/${selectedHotel.id}`);
    navigate('/payment');
    }
  };

  const handleBackToSwipe = () => {
    navigate('/results');
  };

  const handleRemoveHotel = (hotelToRemove) => {
    const updatedLikedHotels = likedHotels.filter(hotel => hotel.id !== hotelToRemove.id);
    setLikedHotels(updatedLikedHotels);
    localStorage.setItem('likedHotels', JSON.stringify(updatedLikedHotels));
    
    // If the removed hotel was selected, clear the selection
    if (selectedHotel?.id === hotelToRemove.id) {
      setSelectedHotel(null);
    }
  };

  const handleClearAll = () => {
    setLikedHotels([]);
    setSelectedHotel(null);
    localStorage.removeItem('likedHotels');
  };

  const getRatingBar = (rating) => {
    const percentage = (rating / 5) * 100;
    return (
        
      <div className="flex items-center gap-2">
        <div className="w-20 bg-gray-200 rounded-full h-2">
          <div 
            className="bg-orange-400 h-2 rounded-full transition-all duration-300"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <span className="text-sm font-medium text-gray-600 min-w-[2rem]">{rating}</span>
      </div>
    );
  };

  const getFeatureIcon = (feature) => {
    const featureLower = feature.toLowerCase();
    if (featureLower.includes('wi-fi') || featureLower.includes('wifi')) return '📶';
    if (featureLower.includes('breakfast') || featureLower.includes('meal') || featureLower.includes('dinner')) return '🍽️';
    if (featureLower.includes('pool') || featureLower.includes('swimming')) return '🏊';
    if (featureLower.includes('spa') || featureLower.includes('massage')) return '💆';
    if (featureLower.includes('parking') || featureLower.includes('car')) return '🚗';
    if (featureLower.includes('view') || featureLower.includes('scenic')) return '🌅';
    if (featureLower.includes('ac') || featureLower.includes('air conditioning')) return '❄️';
    if (featureLower.includes('gym') || featureLower.includes('fitness')) return '💪';
    return '✨';
  };

  // Show empty state if no liked hotels
  if (!likedHotels || likedHotels.length === 0) {
    return (
      <>
        {/* Fixed Background */}
        <div 
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        
        {/* Scrollable Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center">
          <div className="text-center max-w-md mx-auto px-6">
            <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Heart className="w-12 h-12 text-gray-300" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">No Hotels Liked Yet</h2>
            <p className="text-white text-opacity-90 mb-8 text-lg drop-shadow-md">Start swiping right on hotels you love to see them here for comparison!</p>
            <button 
              onClick={handleBackToSwipe}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Start Swiping Hotels
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Fixed Background */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Scrollable Content */}
      <div className="relative z-10 min-h-screen">
        {/* Header */}
        <div className="bg-white bg-opacity-95 backdrop-blur-sm shadow-lg border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button 
                  onClick={handleBackToSwipe}
                  className="p-3 hover:bg-gray-100 rounded-full transition-colors group"
                >
                  <ArrowLeft className="w-6 h-6 text-gray-600 group-hover:text-gray-800" />
                </button>
                <div>
                  <h1 className="text-3xl font-bold text-gray-800">Hotel Comparison</h1>
                  <p className="text-gray-500 mt-1">Compare your liked hotels and choose the perfect one</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">{likedHotels.length}</div>
                  <div className="text-sm text-gray-500">hotel{likedHotels.length !== 1 ? 's' : ''} to compare</div>
                </div>
                {likedHotels.length > 1 && (
                  <button
                    onClick={handleClearAll}
                    className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span className="text-sm font-medium">Clear All</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {likedHotels.map((hotel) => (
              <div 
                key={hotel.id}
                className={`bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 ${
                  selectedHotel?.id === hotel.id ? 'ring-4 ring-blue-500 ring-opacity-50 shadow-2xl' : ''
                }`}
              >
                {/* Hotel Image */}
                <div className="relative h-56">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-2 flex items-center gap-1 shadow-lg">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="font-bold text-gray-800">{hotel.rating}</span>
                  </div>

                  {/* Price Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl px-4 py-2 font-bold shadow-lg">
                    ₹{hotel.pricePerNight.toLocaleString()}
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => handleRemoveHotel(hotel)}
                    className="absolute bottom-4 right-4 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 shadow-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                  {/* Selected Indicator */}
                  {selectedHotel?.id === hotel.id && (
                    <div className="absolute inset-0 bg-blue-500/20 flex items-center justify-center">
                      <div className="bg-blue-500 text-white rounded-full p-3 shadow-xl">
                        <Check className="w-8 h-8" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Hotel Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{hotel.name}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span className="text-lg">{hotel.location}</span>
                  </div>

                  <div className="text-green-600 font-bold text-xl mb-6">
                    ₹{hotel.pricePerNight.toLocaleString()} / night
                  </div>

                  {/* Ratings Section */}
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-700 mb-4 text-lg">Ratings</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-600">Location</span>
                        {getRatingBar(hotel.ratings?.location || 4.5)}
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-600">Cleanliness</span>
                        {getRatingBar(hotel.ratings?.cleanliness || 4.4)}
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-600">Amenities</span>
                        {getRatingBar(hotel.ratings?.amenities || 4.3)}
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-600">Price Value</span>
                        {getRatingBar(hotel.ratings?.price || 4.2)}
                      </div>
                    </div>
                  </div>

                  {/* Features Section - Enhanced */}
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-700 mb-4 text-lg">Features</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {hotel.features.slice(0, 4).map((feature, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center gap-3 bg-blue-50 text-blue-800 px-3 py-2 rounded-lg"
                        >
                          <span className="text-lg">{getFeatureIcon(feature)}</span>
                          <span className="font-medium text-sm">{feature}</span>
                        </div>
                      ))}
                      {hotel.features.length > 4 && (
                        <div className="text-center mt-2">
                          <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                            +{hotel.features.length - 4} more features
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Emvy Suggestions */}
                  <div className="mb-6 bg-orange-50 rounded-lg p-4">
                    <h4 className="font-bold text-orange-800 mb-2 text-sm">Emvy Suggestions</h4>
                    <ul className="text-xs text-orange-700 space-y-1">
                      <li>• Highest guest rating in this category</li>
                      <li>• Most reviews for service excellence</li>
                      <li>• Priced lower than similar hotels nearby</li>
                    </ul>
                  </div>

                  {/* Selection Button */}
                  <button
                    onClick={() => handleSelectHotel(hotel)}
                    className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-200 flex items-center justify-center gap-3 ${
                      selectedHotel?.id === hotel.id
                        ? 'bg-blue-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                    }`}
                  >
                    {selectedHotel?.id === hotel.id && <Check className="w-6 h-6" />}
                    {selectedHotel?.id === hotel.id ? 'Selected' : 'Select This Hotel'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Proceed to Payment - Fixed Bottom Button */}
          {selectedHotel && (
            <div className="fixed bottom-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-sm border-t border-gray-200 shadow-2xl p-4 z-50">
              <div className="max-w-md mx-auto">
                <div className="text-center mb-3">
                  <p className="text-gray-600 text-sm">Selected: <span className="font-semibold">{selectedHotel.name}</span></p>
                </div>
                <button
                  onClick={handleProceedToPayment}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-4 rounded-2xl font-bold text-lg shadow-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-3"
                >
                  <span>Select Rooms</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    ₹{selectedHotel.pricePerNight.toLocaleString()}
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Padding for Fixed Button */}
        {selectedHotel && <div className="h-24"></div>}
      </div>
    </>
  );
};

export default HotelComparisonPage;