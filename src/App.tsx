
import './App.css'
import Products from './Products/Products'
import Header from './Header/Header'
import Navbar from './navbar/Navbar'
import Home from './Home/Home'
import { useState } from 'react'


function App() {
  const [local,setLocal]=useState("ar");

  return <>
   {/* <Home/> */}
  
   <Header local={local}  setLocal={setLocal} />
    <Products local={local} />
  </>
}

export default App
