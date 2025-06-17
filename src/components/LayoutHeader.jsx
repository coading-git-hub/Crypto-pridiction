import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LayoutHeader = ({ onSidebarOpen }) => {
  const { currentUser, logout } = useAuth();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <header className="bg-gray-900 border-b border-gray-800 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-yellow-400 text-3xl mr-2 focus:outline-none"
          aria-label="Open sidebar"
          onClick={() => setMobileNavOpen(true)}
        >
          ☰
        </button>
        <Link to="/" className="flex items-center gap-2 group">
          <span className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-2xl font-extrabold shadow-lg group-hover:scale-110 transition-transform">₿</span>
          <span className="text-yellow-400 font-extrabold text-2xl tracking-wide group-hover:text-yellow-300 transition">CryptoDash</span>
        </Link>
      </div>
      <nav className="flex items-center gap-6 flex-nowrap  whitespace-nowrap overflow-x-auto md:overflow-x-visible">
        <div className="relative group flex items-center">
          <Link to="/" className="text-gray-200 hover:text-yellow-400 font-medium transition">
            Home
          </Link>
          <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </div>
        <div className="relative group flex items-center">
          <Link to="/about" className="text-gray-200 hover:text-yellow-400 font-medium transition">
            About
          </Link>
          <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </div>
        <div className="relative group flex items-center">
          <Link to="/dashboard" className="text-gray-200 hover:text-yellow-400 font-medium transition">
            Dashboard
          </Link>
          <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </div>
        <div className="relative group flex items-center">
          <Link to="/try" className="bg-yellow-400 text-black px-4 py-1 rounded shadow font-semibold hover:bg-yellow-500 transition flex items-center justify-center">
            Try It
          </Link>
        </div>
        {currentUser ? (
          <div className="flex items-center gap-2 ml-2">
            <span className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-black text-lg">
              {currentUser.name ? currentUser.name[0].toUpperCase() : 'U'}
            </span>
            <span className="text-gray-300 text-base font-semibold">Hi, {currentUser.name || 'User'}</span>
            <button onClick={logout} className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-500 font-semibold ml-2">Logout</button>
          </div>
        ) : (
          <Link to="/login" className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-500 font-semibold">Login</Link>
        )}
      </nav>
      {/* Mobile Sidebar Nav */}
      {mobileNavOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden" onClick={() => setMobileNavOpen(false)}></div>
          <aside className="fixed top-0 left-0 w-64 h-full bg-gray-900 z-50 flex flex-col p-6 md:hidden transition-transform">
            <button
              className="text-2xl text-yellow-400 self-end mb-6"
              aria-label="Close sidebar"
              onClick={() => setMobileNavOpen(false)}
            >
              ✕
            </button>
            <Link to="/" className="text-yellow-400 font-extrabold text-2xl mb-6" onClick={() => setMobileNavOpen(false)}>Home</Link>
            <Link to="/about" className="text-yellow-400 font-extrabold text-2xl mb-6" onClick={() => setMobileNavOpen(false)}>About</Link>
            <Link to="/dashboard" className="text-yellow-400 font-extrabold text-2xl mb-6" onClick={() => setMobileNavOpen(false)}>Dashboard</Link>
            <Link to="/try" className="text-yellow-400 font-extrabold text-2xl mb-6" onClick={() => setMobileNavOpen(false)}>Try It</Link>
            {currentUser ? (
              <>
                <span className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-black text-lg mb-2">
                  {currentUser.name ? currentUser.name[0].toUpperCase() : 'U'}
                </span>
                <span className="text-gray-300 text-base font-semibold mb-4">Hi, {currentUser.name || 'User'}</span>
                <button onClick={() => { logout(); setMobileNavOpen(false); }} className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-500 font-semibold">Logout</button>
              </>
            ) : (
              <Link to="/login" className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-500 font-semibold">Login</Link>
            )}
          </aside>
        </>
      )}
    </header>
  );
};

export default LayoutHeader; 