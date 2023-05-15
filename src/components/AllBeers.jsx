import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Navbar from './Navbar'
import axios from 'axios'

function AllBeers() {
  const [beers, setBeers] = useState([])

  const getBeers = async () => {
    try {
      const response = await axios.get('https://ih-beers-api2.herokuapp.com/beer')
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  getBeers()

  return (
    <div>
        <Navbar />
        <p>AllBeers</p>
    </div>
  )
}

export default AllBeers