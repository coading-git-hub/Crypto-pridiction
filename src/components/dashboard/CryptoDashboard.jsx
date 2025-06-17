import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, Search, MoreHorizontal, X, Square, RotateCcw, Eye, EyeOff, User } from 'lucide-react';
import PredictionModal from './PredictionModal';
import TradersTabContent from '../TradersTabContent';
import LayoutHeader from '../LayoutHeader';
import Sidebar from '../LayoutSidebar';

const dummyNews = {
  title: 'Bitcoin Set to Surge Past $100K by Mid-2025',
  text: 'Experts predict that by mid-2025, Bitcoin will soar past $100,000, driven by increased institutional adoption and a surge in decentralized finance (DeFi) usage.'
};
const dummySystemInfo = [
  { label: 'GPUs Mining', value: 'Germany', status: 'active' },
  { label: 'CPUs Mining', value: 'Germany', status: 'active' },
  { label: 'Today Mining', value: '$28.6', status: 'active' }
];

const CryptoDashboard = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [showPrediction, setShowPrediction] = useState(false);
  const [currentPrediction, setCurrentPrediction] = useState(null);
  const [activeTab, setActiveTab] = useState('market');
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
    { name: 'BTC', price: '22,256.19', change: '+2%', accuracy: 98, color: 'text-green-400' },
    { name: 'TRX', price: '22,256.19', change: '+2%', accuracy: 35, color: 'text-red-400' },
    { name: 'DOGE', price: '22,256.19', change: '+2%', accuracy: 58, color: 'text-yellow-400' },
    { name: 'XRP', price: '22,256.19', change: '+2%', accuracy: 76, color: 'text-green-400' }
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
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <LayoutHeader onSidebarOpen={() => setSidebarOpen(true)} />
      <div className="flex flex-col md:flex-row flex-1 gap-0 md:gap-6 w-full max-w-6xl mx-auto px-2 sm:px-4 md:px-8">
        {/* Main Content */}
        <div className="w-full md:w-[70%] flex flex-col">
          {/* Wallet Demography */}
          <div className="mb-10 md:mb-12">
            <div className="flex flex-col items-center space-y-4 mb-10">
              <h2 className="text-3xl font-extrabold text-white">Wallet Demography</h2>
              <p className="text-3xl font-extrabold text-yellow-300">Last Payment Sent 4 days ago</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-3xl font-extrabold shadow-lg">New Wallet</button>
            </div>
            {/* Crypto Cards */}
            <div className="w-full overflow-x-auto">
              <div className="grid grid-flow-col auto-cols-[minmax(220px,1fr)] gap-4 mb-6">
                {cryptoData.map((crypto, index) => (
                  <div key={index} className={`bg-gradient-to-br ${
                    crypto.name === 'Bitcoin' ? 'from-yellow-400 to-yellow-500 border-yellow-300' :
                    crypto.name === 'Ethereum' ? 'from-blue-400 to-blue-500 border-blue-300' :
                    crypto.name === 'Litecoin' ? 'from-blue-300 to-blue-400 border-blue-200' :
                    'from-green-400 to-green-500 border-green-300'
                  } rounded-2xl shadow-2xl p-4 min-w-[220px] flex flex-col justify-between relative hover:scale-105 hover:brightness-110 transition-all duration-300 cursor-pointer border-2`}>
                    <div className="flex items-center mb-4">
                      <span className="w-12 h-12 bg-white bg-opacity-30 rounded-full flex items-center justify-center text-2xl font-extrabold shadow-lg text-black">{crypto.icon}</span>
                    </div>
                    <div className="text-left">
                      <p className="font-extrabold text-xl text-black drop-shadow">{crypto.name}</p>
                      <p className="text-xl font-extrabold text-white mt-2 drop-shadow">${crypto.price.toLocaleString()}</p>
                      <p className="text-base font-semibold text-black opacity-80 mt-1">{crypto.change > 0 ? '+' : ''}{crypto.change}% • 24h</p>
                    </div>
                    <button
                      onClick={() => handlePredictionClick(crypto.name)}
                      className="absolute top-4 right-4 bg-white bg-opacity-80 text-yellow-700 px-6 py-2 rounded-2xl font-extrabold shadow hover:bg-yellow-200 transition"
                    >
                      Prediction
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Market/Traders Section */}
          <div className="bg-[#181A20] rounded-2xl shadow border border-gray-700 p-0 mb-8 overflow-x-auto">
            <div className="flex items-center justify-between px-6 pt-6 pb-2">
              <div className="flex space-x-8">
                <button
                  onClick={() => setActiveTab('market')}
                  className={`text-lg font-extrabold pb-2 border-b-2 transition-all duration-300 ${activeTab === 'market' ? 'text-yellow-400 border-yellow-400' : 'text-gray-400 border-transparent hover:border-gray-500'}`}
                >
                  Market
                </button>
                <button
                  onClick={() => setActiveTab('traders')}
                  className={`text-lg font-extrabold pb-2 border-b-2 transition-all duration-300 ${activeTab === 'traders' ? 'text-yellow-400 border-yellow-400' : 'text-gray-400 border-transparent hover:border-gray-500'}`}
                >
                  Traders
                </button>
              </div>
            </div>
            {/* Market/Traders Content */}
            <div className="divide-y divide-gray-800">
              {activeTab === 'market' ? (
                tradingData.map((item, index) => (
                  <div key={index} className="flex flex-col md:flex-row items-center px-6 py-4 hover:bg-[#23262F] transition rounded-xl md:rounded-none border-b border-gray-800 last:border-b-0">
                    {/* Coin */}
                    <div className="w-full md:w-1/4 flex items-center gap-3 mb-2 md:mb-0">
                      <span className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-lg font-extrabold text-yellow-400 shadow">{item.name.charAt(0)}</span>
                      <div className="flex flex-col">
                        <span className="font-bold text-white text-base">{item.name}</span>
                        <span className="text-xs text-gray-400">{item.price}</span>
                      </div>
                    </div>
                    {/* Amount */}
                    <div className="w-full md:w-1/5 text-center text-white font-bold text-base mb-2 md:mb-0">{item.change}</div>
                    {/* Coin Price / Cost Price */}
                    <div className="w-full md:w-1/5 text-center text-white font-bold text-base mb-2 md:mb-0">{item.price}</div>
                    {/* 24H Change */}
                    <div className={`w-full md:w-1/5 text-center font-bold text-base mb-2 md:mb-0 ${item.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>{item.change}</div>
                    {/* Trade */}
                    <div className="w-full md:w-1/10 flex justify-end">
                      <a href="#" className="text-yellow-400 font-bold hover:underline text-base">Trade</a>
                    </div>
                  </div>
                ))
              ) : (
                <div className="px-4 py-6"><TradersTabContent /></div>
              )}
            </div>
          </div>
        </div>
        {/* Sidebar */}
        <div className="w-full md:w-[30%] flex flex-col gap-4 mt-4 md:mt-0 md:pl-0">
          {/* Prediction News */}
          <div className="bg-gray-800 rounded-lg p-4 mb-2">
            <h3 className="text-2xl font-bold text-blue-400 mb-2">Prediction News</h3>
            <div className="bg-gray-900 rounded-lg p-3">
              <h4 className="text-2xl font-semibold text-white mb-1">{dummyNews.title}</h4>
              <p className="text-lg text-gray-300">{dummyNews.text}</p>
            </div>
          </div>
          {/* System Info */}
          <div className="bg-gray-800 rounded-lg p-4 mb-2">
            <h3 className="text-2xl font-bold text-blue-400 mb-2">System Info</h3>
            <div className="text-lg text-gray-300 space-y-2">
              {dummySystemInfo.map((info, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${info.status === 'active' ? 'bg-green-400' : 'bg-gray-500'}`}></span>
                  <span>{info.label}</span>
                  <span className="ml-auto text-xs text-gray-400">{info.value}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Prediction History */}
          <div className="bg-gray-800 rounded-lg p-4">
            <h3 className="text-2xl font-bold text-blue-400 mb-2">Prediction History</h3>
            <div className="space-y-2">
              {predictionHistory.map((item) => (
                <div key={item.id} className="bg-gray-900 rounded-lg p-3 flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-semibold text-white">{item.coin}</span>
                    <span className={`ml-auto px-4 py-2 rounded-lg text-base font-bold ${item.status === 'active' ? 'bg-green-600 text-white' : 'bg-gray-700 text-gray-300'}`}>{item.status}</span>
                  </div>
                  <span className="text-lg text-gray-300">{item.prediction}</span>
                  <span className="text-lg text-blue-400 font-semibold">Accuracy: {item.accuracy}%</span>
                  <span className="text-lg text-gray-500">{item.timestamp}</span>
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