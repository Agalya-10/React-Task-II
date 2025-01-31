import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Profile from './Components/Profile';
import Admin from './Components/Admin';
import User from './Components/User';



function App() {
  return (
  <BrowserRouter>
  <Routes>
  <Route path='/profile' element={<Profile/>}/>
  <Route path='/signin' element={<Signin/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/admin' element={<Admin/>}/>
  <Route path='/user' element={<User/>}/>



  

  </Routes>
  </BrowserRouter>
  );
}

export default App;

