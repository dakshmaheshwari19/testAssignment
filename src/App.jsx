import { useState } from 'react'
import "@fontsource/inter";

import './App.css'
import { Header } from './components/Header'
import { MainContainer } from './pages/MainContainer'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
      <Header/>
      <MainContainer/>
      <Footer/>
    </>
  )
}

export default App
