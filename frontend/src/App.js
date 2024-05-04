import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage'
import MenuPage from './components/pages/MenuPage/MenuPage'
import Cart from './components/containers/Cart/Cart'
import BurgersPage from './components/pages/Burgers/Burgers'
import BiriyaniPage from './components/pages/Biriyani/Biriyani'
import BeveragesPage from './components/pages/Beverages/Beverages'
import WrapsPage from './components/pages/Wraps/Wraps'
import DessertsPage from './components/pages/Desserts/Desserts'
import MainsUploads from './components/Forms/Mains/MainsUpload';

const App = () => {
  return (
    <div>
      <Router>
          <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/home' element={<HomePage/>}/>
              <Route path='/menu' element={<MenuPage/>}/>
              <Route path='/about' element={<Cart/>}/>
              <Route path='/promotions' element={<MenuPage/>}/>
              <Route path='/menu/mains' element={<MenuPage/>}/>
              <Route path='/menu/burgers' element={<BurgersPage/>}/>
              <Route path='/menu/biriyanis' element={<BiriyaniPage/>}/>
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
