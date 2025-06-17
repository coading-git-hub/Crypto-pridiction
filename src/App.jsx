import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import CryptoDashboard from './components/dashboard/CryptoDashboard';
import TradersTabContent from './components/TradersTabContent';
import { AuthProvider, useAuth } from './context/AuthContext';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import LayoutHeader from './components/LayoutHeader';
import Sidebar from './components/LayoutSidebar';
import TryItPage from './components/TryItPage';
import Footer from './components/Footer';

const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  return currentUser ? children : <Navigate to="/login" />;
};

const Placeholder = ({ title }) => (
  <div className="min-h-screen bg-gray-950 flex flex-col">
    <LayoutHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-8 md:ml-64 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">{title}</h1>
        <p className="text-gray-300 text-lg">This page is coming soon!</p>
      </main>
    </div>
  </div>
);

const AppRoutes = () => {
  const { currentUser } = useAuth();

  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginForm />}
      />
      <Route
        path="/register"
        element={<RegisterForm />}
      />
      <Route
        path="/"
        element={currentUser ? <LandingPage /> : <Navigate to="/login" />}
      />
      <Route
        path="/about"
        element={currentUser ? <AboutPage /> : <Navigate to="/login" />}
      />
      <Route
        path="/dashboard"
        element={currentUser ? <CryptoDashboard /> : <Navigate to="/login" />}
      />
      <Route
        path="/try"
        element={currentUser ? <TryItPage /> : <Navigate to="/login" />}
      />
      <Route
        path="/prediction-history"
        element={currentUser ? <Placeholder title="Prediction History" /> : <Navigate to="/login" />}
      />
      <Route
        path="/trading"
        element={currentUser ? <Placeholder title="Trading" /> : <Navigate to="/login" />}
      />
      <Route
        path="*"
        element={<Navigate to={currentUser ? "/" : "/login"} />}
      />
    </Routes>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <AppRoutes />
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
