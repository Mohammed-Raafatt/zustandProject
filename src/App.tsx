
import './App.css'
import Products from './Products/Products'
import Header from './Header/Header'

import { useState } from 'react'
import Cart from './Components/Cart/Cart'




function App() {
  const [local,setLocal]=useState("ar");

  return <>
   {/* <Home/> */}
  
   <Header local={local}  setLocal={setLocal} />
    <Products local={local} />
    <Cart/>
  </>
}

export default App
