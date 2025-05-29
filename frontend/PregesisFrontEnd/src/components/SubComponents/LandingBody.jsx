import React from 'react'
import TitleBody from './TitleBody'
import About from './About'
import MeetTheTeam from './MeetTheTeam'
import WhyPregesis from './WhyPregesis'
import { useState, useEffect } from 'react';


const LandingBody = ({color_mode,screenSize}) => {
  let [style_mode ,setStyle_mode] = useState({mode1:{},mode2:{},mode3:{}});
          useEffect(()=>{
              if(color_mode == "light"){
                  setStyle_mode({mode1:{},mode2:{},mode3:{}});
              }else{
                  setStyle_mode({mode1:{backgroundColor:"black",color:"white"},mode2:{backgroundColor:"white",color:"#1E1E1E"},mode3:{color:"white"}});
              }
          },[color_mode]) 
  return (
    <div className="Landing_body" style={style_mode.mode1}>
      <TitleBody screenSize={screenSize} color_mode={color_mode}></TitleBody>
      <div className="speration_line_landing_page" style={style_mode.mode2}></div>
      <About color_mode={color_mode} screenSize={screenSize} ></About>
      <div className="speration_line_landing_page" style={style_mode.mode2} ></div>
      <MeetTheTeam screenSize={screenSize} color_mode={color_mode}></MeetTheTeam>
      <div className="speration_line_landing_page" style={style_mode.mode2}></div>
      <WhyPregesis color_mode={color_mode}></WhyPregesis>
    </div>
  )
}

export default LandingBody