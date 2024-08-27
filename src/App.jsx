import { useState } from 'react'

import './App.css'
import CoinTable from './Components/CoinTable/CoinTable'
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <NavBar/>
    <Banner/>
     <CoinTable/>
      
    </>
  )
}

export default App
