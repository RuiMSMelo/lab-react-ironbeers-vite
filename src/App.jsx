import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage'
import AllBeers from './components/AllBeers'

function App() {

  return (  
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/beers' element={<AllBeers />} />
    </Routes>
  )
}

export default App
