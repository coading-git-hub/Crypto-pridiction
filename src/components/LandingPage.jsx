import React, { useState } from 'react';
import LayoutHeader from './LayoutHeader';
import Sidebar from './LayoutSidebar';
import { Link } from 'react-router-dom';

const coins = [
  { name: 'BTC', price: '$104,107.35', change: -3.68 },
  { name: 'ETH', price: '$2,478.28', change: -6.14 },
  { name: 'BNB', price: '$644.42', change: -1.91 },
  { name: 'XRP', price: '$2.17', change: -6.73 },
  { name: 'SOL', price: '$147.03', change: -6.66 },
  { name: 'ADA', price: '$0.45', change: 2.12 },
  { name: 'DOGE', price: '$0.12', change: 1.23 },
  { name: 'MATIC', price: '$0.89', change: -0.45 },
];

const banners = [
  { text: 'Join the CryptoDash Trading League!', color: 'bg-yellow-400', img: '🚀' },
  { text: 'Get Real-Time AI Predictions!', color: 'bg-blue-500', img: '🤖' },
  { text: 'Secure & Private Crypto Portfolio', color: 'bg-green-500', img: '🔒' },
];

const faqs = [
  {
    q: 'What is CryptoDash?',
    a: 'CryptoDash is a modern crypto dashboard for tracking, predicting, and managing your digital assets with real-time analytics and AI-powered insights.'
  },
  {
    q: 'How do I use AI predictions?',
    a: 'Simply log in, select a coin, and click the Prediction button to get instant AI-powered market insights.'
  },
  {
    q: 'Is my data secure?',
    a: 'Yes, your data is protected with industry-leading security protocols and encryption.'
  },
  {
    q: 'Can I use CryptoDash on mobile?',
    a: 'Absolutely! CryptoDash is fully responsive and you can also use our mobile app for iOS and Android.'
  },
  {
    q: 'How do I create a new wallet?',
    a: 'After logging in, click the "New Wallet" button in the Wallet Demography section to create and manage your wallets.'
  },
];

const LandingPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [bannerIdx, setBannerIdx] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setBannerIdx((prev) => (prev + 1) % banners.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#181A20] text-white flex flex-col">
      <LayoutHeader />
      <div className="flex flex-1">
        <Sidebar />
        <main className="w-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center">
          {/* Hero Section */}
          <section className="w-full flex flex-col md:flex-row items-center justify-between gap-12 py-16">
            {/* Left */}
            <div className="flex-1 flex flex-col items-start gap-8">
              <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400 mb-2 leading-tight">Fund Your Account<br />and Start Trading</h1>
              <p className="text-gray-300 text-2xl mb-2">Track, predict, and trade your favorite cryptocurrencies with real-time analytics and AI-powered insights.</p>
              <div className="flex items-center gap-6 mb-2">
                <span className="text-3xl font-mono font-bold">0.00005718 <span className="text-yellow-400">BTC</span></span>
                <span className="text-gray-400 text-xl">≈ $5.95</span>
              </div>
              <div className="flex gap-6">
                <button className="bg-yellow-400 text-black px-8 py-3 rounded-xl text-xl font-bold shadow-lg hover:bg-yellow-500 transition">Deposit Now</button>
                <button className="bg-gray-800 text-yellow-400 px-8 py-3 rounded-xl text-xl font-bold shadow-lg hover:bg-gray-700 transition">Watch Tutorial</button>
              </div>
            </div>
            {/* Right: Popular Coins Card */}
            <div className="flex-1 w-full bg-[#23262F] rounded-3xl shadow-2xl p-8 py-4 flex flex-col gap-4 max-w-4xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-extrabold text-yellow-400">Popular Coins</span>
                <span className="text-gray-400 text-lg">New Listing</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {coins.map((coin, i) => (
                  <div key={i} className="bg-[#181A20] rounded-2xl p-4 flex flex-col items-center shadow-lg">
                    <span className="text-4xl mb-1">{coin.name === 'BTC' ? '₿' : coin.name === 'ETH' ? 'Ξ' : coin.name === 'BNB' ? '🟡' : coin.name === 'XRP' ? '✕' : coin.name === 'SOL' ? '◎' : coin.name === 'ADA' ? '◈' : coin.name === 'DOGE' ? 'Ð' : '⬡'}</span>
                    <span className="font-extrabold text-2xl mb-1">{coin.name}</span>
                    <span className="font-bold text-2xl mb-1">{coin.price}</span>
                    <span className={coin.change < 0 ? 'text-red-400 font-bold' : 'text-green-400 font-bold'}>{coin.change}%</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Banner/Slider */}
          <section className="w-full flex justify-center py-8">
            <div className={`w-full max-w-4xl rounded-3xl shadow-2xl flex items-center gap-6 p-10 ${banners[bannerIdx].color} transition-all duration-500`}> 
              <span className="text-6xl animate-bounce-slow">{banners[bannerIdx].img}</span>
              <span className="text-3xl font-extrabold text-black drop-shadow-lg">{banners[bannerIdx].text}</span>
            </div>
          </section>

          {/* Mobile App Section */}
          <section className="w-full flex flex-col md:flex-row items-center justify-between gap-12 py-16">
            {/* Left: Attractive phone image */}
            <div className="flex-1 flex justify-center items-center">
              <img
                src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D"
                alt="CryptoDash Mobile App"
                className="w-64 h-[32rem] object-cover rounded-[2.5rem] border-4 border-yellow-400 shadow-2xl bg-gradient-to-br from-yellow-400 via-yellow-200 to-yellow-500"
              />
            </div>
            {/* Right: Download badges only */}
            <div className="flex-1 flex flex-col items-center md:items-start gap-6">
              <h2 className="text-3xl font-extrabold text-yellow-400 mb-2">Trade on the go. Anywhere, anytime.</h2>
              <div className="flex flex-col gap-4">
                <span className="text-gray-300 font-semibold text-xl">Download the CryptoDash app for iOS and Android to manage your portfolio and get real-time alerts anywhere, anytime.</span>
                <div className="flex justify-center gap-4 mt-2 w-full">
                  <span className="bg-black text-white px-5 py-2 rounded-xl text-lg font-bold shadow">iOS</span>
                  <span className="bg-black text-white px-5 py-2 rounded-xl text-lg font-bold shadow">Android</span>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="w-full max-w-4xl mx-auto py-16">
            <h2 className="text-4xl font-extrabold text-yellow-400 mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-[#23262F] rounded-2xl shadow-xl p-6">
                  <button
                    className="w-full flex items-center justify-between text-left text-2xl font-bold text-yellow-300 focus:outline-none"
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  >
                    <span>{faq.q}</span>
                    <span className={`transform transition-transform duration-300 ${activeFaq === idx ? 'rotate-90' : ''}`}>▶</span>
                  </button>
                  {activeFaq === idx && (
                    <div className="mt-4 text-gray-300 text-lg animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default LandingPage; 