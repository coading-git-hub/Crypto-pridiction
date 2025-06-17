import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import CryptoDashboard from './components/dashboard/CryptoDashboard';
import TradersTabContent from './components/TradersTabContent';
import { AuthProvider , useAuth } from './context/AuthContext';


const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();

  console.log('PrivateRoute - currentUser:', currentUser);
  console.log('PrivateRoute - loading:', loading);

  if (loading) {
    return <div>Loading...</div>;
  }

  return currentUser ? <Layout>{children}</Layout> : <Navigate to="/login" />;
};

const App = () => {
  const { currentUser } = useAuth();

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={currentUser ? <Navigate to="/" /> : <LoginForm />} />
          <Route path="/register" element={currentUser ? <Navigate to="/" /> : <RegisterForm />} />
          <Route path="/" element={currentUser ? <CryptoDashboard /> : <Navigate to="/login" />} />
          <Route path="/traders" element={<PrivateRoute><TradersTabContent /></PrivateRoute>} />
          <Route path="*" element={<Navigate to={currentUser ? "/" : "/login"} />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;