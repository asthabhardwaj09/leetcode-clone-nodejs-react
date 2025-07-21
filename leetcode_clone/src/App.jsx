import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Prenium from './components/Prenium/prenium'
import Header from './components/Header/header'
import Explore from './components/Explore/explore'
import Product from './components/Product/product'
import Developer from './components/Developer/developer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Prenium></Prenium>
        <Header></Header>
        <Explore></Explore>
        <Product></Product>
        <Developer></Developer>
    </>


  )
}

export default App
