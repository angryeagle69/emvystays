import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, X, Star, MapPin } from "lucide-react";
import hotelData from "../data/HotelData";

const HotelSwipePage = () => {
  const [index, setIndex] = useState(0);
  const [isSwipeAnimation, setIsSwipeAnimation] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState("");
  const [likedHotels, setLikedHotels] = useState([]);
  const navigate = useNavigate();

  const hotel = hotelData[index];

  // Load liked hotels from localStorage on component mount
  useEffect(() => {
    const savedLikedHotels = localStorage.getItem('likedHotels');
    if (savedLikedHotels) {
      setLikedHotels(JSON.parse(savedLikedHotels));
    }
  }, []);

  const handleSwipe = (direction) => {
    console.log(`${direction} on ${hotel.name}`);
    setSwipeDirection(direction);
    setIsSwipeAnimation(true);
    
    // Save liked hotel to both state and localStorage
    if (direction === 'right') {
      const updatedLikedHotels = [...likedHotels, hotel];
      setLikedHotels(updatedLikedHotels);
      localStorage.setItem('likedHotels', JSON.stringify(updatedLikedHotels));
    }
    
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % hotelData.length);
      setIsSwipeAnimation(false);
      setSwipeDirection("");
    }, 300);
  };

  const handleClick = () => {
    navigate(`/hotels/${hotel.id}`);
  };

  const handleCompareClick = () => {
    navigate('/hotel-comparison');
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

  return (
    <div 
      className="absolute inset-0 w-full h-full"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>

      {/* Header */}
      <div className="absolute top-6 left-0 right-0 text-center z-10">
        <h1 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">Find Your Perfect Stay</h1>
        <p className="text-white/90 drop-shadow-md">Swipe right to like, left to pass</p>
        
        {/* Compare Button - Show only if there are liked hotels */}
        {likedHotels.length > 0 && (
          <button 
            onClick={handleCompareClick}
            className="mt-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg transition-all duration-200 transform hover:scale-105"
          >
            Compare Liked Hotels ({likedHotels.length})
          </button>
        )}
      </div>

      {/* Main Card Container */}
      <div className="w-full max-w-4xl mx-auto mt-40 z-10">
        {/* Hotel Card - Now Horizontal */}
        <div 
          className={`bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 ${
            isSwipeAnimation 
              ? swipeDirection === 'right' 
                ? 'translate-x-full rotate-12 opacity-0' 
                : '-translate-x-full -rotate-12 opacity-0'
              : 'translate-x-0 rotate-0 opacity-100 hover:scale-105'
          }`}
        >
          {/* Horizontal Layout */}
          <div className="flex flex-col md:flex-row h-80">
            {/* Hotel Image - Left Side */}
            <div className="relative md:w-1/2 h-full">
              <img
                src={hotel.image}
                alt={hotel.name}
                onClick={handleClick}
                className="w-full h-full object-cover cursor-pointer"
              />
              
              {/* Rating Badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="font-semibold text-gray-800">{hotel.rating}</span>
              </div>

              {/* Price Badge */}
              <div className="absolute top-4 left-4 bg-green-500 text-white rounded-full px-4 py-2 font-bold shadow-lg">
                ₹{hotel.pricePerNight}
              </div>

              {/* Liked Indicator - Show if hotel is already liked */}
              {likedHotels.some(likedHotel => likedHotel.id === hotel.id) && (
                <div className="absolute bottom-4 right-4 bg-pink-500 text-white rounded-full p-2 shadow-lg">
                  <Heart className="w-5 h-5 fill-white" />
                </div>
              )}
            </div>

            {/* Hotel Info - Right Side */}
            <div className="p-6 md:w-1/2 h-full flex flex-col justify-between">
              <div>
                <h2 
                  className="text-2xl font-bold text-gray-800 mb-3 cursor-pointer hover:text-blue-600 transition-colors"
                  onClick={handleClick}
                >
                  {hotel.name}
                </h2>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-lg">{hotel.location}</span>
                </div>

                <div className="text-green-600 font-bold text-xl mb-6">
                  ₹{hotel.pricePerNight} / night
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-700 mb-3 text-lg">Features</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {hotel.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
                        <span className="text-lg">{getFeatureIcon(feature)}</span>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center items-center gap-12 mt-8">
          {/* Pass Button */}
          <button 
            onClick={() => handleSwipe("left")} 
            className="w-20 h-20 bg-white/90 backdrop-blur-sm border-4 border-red-200 rounded-full flex items-center justify-center shadow-xl hover:border-red-300 hover:scale-110 transition-all duration-200 group"
            disabled={isSwipeAnimation}
          >
            <X className="w-10 h-10 text-red-500 group-hover:text-red-600" />
          </button>

          {/* Like Button */}
          <button 
            onClick={() => handleSwipe("right")} 
            className="w-20 h-20 bg-white/90 backdrop-blur-sm border-4 border-green-200 rounded-full flex items-center justify-center shadow-xl hover:border-green-300 hover:scale-110 transition-all duration-200 group"
            disabled={isSwipeAnimation}
          >
            <Heart className="w-10 h-10 text-green-500 group-hover:text-green-600 group-hover:fill-green-600" />
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="mt-8 text-center">
          <div className="text-sm text-white/90 mb-3 font-medium drop-shadow-md">
            {index + 1} of {hotelData.length}
          </div>
          <div className="w-full max-w-md mx-auto bg-white/30 h-3 rounded-full backdrop-blur-sm">
            <div 
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-300 shadow-lg"
              style={{ width: `${((index + 1) / hotelData.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Bottom hint */}
      <div className="absolute bottom-6 left-0 right-0 text-center z-10">
        <p className="text-white/90 text-sm font-medium drop-shadow-md">
          Tap the card to view details • {hotelData.length - index - 1} hotels remaining
        </p>
        {likedHotels.length > 0 && (
          <p className="text-white/80 text-xs mt-1 drop-shadow-md">
            💕 {likedHotels.length} hotel{likedHotels.length !== 1 ? 's' : ''} liked so far
          </p>
        )}
      </div>
    </div>
  );
};

export default HotelSwipePage;