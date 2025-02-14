import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Profile from './Components/Profile';
import Admin from './Components/Admin';
import User from './Components/User';
import Landing from './Components/Landing';
import Signin from './Components/Signin';
import Signup from './Components/Signup';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/profile' element={<Profile />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/user' element={<User />} />
        <Route path='/landingpage' element={<Landing />} />
      </Routes>
    </Router>
  );
};

export default App;
