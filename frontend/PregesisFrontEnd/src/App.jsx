import { useEffect, useState } from 'react'
import './App.css'
import Landing from './components/Landing'

function App() {
  const [count, setCount] = useState(0)
  let [color_mode, set_color_mode] =  useState("light"); 
  useEffect(()=>{
    if(color_mode == "light"){
      document.getElementById('root').style.backgroundColor = "white";
      document.body.style.backgroundColor = "white";

    }else{
      document.getElementById('root').style.backgroundColor = "black";
      document.body.style.backgroundColor = "black";

    }
  },[color_mode]) 
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  
      useEffect(() => {
          const handleResize = () => setScreenSize(window.innerWidth);
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
      });
  return (
    <>
      <Landing color_mode={color_mode} screenSize={screenSize}></Landing>
    </>
  )
}

export default App
