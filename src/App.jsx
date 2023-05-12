import { useState } from 'react'

import './App.css'
import Header from './Header'
import Footer from './Footer'
import Homepage from './Homepage'

function App() {
  //create variable
  const name = "remoremote"

  return (
    <>
      <Header />
      <Homepage />
      <p>Hello {name}</p>
      <Footer />
    </>
  )
}

export default App
