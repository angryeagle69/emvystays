import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BudgetSelectionPage = ({ onNext, onBack }) => {
  const [selectedBudget, setSelectedBudget] = useState('');
  const [customMin, setCustomMin] = useState(1500);
  const [customMax, setCustomMax] = useState(5500);
  const [minInput, setMinInput] = useState('1,500');
  const [maxInput, setMaxInput] = useState('5,500');
  const [isDragging, setIsDragging] = useState(null);
  const navigate = useNavigate();
  
  const sliderRef = useRef(null);

  const budgetOptions = [
    { id: 'affordable', label: 'Affordable Gems', range: '₹1500 — ₹2500', min: 1500, max: 2500 },
    { id: 'balanced', label: 'Balanced Comfort', range: '₹2500 — ₹3500', min: 2500, max: 3500 },
    { id: 'premium', label: 'Premium Picks', range: '₹4500 — ₹5500', min: 4500, max: 5500 }
  ];

  const MIN_RANGE = 1000;
  const MAX_RANGE = 10000;
  const MIN_GAP = 500;

  const handleBudgetSelect = (budgetId) => {
    setSelectedBudget(budgetId);
    const option = budgetOptions.find(opt => opt.id === budgetId);
    if (option) {
      setCustomMin(option.min);
      setCustomMax(option.max);
      setMinInput(option.min.toLocaleString());
      setMaxInput(option.max.toLocaleString());
    }
  };

  const handleNext = () => {
    const budgetData = {
      selectedOption: selectedBudget,
      customRange: { min: customMin, max: customMax }
    };
    console.log('Selected budget:', budgetData);
    if (onNext) onNext();
  };

  const handleBack = () => {
    //if (onBack) onBack();
    navigate('/amenity');
  };

  const getPercentage = (value) => {
    return ((value - MIN_RANGE) / (MAX_RANGE - MIN_RANGE)) * 100;
  };

  const getValueFromPercentage = (percentage) => {
    return Math.round(MIN_RANGE + (percentage / 100) * (MAX_RANGE - MIN_RANGE));
  };

  const handleSliderMouseDown = (e, type) => {
    e.preventDefault();
    setIsDragging(type);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const percentage = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const value = getValueFromPercentage(percentage);

    if (isDragging === 'min') {
      const newMin = Math.max(MIN_RANGE, Math.min(value, customMax - MIN_GAP));
      if (newMin !== customMin) {
        setCustomMin(newMin);
        setMinInput(newMin.toLocaleString());
        setSelectedBudget('');
      }
    } else if (isDragging === 'max') {
      const newMax = Math.min(MAX_RANGE, Math.max(value, customMin + MIN_GAP));
      if (newMax !== customMax) {
        setCustomMax(newMax);
        setMaxInput(newMax.toLocaleString());
        setSelectedBudget('');
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(null);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, customMin, customMax]);

  const handleMinInputChange = (e) => {
    const inputValue = e.target.value;
    setMinInput(inputValue);
    
    // Allow empty input or just numbers/commas
    if (inputValue === '' || /^[\d,]*$/.test(inputValue)) {
      const numericValue = inputValue.replace(/,/g, '');
      
      if (numericValue !== '' && !isNaN(numericValue)) {
        const numValue = parseInt(numericValue);
        if (numValue >= MIN_RANGE && numValue <= MAX_RANGE && numValue < customMax - MIN_GAP) {
          setCustomMin(numValue);
          setSelectedBudget('');
        }
      }
    }
  };

  const handleMaxInputChange = (e) => {
    const inputValue = e.target.value;
    setMaxInput(inputValue);
    
    // Allow empty input or just numbers/commas
    if (inputValue === '' || /^[\d,]*$/.test(inputValue)) {
      const numericValue = inputValue.replace(/,/g, '');
      
      if (numericValue !== '' && !isNaN(numericValue)) {
        const numValue = parseInt(numericValue);
        if (numValue >= MIN_RANGE && numValue <= MAX_RANGE && numValue > customMin + MIN_GAP) {
          setCustomMax(numValue);
          setSelectedBudget('');
        }
      }
    }
  };

  // Handle input blur to format the display and ensure valid values
  const handleMinInputBlur = () => {
    const numericValue = minInput.replace(/,/g, '');
    if (numericValue === '' || isNaN(numericValue)) {
      setMinInput(customMin.toLocaleString());
    } else {
      const numValue = parseInt(numericValue);
      const clampedValue = Math.max(MIN_RANGE, Math.min(numValue, customMax - MIN_GAP));
      setCustomMin(clampedValue);
      setMinInput(clampedValue.toLocaleString());
    }
  };

  const handleMaxInputBlur = () => {
    const numericValue = maxInput.replace(/,/g, '');
    if (numericValue === '' || isNaN(numericValue)) {
      setMaxInput(customMax.toLocaleString());
    } else {
      const numValue = parseInt(numericValue);
      const clampedValue = Math.min(MAX_RANGE, Math.max(numValue, customMin + MIN_GAP));
      setCustomMax(clampedValue);
      setMaxInput(clampedValue.toLocaleString());
    }
  };

  const minPercent = getPercentage(customMin);
  const maxPercent = getPercentage(customMax);

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
          alt="Hotel Luxury"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Centered Budget Selection Card */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
        <div className="w-full max-w-lg">
          <div className="bg-white rounded-2xl shadow-2xl backdrop-blur-sm bg-opacity-95">
            <div className="p-8 custom-scrollbar overflow-y-auto max-h-[85vh]">
              {/* Logo */}
              <div className="text-center mb-6">
                <h1 className="text-4xl font-bold text-gray-800">
                  em<span className="text-orange-500">:</span>vy
                </h1>
              </div>

              {/* Form Content */}
              <div className="space-y-6">
                {/* Header */}
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    What's your ideal budget per night?
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Set budget according to your preference.
                  </p>
                </div>

                {/* Budget Options */}
                <div className="space-y-3">
                  {budgetOptions.map((option) => (
                    <div
                      key={option.id}
                      className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                        selectedBudget === option.id
                          ? 'border-green-400 bg-green-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => handleBudgetSelect(option.id)}
                    >
                      <div>
                        <h3 className="font-medium text-gray-800">{option.label}</h3>
                        <p className="text-gray-600 text-sm">{option.range}</p>
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        selectedBudget === option.id
                          ? 'border-green-400 bg-green-400'
                          : 'border-gray-300'
                      }`}>
                        {selectedBudget === option.id && (
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Custom Slider Section */}
                <div className="space-y-4">
                  <h3 className="font-medium text-gray-800">Custom slider</h3>
                  
                  {/* Dual Handle Range Slider */}
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>₹{customMin.toLocaleString()}</span>
                      <span>₹{customMax.toLocaleString()}</span>
                    </div>
                    
                    <div className="relative h-6 flex items-center" ref={sliderRef}>
                      {/* Track */}
                      <div className="absolute w-full h-2 bg-gray-200 rounded-lg"></div>
                      
                      {/* Active Track */}
                      <div 
                        className="absolute h-2 bg-green-400 rounded-lg"
                        style={{
                          left: `${minPercent}%`,
                          width: `${maxPercent - minPercent}%`
                        }}
                      ></div>
                      
                      {/* Min Handle */}
                      <div
                        className="absolute w-5 h-5 bg-green-400 border-2 border-white rounded-full shadow-lg cursor-pointer transform -translate-x-1/2 hover:scale-110 transition-transform z-10"
                        style={{ left: `${minPercent}%` }}
                        onMouseDown={(e) => handleSliderMouseDown(e, 'min')}
                      ></div>
                      
                      {/* Max Handle */}
                      <div
                        className="absolute w-5 h-5 bg-green-400 border-2 border-white rounded-full shadow-lg cursor-pointer transform -translate-x-1/2 hover:scale-110 transition-transform z-10"
                        style={{ left: `${maxPercent}%` }}
                        onMouseDown={(e) => handleSliderMouseDown(e, 'max')}
                      ></div>
                    </div>
                  </div>

                  {/* Price Inputs */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">Min Price</label>
                      <div className="relative">
                        <input
                          type="text"
                          value={minInput}
                          onChange={handleMinInputChange}
                          onBlur={handleMinInputBlur}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                        />
                        <span className="absolute right-3 top-2 text-gray-500">₹</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">Max Price</label>
                      <div className="relative">
                        <input
                          type="text"
                          value={maxInput}
                          onChange={handleMaxInputChange}
                          onBlur={handleMaxInputBlur}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                        />
                        <span className="absolute right-3 top-2 text-gray-500">₹</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="pt-4">
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div className="bg-orange-500 h-1 rounded-full w-full transition-all duration-500 ease-in-out"></div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between pt-4">
                  <button
                    onClick={handleBack}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                  >
                    <ChevronLeft className="h-6 w-6 text-gray-600" />
                  </button>

                  <button
                    onClick={handleNext}
                    className="flex-1 flex justify-center ml-4 bg-green-400 hover:bg-green-500 text-white font-semibold py-3 px-6 rounded-full transition-all duration-200 transform hover:scale-[1.02]"
                  >
                    Get Matched
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

export default BudgetSelectionPage;