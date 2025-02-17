import { useState } from 'react'
import Navbar from './components/Navbar'
import Body from './components/Body'
import { useFetchAPI } from './utils/FetchAPI'

function App() {
  return(
    <>
      <Navbar />
      <Body />
      <useFetchAPI />
    </>
  )
}

export default App
