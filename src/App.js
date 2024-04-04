import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './Components/LoginPage';
import PricingPage from './Components/PricingPage';
import PlanPage from './Components/PlanPage';

function App() {
  const [userData, setUserData] = useState(null);

  const handleLogin = (user) => {
    setUserData(user);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<LoginPage handleLogin={handleLogin} />}
          />
          <Route
            exact
            path="/plan"
            element={<PlanPage userData={userData} />}
          />
          <Route
            path="/pricing"
            element={<PricingPage userData={userData} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
