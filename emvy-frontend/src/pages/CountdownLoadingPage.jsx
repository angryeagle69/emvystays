import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CountdownLoadingPage = ({ onComplete }) => {
  const [currentNumber, setCurrentNumber] = useState(5);
  const [isSpinning, setIsSpinning] = useState(false);
  const [prevNumber, setPrevNumber] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const countdown = setInterval(() => {
      setIsSpinning(true);
      setTimeout(() => {
        setCurrentNumber(prev => {
          const next = prev - 1;
          setPrevNumber(prev);
          if (next < 0) {
            clearInterval(countdown);
            setTimeout(() => {
              if (onComplete) onComplete();
              navigate('/results');
            }, 500);
            return 0;
          }
          return next;
        });
        setIsSpinning(false);
      }, 400);
    }, 1000);

    return () => clearInterval(countdown);
  }, [navigate, onComplete]);

  const getNumberColor = (num) => {
    const colors = {
      5: 'text-blue-600',
      4: 'text-purple-600',
      3: 'text-green-600',
      2: 'text-yellow-600',
      1: 'text-red-600',
      0: 'text-orange-500'
    };
    return colors[num] || 'text-gray-800';
  };

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      <style jsx>{`
        @keyframes slideUp {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-100px); opacity: 0; }
        }

        @keyframes slideIn {
          0% { transform: translateY(100px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(249, 115, 22, 0.5); }
          50% { box-shadow: 0 0 40px rgba(249, 115, 22, 0.8), 0 0 60px rgba(249, 115, 22, 0.3); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .slide-up {
          animation: slideUp 0.5s ease-in-out forwards;
        }

        .slide-in {
          animation: slideIn 0.5s ease-in-out forwards;
        }

        .glow-effect {
          animation: glow 2s ease-in-out infinite;
        }

        .pulse-effect {
          animation: pulse 1.5s ease-in-out infinite;
        }

        .number-container {
          height: 120px;
          overflow: hidden;
          position: relative;
        }
      `}</style>

      {/* Full Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
          alt="Casino Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4">
        {/* Logo */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">
            em<span className="text-orange-500">:</span>vy
          </h1>
        </div>

        {/* Status Text */}
        <div className="text-center mb-8">
          <p className="text-orange-400 text-lg font-medium mb-2">
            Ready to meet your match
          </p>
        </div>

        {/* Countdown Card */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-12 glow-effect">
          <div className="text-center">
            {/* Number Display with Slide Animation */}
            <div className="number-container mb-6">
              {prevNumber !== null && currentNumber > 0 && (
              <div
                key={`prev-${prevNumber}`}
                className={`text-8xl font-bold absolute w-full text-center ${getNumberColor(prevNumber)} slide-up`}
                  style={{
                    textShadow: '0 4px 8px rgba(0,0,0,0.3)',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                  }}
                >
                  {prevNumber}
                </div>
              )}

              {currentNumber >= 0 && (
                <div
                  key={`curr-${currentNumber}`}
                  className={`text-8xl font-bold absolute w-full text-center ${getNumberColor(currentNumber)} ${
                    prevNumber !== null ? 'slide-in' : ''
                  }`}
                  style={{
                    textShadow: '0 4px 8px rgba(0,0,0,0.3)',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                  }}
                >
                  {currentNumber}
                </div>
              )}
            </div>

            {/* Loading Text */}
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-gray-800">
                Your Ideal Stay
              </h2>
              <p className="text-lg text-gray-600">
                is{' '}
                <span className="text-orange-500 font-medium pulse-effect inline-block">
                  Loading...
                </span>
              </p>
            </div>

            {/* Spinning Dots Animation */}
            <div className="flex justify-center space-x-2 mt-8">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"
                  style={{
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: '1s',
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-12 w-64">
          <div className="w-full bg-white/20 rounded-full h-2">
            <div
              className="bg-orange-500 h-2 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${((5 - currentNumber) / 5) * 100}%` }}
            ></div>
          </div>
          <p className="text-white/70 text-sm text-center mt-2">
            Finding your perfect match...
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountdownLoadingPage;
