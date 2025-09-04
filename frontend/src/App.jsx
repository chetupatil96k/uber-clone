import React from 'react';
import { Route, Routes } from 'react-router-dom';

import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import Captainlogin from './pages/Captainlogin';
import Captainsignup from './pages/Captainsignup';
import Start from './pages/Start';
import Home from './pages/Home';
import { UserDataContext } from './context/UserContext';
import UserProtectedWrapper from './pages/UserProtectedWrapper';
import UserLogout from './pages/UserLogout';
import CaptainHome from './pages/CaptainHome';   // ✅ Import added
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<UserSignup />} />
        <Route path='/captain-login' element={<Captainlogin />} />
        <Route path='/captain-signup' element={<Captainsignup />} />
        <Route path='/home' element={<UserProtectedWrapper><Home /></UserProtectedWrapper>} />

        <Route 
          path='/user/logout' 
          element={
            <UserProtectedWrapper>
              <UserLogout />
            </UserProtectedWrapper>
          } 
        />

        <Route path='/captain-home' 
        element={<CaptainProtectWrapper><CaptainHome /></CaptainProtectWrapper>} />  {/* ✅ Now works */}
      </Routes>
    </div>
  );
}

export default App;
