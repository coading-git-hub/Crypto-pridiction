import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, Search, MoreHorizontal, X, Square, RotateCcw, Eye, EyeOff, User } from 'lucide-react';
import PredictionModal from './PredictionModal';
import TradersTabContent from '../TradersTabContent';

const CryptoDashboard = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [showPrediction, setShowPrediction] = useState(false);
  const [currentPrediction, setCurrentPrediction] = useState(null);
  const [activeTab, setActiveTab] = useState('market');
  const [predictionHistory, setPredictionHistory] = useState([
    {
      id: 1,
      coin: 'Bitcoin',
      prediction: 'Bullish trend expected',
      accuracy: 87,
      timestamp: '2h ago',
      status: 'active'
    },
    {
      id: 2,
      coin: 'Ethereum', 
      prediction: 'Consolidation phase',
      accuracy: 92,
      timestamp: '5h ago',
      status: 'closed'
    }
  ]);

  const [cryptoData] = useState([
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      price: 26456.01,
      change: 2.5,
      bgColor: 'bg-yellow-500',
      icon: '₿'
    },
    {
      name: 'Ethereum',
      symbol: 'ETH', 
      price: 1258.01,
      change: -1.2,
      bgColor: 'bg-blue-500',
      icon: 'Ξ'
    },
    {
      name: 'Litecoin',
      symbol: 'LTC',
      price: 82456.01,
      change: 4.8,
      bgColor: 'bg-blue-400',
      icon: 'Ł'
    },
    {
      name: 'Dash',
      symbol: 'DASH',
      price: 28456.01,
      change: 3.2,
      bgColor: 'bg-green-500',
      icon: 'D'
    }
  ]);

  const [tradingData] = useState([
    { name: 'BTC', price: '22,256.19', change: '+2%', accuracy: 98, color: 'text-red-400' },
    { name: 'TRX', price: '22,256.19', change: '+2%', accuracy: 35, color: 'text-green-400' },
    { name: 'DOGE', price: '22,256.19', change: '+2%', accuracy: 58, color: 'text-blue-400' },
    { name: 'XRP', price: '22,256.19', change: '+2%', accuracy: 76, color: 'text-orange-400' }
  ]);

  const generatePrediction = (coinName) => {
    const predictions = [
      `${coinName} shows strong upward momentum with high probability of breaking resistance levels.`,
      `Technical analysis suggests ${coinName} may experience consolidation in current range.`,
      `Market indicators point to potential ${coinName} breakout above key moving averages.`,
      `${coinName} displays bearish signals suggesting possible correction ahead.`
    ];
    
    const randomPrediction = predictions[Math.floor(Math.random() * predictions.length)];
    const accuracy = Math.floor(Math.random() * 30) + 70;
    
    setCurrentPrediction({
      coin: coinName,
      text: randomPrediction,
      accuracy: accuracy,
      timestamp: new Date().toLocaleString()
    });
  };

  const handlePredictionClick = (coinName) => {
    generatePrediction(coinName);
    setShowPrediction(true);
  };

  const closePrediction = () => {
    if (currentPrediction) {
      setPredictionHistory([
        {
          id: Date.now(),
          coin: currentPrediction.coin,
          prediction: currentPrediction.text,
          accuracy: currentPrediction.accuracy,
          timestamp: 'Just now',
          status: 'closed'
        },
        ...predictionHistory
      ]);
    }
    setShowPrediction(false);
    setCurrentPrediction(null);
  };

  const stopPrediction = () => {
    setShowPrediction(false);
    setCurrentPrediction(null);
  };

  const regeneratePrediction = () => {
    if (currentPrediction) {
      generatePrediction(currentPrediction.coin);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 px-6 py-4 flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-sm">L</span>
          </div>
          <span className="text-white font-semibold">Logoipsum</span>
          <div className="flex space-x-6 ml-8">
            <span className="text-gray-300">Wallet</span>
            <span className="text-gray-300">Invoice</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-700 border border-gray-600 rounded-md pl-10 pr-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center space-x-2">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm text-white">Hi {currentUser?.name || 'User'}</span>
            <button
              onClick={handleLogout}
              className="text-gray-400 hover:text-white text-sm ml-2"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Main Content */}
        <div className="flex-1 p-6" style={{ flex: '1 1 70%' }}>
          {/* Wallet Demography */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-semibold text-white">Wallet Demography</h2>
                <p className="text-gray-400 text-sm">Last Payment Sent 4 days ago</p>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                New Wallet
              </button>
            </div>

            {/* Crypto Cards */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              {cryptoData.map((crypto, index) => (
                <div key={index} className={`${crypto.bgColor} rounded-lg p-4 relative hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 bg-opacity-20 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-black font-bold text-sm">{crypto.icon}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">{crypto.name}</p>
                    <p className="text-white text-2xl font-bold mt-2">${crypto.price.toLocaleString()}</p>
                    <p className="text-white text-xs opacity-75 mt-1">
                      {crypto.change > 0 ? '+' : ''}{crypto.change}% • 24h
                    </p>
                  </div>
                  <button
                    onClick={() => handlePredictionClick(crypto.name)}
                    className={`absolute top-3 right-3 ${crypto.bgColor.replace(/-\d+$/, '-200')} text-black px-3 py-1 rounded text-xs font-medium transition-all shadow-lg`}
                  >
                    Prediction
                  </button>
                </div>
              ))}
            </div>

            {/* Trading Section */}
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex space-x-6">
                  <button 
                    onClick={() => setActiveTab('market')}
                    className={`font-medium pb-2 border-b-2 transition-all duration-300 hover:text-white ${
                      activeTab === 'market' 
                        ? 'text-white border-blue-500'
                        : 'text-gray-400 border-transparent hover:border-gray-500'
                    }`}
                  >
                    Market
                  </button>
                  <button 
                    onClick={() => setActiveTab('traders')}
                    className={`font-medium pb-2 border-b-2 transition-all duration-300 hover:text-white ${
                      activeTab === 'traders' 
                        ? 'text-white border-blue-500'
                        : 'text-gray-400 border-transparent hover:border-gray-500'
                    }`}
                  >
                    Traders
                  </button>
                </div>
                <div className="flex items-center space-x-4">
                  <select className="bg-gray-700 border border-gray-600 rounded text-white text-sm px-3 py-1">
                    <option>Last 30 days</option>
                  </select>
                  <select className="bg-gray-700 border border-gray-600 rounded text-white text-sm px-3 py-1">
                    <option>Buy</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                {activeTab === 'market' ? (
                  tradingData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-gray-700 last:border-b-0 hover:bg-gray-700 hover:bg-opacity-30 rounded-lg px-2 transition-all duration-200">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-white font-medium">BUY</span>
                        </div>
                        <div className={`flex items-center space-x-1 ${item.color}`}>
                          <TrendingUp className="w-4 h-4" />
                          <TrendingUp className="w-4 h-4" />
                          <TrendingUp className="w-4 h-4" />
                        </div>
                        <span className="text-white font-medium">{item.name}</span>
                        <span className="text-gray-400 text-sm">USD</span>
                      </div>
                      
                      <div className="flex items-center space-x-6">
                        <div className="text-right">
                          <p className="text-white font-semibold">${item.price}</p>
                          <p className="text-green-400 text-sm">{item.change}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-gray-400 text-sm">Accuracy</p>
                          <p className="text-white font-semibold">{item.accuracy}%</p>
                        </div>
                        <div className="w-32">
                          <div className="flex items-center space-x-2">
                            <div className="flex-1 bg-gray-700 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full ${item.accuracy > 70 ? 'bg-green-500' : item.accuracy > 40 ? 'bg-yellow-500' : 'bg-red-500'}`}
                                style={{ width: `${item.accuracy}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        <MoreHorizontal className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white transition-colors" />
                      </div>
                    </div>
                  ))
                ) : (
                  <TradersTabContent />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 bg-gray-800 p-6 border-l border-gray-700" style={{ flex: '0 0 30%' }}>
          {/* Prediction News */}
          <div className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <Square className="w-4 h-4 text-blue-500 fill-blue-500" />
              <h3 className="text-lg font-semibold text-white">Prediction News</h3>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <h4 className="text-md font-semibold text-white mb-2">Bitcoin Set to Surge Past $100K by Mid-2025</h4>
              <p className="text-gray-400 text-sm">
                Experts predict that by mid-2025, Bitcoin will soar past $100,000, driven by increased institutional adoption and a surge in decentralized finance (DeFi) usage.
              </p>
            </div>
          </div>

          {/* System Info */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-4">System Info</h3>
            <div className="space-y-3">
              <p className="text-gray-400 text-sm">System collects real-time device details for performance monitoring and troubleshooting</p>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-white">GPUs Mining</span>
                </div>
                <span className="text-gray-400">Germany</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-white">CPUs Mining</span>
                </div>
                <span className="text-gray-400">Germany</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                  <span className="text-white">Today Mining</span>
                </div>
                <span className="text-gray-400">$28.6</span>
              </div>
            </div>
          </div>

          {/* Prediction History */}
          <div>
            <h3 className="text-white font-semibold mb-4">Prediction History</h3>
            <div className="space-y-3">
              {predictionHistory.map((prediction) => (
                <div key={prediction.id} className="bg-gray-900 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{prediction.coin}</span>
                    <span className={`px-2 py-1 rounded text-xs ${
                      prediction.status === 'active' 
                        ? 'bg-green-500 bg-opacity-20' 
                        : 'bg-gray-500 bg-opacity-20 hover:bg-green-500'
                    }`}>
                      {prediction.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs mb-2">{prediction.prediction}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-400 text-xs">Accuracy: {prediction.accuracy}%</span>
                    <span className="text-gray-500 text-xs">{prediction.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Prediction Modal */}
      {showPrediction && currentPrediction && (
        <PredictionModal 
          currentPrediction={currentPrediction}
          onClose={closePrediction}
          onStop={stopPrediction}
          onRegenerate={regeneratePrediction}
        />
      )}
    </div>
  );
};

export default CryptoDashboard;