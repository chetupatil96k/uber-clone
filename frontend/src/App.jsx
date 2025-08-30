import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import Captainlogin from './pages/Captainlogin';
import Captainsignup from './pages/Captainsignup';
import Home from './pages/Home';  // 👈 Import Home component
import { UserDataContext } from './context/UserContext';

function App() {

  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<UserSignup />} />
        <Route path='/captain-login' element={<Captainlogin />} />
        <Route path='/captain-signup' element={<Captainsignup />} />
      </Routes>
    </div>
  );
}

export default App;

