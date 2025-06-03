import React, { useState } from "react";
import {
  Star,
  MapPin,
  Wifi,
  Car,
  Coffee,
  Utensils,
  Camera,
  Users,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useParams } from "react-router-dom";
import hotelData from "../data/HotelData";

const HotelDetailPage = () => {
  const { id } = useParams();
  const hotel = hotelData.find((h) => h.id === parseInt(id));
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!hotel) return <div className="p-6">Hotel not found.</div>;

  // Use the new images property if available; otherwise fallback on the single image.
  const hotelImages =
    hotel.images && hotel.images.length > 0 ? hotel.images : [hotel.image];

  const handlePrev = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? hotelImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === hotelImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const generateReviews = () => {
    const reviews = [
      {
        id: 1,
        name: "Priya Sharma",
        rating: Math.min(5, Math.round(hotel.rating)),
        date: "2 weeks ago",
        comment: `Amazing stay at ${hotel.name}! The ${hotel.features[0].toLowerCase()} was absolutely breathtaking. Highly recommend this place.`,
        helpful: 12,
      },
      {
        id: 2,
        name: "Rahul Gupta",
        rating: Math.max(4, Math.round(hotel.rating - 0.3)),
        date: "1 month ago",
        comment: `Great location in ${hotel.location}. The ${
          hotel.features[1]?.toLowerCase() || "amenities"
        } were exactly what we needed. Staff was very friendly.`,
        helpful: 8,
      },
      {
        id: 3,
        name: "Anjali Reddy",
        rating: Math.round(hotel.rating),
        date: "2 months ago",
        comment: `Perfect for a relaxing getaway. The ${
          hotel.features[2]?.toLowerCase() || "facilities"
        } made our stay comfortable. Will definitely come back!`,
        helpful: 15,
      },
    ];
    return reviews;
  };

  const reviews = generateReviews();

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));

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
        <div className="container mx-auto px-4 py-8">
          {/* Header Section */}
          <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden mb-8">
            {/* Image Gallery */}
            <div className="relative">
              <div className="h-96 overflow-hidden">
                <img
                  src={hotelImages[selectedImageIndex]}
                  alt={hotel.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              {/* Left/Right Navigation Buttons */}
              <button
                onClick={handlePrev}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full hover:bg-white hover:scale-105"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              <button
                onClick={handleNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full hover:bg-white hover:scale-105"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
              {/* Dots Navigation */}
              <div className="absolute bottom-4 left-4 flex space-x-2">
                {hotelImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      selectedImageIndex === index
                        ? "bg-white"
                        : "bg-white bg-opacity-50"
                    }`}
                  />
                ))}
              </div>
              {/* Favorite & Share Buttons */}
              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="bg-white bg-opacity-80 p-2 rounded-full hover:bg-white transition-colors">
                  <Heart className="w-5 h-5 text-gray-700" />
                </button>
                <button className="bg-white bg-opacity-80 p-2 rounded-full hover:bg-white transition-colors">
                  <Share2 className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>

            {/* Hotel Info */}
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-4xl font-bold text-gray-800 mb-2">
                    {hotel.name}
                  </h1>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span className="text-lg">{hotel.location}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex mr-2">
                      {renderStars(Math.round(hotel.rating))}
                    </div>
                    <span className="text-lg font-semibold text-gray-700">
                      {hotel.rating}
                    </span>
                    <span className="text-gray-500 ml-2">
                      ({reviews.length} reviews)
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-green-600">
                    ₹{hotel.pricePerNight.toLocaleString()}
                  </div>
                  <div className="text-gray-500">per night</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* About Section */}
              <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  About This Place
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Welcome to {hotel.name}, a stunning accommodation located in the
                  heart of {hotel.location}. This exceptional property offers
                  guests an unforgettable experience with its unique blend of
                  comfort and luxury. Whether you're here for business or leisure,
                  our thoughtfully designed spaces and premium amenities ensure
                  your stay exceeds expectations.
                </p>
              </div>

              {/* Amenities & Features */}
              <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Amenities & Features
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {hotel.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center p-3 bg-blue-50 bg-opacity-80 backdrop-blur-sm rounded-lg"
                    >
                      {feature.toLowerCase().includes("wi-fi") && (
                        <Wifi className="w-5 h-5 text-blue-600 mr-3" />
                      )}
                      {feature.toLowerCase().includes("breakfast") && (
                        <Coffee className="w-5 h-5 text-blue-600 mr-3" />
                      )}
                      {feature.toLowerCase().includes("parking") && (
                        <Car className="w-5 h-5 text-blue-600 mr-3" />
                      )}
                      {feature.toLowerCase().includes("dinner") && (
                        <Utensils className="w-5 h-5 text-blue-600 mr-3" />
                      )}
                      {!["wi-fi", "breakfast", "parking", "dinner"].some(
                        (keyword) => feature.toLowerCase().includes(keyword)
                      ) && (
                        <Camera className="w-5 h-5 text-blue-600 mr-3" />
                      )}
                      <span className="text-gray-700 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reviews Section */}
              <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl shadow-lg p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">
                    Guest Reviews
                  </h2>
                  <div className="flex items-center">
                    <div className="flex mr-2">
                      {renderStars(Math.round(hotel.rating))}
                    </div>
                    <span className="text-xl font-semibold text-gray-700">
                      {hotel.rating}
                    </span>
                  </div>
                </div>

                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div
                      key={review.id}
                      className="border-b border-gray-100 pb-6 last:border-b-0"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <div className="flex items-center mb-2">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                              {review.name.charAt(0)}
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800">
                                {review.name}
                              </h4>
                              <p className="text-sm text-gray-500">
                                {review.date}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center mb-2">
                            {renderStars(review.rating)}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-3">{review.comment}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="w-4 h-4 mr-1" />
                        <span>{review.helpful} people found this helpful</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="sticky top-6 space-y-6">
              {/* Booking Card */}
              <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl shadow-lg p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    ₹{hotel.pricePerNight.toLocaleString()}
                  </div>
                  <div className="text-gray-500">per night</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Check-in
                    </label>
                    <input
                      type="date"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white bg-opacity-90"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Check-out
                    </label>
                    <input
                      type="date"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white bg-opacity-90"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Guests
                    </label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white bg-opacity-90">
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4+ Guests</option>
                    </select>
                  </div>
                </div>

                <button className="w-full flex justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105">
                  Book Now
                </button>

                <div className="mt-4 text-center text-sm text-gray-500">
                  Free cancellation • No booking fees
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  Quick Info
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location</span>
                    <span className="font-medium text-gray-800">
                      {hotel.location}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rating</span>
                    <span className="font-medium text-gray-800">
                      {hotel.rating}/5
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Property Type</span>
                    <span className="font-medium text-gray-800">Hotel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelDetailPage;