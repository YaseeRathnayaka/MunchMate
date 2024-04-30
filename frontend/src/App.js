import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage'
import MenuPage from './components/pages/MenuPage/MenuPage'
import Cart from './components/containers/Cart/Cart'
import BurgersPage from './components/pages/Cards/Burgers/Burgers'
import BiriyaniPage from './components/pages/Cards/Biriyani/Biriyani'
import BeveragesPage from './components/pages/Cards/Beverages/Beverages'
import WrapsPage from './components/pages/Cards/Wraps/Wraps'
import DessertsPage from './components/pages/Cards/Desserts/Desserts'

const App = () => {
  return (
    <div>
      <Router>
          <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/home' element={<HomePage/>}/>
              <Route path='/menu' element={<MenuPage/>}/>
              <Route path='/about' element={<Cart/>}/>
              <Route path='/login' element={<Cart/>}/>
              <Route path='/promotions' element={<MenuPage/>}/>
              <Route path='/menu/mains' element={<MenuPage/>}/>
              <Route path='/menu/burgers' element={<BurgersPage/>}/>
              <Route path='/menu/biriyani' element={<BiriyaniPage/>}/>
              <Route path='/menu/beverages' element={<BeveragesPage/>}/>
              <Route path='/menu/desserts' element={<DessertsPage/>}/>
              <Route path='/menu/wraps' element={<WrapsPage/>}/>
              
          </Routes>
      </Router>
    </div>
  )
}

export default App
