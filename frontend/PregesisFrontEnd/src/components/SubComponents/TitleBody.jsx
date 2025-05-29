import React, { useEffect } from 'react'
import TreedAstronaut from './TreedAstronaut';
import { useState } from 'react';


const TitleBody = ({color_mode}) => {
  
  let [style_mode,set_color_mode] = useState({mode1:{}});
  useEffect(()=>{
    if(color_mode == "light"){
      set_color_mode({mode1:{color:"grey"}});
    }else{
      set_color_mode({mode1:{color:"#b9b9b9"}});
    }
  },[color_mode])
  return (
    <div>
        <div className='main_page_subheader'>
            <p className='main_title_landing_page'>Pregesis</p>
            <p style={{"color":`${style_mode.mode1.color}`, "fontSize":"large", "marginLeft":"0.5vw","marginTop":"5vh"}}>Welcome to Pregesis – AI-Driven Exam Practice, Reimagined</p>
        </div>
        <TreedAstronaut></TreedAstronaut>
        

    </div>
  )
}

export default TitleBody


