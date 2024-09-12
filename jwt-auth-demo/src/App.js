import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { useEffect } from 'react';
import { setAuthToken, getToken } from './services/authService';

function App() {
  const [authenticated, setAuthenticated] = useState(!!localStorage.getItem('token'));

  useEffect(() => {
    setAuthToken(getToken());
  }, [authenticated]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setAuthenticated={setAuthenticated} />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard setAuthenticated={setAuthenticated} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
