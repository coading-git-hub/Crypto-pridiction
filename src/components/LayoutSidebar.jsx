import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ open, setOpen }) => {
  const location = useLocation();
  return (
    <aside
      aria-label="Sidebar"
      className={`bg-gray-900 border-r border-gray-800 p-4 w-64 min-h-screen flex flex-col fixed z-30 top-0 left-0 transition-transform duration-300
        ${open ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:static md:w-64 md:block
      `}
      style={{ maxWidth: '16rem' }}
    >
      {/* Mobile close button */}
      <button
        aria-label={open ? 'Close sidebar' : 'Open sidebar'}
        className="md:hidden mb-4 text-yellow-400 text-2xl self-end focus:outline-none"
        onClick={() => setOpen(false)}
        style={{ display: open ? 'block' : 'none' }}
      >
        ✕
      </button>
      <nav className="flex flex-col space-y-4 mt-8 md:mt-0">
        <Link to="/dashboard" className={`px-3 py-2 rounded font-medium transition ${location.pathname === '/dashboard' ? 'bg-yellow-400 text-black' : 'text-gray-200 hover:bg-gray-800'}`}>Dashboard</Link>
        <Link to="/prediction-history" className={`px-3 py-2 rounded font-medium transition ${location.pathname === '/prediction-history' ? 'bg-yellow-400 text-black' : 'text-gray-200 hover:bg-gray-800'}`}>Prediction History</Link>
        <Link to="/trading" className={`px-3 py-2 rounded font-medium transition ${location.pathname === '/trading' ? 'bg-yellow-400 text-black' : 'text-gray-200 hover:bg-gray-800'}`}>Trading</Link>
      </nav>
    </aside>
  );
};

export default Sidebar; 