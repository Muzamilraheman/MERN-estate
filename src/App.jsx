import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import SignOut from './pages/SignUp';
import Profile from './pages/Profile';
import Abount from './pages/Abount';
export default function App() {
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sign-in' element={<Signin/>}></Route>
      <Route path='/sign-up' element={<SignOut/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/abount' element={<Abount/>}></Route>
    </Routes>
  </BrowserRouter>
}
