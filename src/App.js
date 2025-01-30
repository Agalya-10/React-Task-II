import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Signin from './Components/Signin';
import Signup from './Components/Signup';



function App() {
  return (
  <BrowserRouter>
  <Routes>
  <Route path='/login' element={<Login/>}/>
  <Route path='/signin' element={<Signin/>}/>
  <Route path='/signup' element={<Signup/>}/>

  

  </Routes>
  </BrowserRouter>
  );
}

export default App;

