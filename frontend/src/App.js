import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage'
import MenuPage from './components/pages/MenuPage/MenuPage'
import Cart from './components/containers/Cart/Cart'

const App = () => {
  return (
    <div>
      <Router>
          <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/home' element={<HomePage/>}/>
              <Route path='/menu' element={<MenuPage/>}/>
              <Route path='/cart' element={<Cart/>}/>
          </Routes>
      </Router>
    </div>
  )
}

export default App
