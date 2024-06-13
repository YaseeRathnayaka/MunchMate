import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage'
import MenuPage from './components/pages/MenuPage/MenuPage'
import LoginPage from './components/Forms/Login/Login'
import BurgersPage from './components/pages/Burgers/Burgers'

import BeveragesPage from './components/pages/Beverages/Beverages'
import WrapsPage from './components/pages/Wraps/Wraps'
import DessertsPage from './components/pages/Desserts/Desserts'
import MainsUploads from './components/Forms/Mains/MainsUpload';
import About from './components/pages/About/About';
import Promotions from './components/pages/Promotions/Promotions';

const App = () => {
  return (
    <div>
      <Router>
          <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/home' element={<HomePage/>}/>
              <Route path='/login' element={<LoginPage/>}/>
              <Route path='/menu' element={<MenuPage/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/promotions' element={<Promotions/>}/>
              <Route path='/menu/mains' element={<MenuPage/>}/>
              <Route path='/menu/burgers' element={<BurgersPage/>}/>
    
              <Route path='/menu/beverages' element={<BeveragesPage/>}/>
              <Route path='/menu/desserts' element={<DessertsPage/>}/>
              <Route path='/menu/wraps' element={<WrapsPage/>}/>
              <Route path='/mainsupload' element={<MainsUploads/>}/>
              
          </Routes>
      </Router>
    </div>
  )
}

export default App
