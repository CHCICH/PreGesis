import { useEffect, useState } from 'react'
import './App.css'
import Landing from './components/Landing'

function App() {
  const [count, setCount] = useState(0)
  let [color_mode, set_color_mode] =  useState("dark"); 
  useEffect(()=>{
    if(color_mode == "light"){
      document.getElementById('root').style.backgroundColor = "white";
    }else{
      document.getElementById('root').style.backgroundColor = "black";
    }
  },[color_mode]) 
  return (
    <>
      <Landing color_mode={color_mode}></Landing>
    </>
  )
}

export default App
