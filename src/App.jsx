import React from 'react'

import './App.css'
import { FaBeer,FaFacebook } from 'react-icons/fa';

function App() {
  return (
    <>
      <div>
        <h1>Welcome to react</h1>
        <span><FaBeer className='icon'/></span>
        <span><FaFacebook className='icon'/></span>
      </div>
    </>
  )
}

export default App;
