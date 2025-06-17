import React, { useState } from 'react';
import { User, TrendingUp, Award, Activity } from 'lucide-react';

const TradersTabContent = () => {
  // Sample traders data
  const [tradersData] = useState([
    {
      initial: 'A',
      name: 'Alex Johnson',
      trades: 127,
      profit: 45230,
      success: 87,
      status: 'online'
    },
    {
      initial: 'M',
      name: 'Maria Garcia',
      trades: 89,
      profit: 32100,
      success: 82,
      status: 'online'
    },
    {
      initial: 'D',
      name: 'David Chen',
      trades: 156,
      profit: 67890,
      success: 91,
      status: 'away'
    },
    {
      initial: 'S',
      name: 'Sarah Williams',
      trades: 203,
      profit: 78450,
      success: 89,
      status: 'online'
    },
    {
      initial: 'R',
      name: 'Robert Taylor',
      trades: 74,
      profit: 28900,
      success: 79,
      status: 'offline'
    },
    {
      initial: 'L',
      name: 'Lisa Anderson',
      trades: 165,
      profit: 54320,
      success: 85,
      status: 'online'
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'away': return 'bg-yellow-500';
      case 'offline': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getProfitColor = (profit) => {
    return profit > 0 ? 'text-green-400' : 'text-red-400';
  };

  const getSuccessRateColor = (rate) => {
    if (rate >= 85) return 'text-green-400';
    if (rate >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="space-y-4">
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-blue-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
          <User className="w-8 h-8 text-blue-400" />
        </div>
        <h3 className="text-white font-semibold mb-2">Active Traders</h3>
        <p className="text-gray-400 text-sm mb-6">View and manage active trading accounts</p>
        
        {/* Summary Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4">
            <div className="flex items-center justify-center mb-2">
              <Activity className="w-5 h-5 text-blue-400" />
            </div>
            <p className="text-white font-semibold text-lg">{tradersData.length}</p>
            <p className="text-gray-400 text-sm">Total Traders</p>
          </div>
          <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <p className="text-white font-semibold text-lg">
              ${tradersData.reduce((sum, trader) => sum + trader.profit, 0).toLocaleString()}
            </p>
            <p className="text-gray-400 text-sm">Total Profit</p>
          </div>
          <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4">
            <div className="flex items-center justify-center mb-2">
              <Award className="w-5 h-5 text-yellow-400" />
            </div>
            <p className="text-white font-semibold text-lg">
              {Math.round(tradersData.reduce((sum, trader) => sum + trader.success, 0) / tradersData.length)}%
            </p>
            <p className="text-gray-400 text-sm">Avg Success</p>
          </div>
        </div>

        {/* Traders List */}
        <div className="space-y-4">
          {tradersData.map((trader, index) => (
            <div 
              key={index} 
              className="flex items-center justify-between py-3 border-b border-gray-700 last:border-b-0 hover:bg-gray-700 hover:bg-opacity-30 rounded-lg px-2 transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-semibold text-lg">
                    {trader.initial}
                  </div>
                  <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-gray-800 ${getStatusColor(trader.status)}`}></div>
                </div>
                <div>
                  <p className="text-white font-medium">{trader.name}</p>
                  <p className="text-gray-400 text-sm">{trader.trades} trades</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-semibold ${getProfitColor(trader.profit)}`}>
                  +${trader.profit.toLocaleString()}
                </p>
                <p className={`text-sm ${getSuccessRateColor(trader.success)}`}>
                  {trader.success}% success
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Load More Button */}
        <div className="mt-6">
          <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200">
            Load More Traders
          </button>
        </div>
      </div>
    </div>
  );
};

export default TradersTabContent;