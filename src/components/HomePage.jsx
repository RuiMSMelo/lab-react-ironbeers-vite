import React from 'react'
import { Link, Router } from 'react-router-dom'

function HomePage() {
  return (
    <div className="App" >
      <Router>
        <Link to="/beers">All Beers</Link>
        {/* <Link to="/">Random Beer</Link>
        <Link to="/">Create New Beer</Link>  */}
      </Router>
    </div>
  )
}

export default HomePage