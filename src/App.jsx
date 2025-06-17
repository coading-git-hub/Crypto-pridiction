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
        element={currentUser ? <Navigate to="/" /> : <LoginForm />}
      />
      <Route
        path="/register"
        element={currentUser ? <Navigate to="/" /> : <RegisterForm />}
      />
      <Route
        path="/"
        element={<LandingPage />}
      />
      <Route
        path="/about"
        element={<AboutPage />}
      />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <CryptoDashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/try"
        element={<TryItPage />}
      />
      <Route
        path="/prediction-history"
        element={
          <PrivateRoute>
            <Placeholder title="Prediction History" />
          </PrivateRoute>
        }
      />
      <Route
        path="/trading"
        element={
          <PrivateRoute>
            <Placeholder title="Trading" />
          </PrivateRoute>
        }
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
