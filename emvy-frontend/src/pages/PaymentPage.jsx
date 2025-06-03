import React, { useState } from 'react';
import { ArrowLeft, CreditCard, Smartphone, Building2, MapPin } from 'lucide-react';
import hotelData from '../data/HotelData';

const PaymentPage = ({ hotelId = 1, nights = 2 }) => {
  const [selectedPayment, setSelectedPayment] = useState('credit');

  const hotel = hotelData.find(h => h.id === hotelId);

  if (!hotel) {
    return <div className="text-center p-8">Hotel not found</div>;
  }

  const subtotal = hotel.pricePerNight * nights;
  const serviceFee = 60;
  const total = subtotal + serviceFee;

  const paymentOptions = [
    { id: 'credit', icon: CreditCard, label: 'Credit/Debit Card' },
    { id: 'upi', icon: Smartphone, label: 'UPI' },
    { id: 'netbanking', icon: Building2, label: 'Net Banking' },
    { id: 'hotel', icon: MapPin, label: 'Pay at hotel' }
  ];

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      {/* Full Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
          alt="Hotel Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10 w-full h-full overflow-y-auto">
        <div className="flex justify-center items-start min-h-screen py-12 px-4">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm bg-opacity-95">
            
            {/* Header */}
            <div className="flex items-center p-6 border-b bg-white">
              <ArrowLeft className="w-6 h-6 text-gray-600 mr-4 cursor-pointer hover:text-gray-800 transition-colors" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Booking Summary</h1>
                <p className="text-sm text-gray-500 mt-1">Complete your reservation</p>
              </div>
            </div>

            {/* Booking Summary */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 mx-6 my-4 rounded-xl border border-green-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-2 h-6 bg-green-500 rounded-full mr-3"></div>
                Booking Summary
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-gray-600 font-medium">Hotel Name</span>
                  <span className="text-gray-900 font-semibold text-right max-w-[200px] leading-tight">
                    {hotel.name}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">Location</span>
                  <span className="text-gray-900 font-medium">{hotel.location}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">
                    ₹{hotel.pricePerNight} × {nights} night{nights > 1 ? 's' : ''}
                  </span>
                  <span className="text-gray-900 font-semibold">
                    ₹{subtotal.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">Service fee</span>
                  <span className="text-gray-900 font-medium">₹{serviceFee}</span>
                </div>

                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900 font-bold text-lg">Total Amount</span>
                    <span className="font-bold text-xl text-green-600">
                      ₹{total.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <button className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors underline">
                    More Info
                  </button>
                </div>
              </div>
            </div>

            {/* Payment Options */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-2 h-6 bg-blue-500 rounded-full mr-3"></div>
                Pay With
              </h3>

              <div className="space-y-4">
                {paymentOptions.map((option) => {
                  const IconComponent = option.icon;
                  return (
                    <div
                      key={option.id}
                      className={`flex items-center justify-between p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 hover:shadow-md ${
                        selectedPayment === option.id
                          ? 'border-orange-400 bg-orange-50 shadow-md'
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                      }`}
                      onClick={() => setSelectedPayment(option.id)}
                    >
                      <div className="flex items-center">
                        <div className={`p-2 rounded-lg mr-4 ${
                          selectedPayment === option.id ? 'bg-orange-100' : 'bg-gray-100'
                        }`}>
                          <IconComponent className={`w-5 h-5 ${
                            selectedPayment === option.id ? 'text-orange-600' : 'text-gray-600'
                          }`} />
                        </div>
                        <span className="text-gray-900 font-semibold">{option.label}</span>
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                        selectedPayment === option.id
                          ? 'border-orange-400 bg-orange-400'
                          : 'border-gray-300'
                      }`}>
                        {selectedPayment === option.id && (
                          <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Confirm Button */}
            <div className="p-6 pt-2">
              <button className="w-full flex justify-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <div className="flex flex-col items-center">
                  <span className="text-lg">Confirm Booking</span>
                  <div className="text-sm opacity-90 mt-1">₹{total.toLocaleString()}</div>
                </div>
              </button>
            </div>

            {/* Footer */}
            <div className="px-6 pb-6">
              <p className="text-xs text-gray-500 text-center">
                By confirming, you agree to our terms and conditions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
