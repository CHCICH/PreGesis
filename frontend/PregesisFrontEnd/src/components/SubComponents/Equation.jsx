import React from 'react'
import { useEffect,useState } from 'react';
import { MathJaxContext, MathJax } from 'better-react-mathjax';

const config = {
  loader: { load: ["input/tex", "output/chtml"] }
};



const Equation = ({color_mode,screenSize,equation}) => {
    let [style_mode ,setStyle_mode] = useState({mode1:{},mode2:{},mode3:{}});
    useEffect(()=>{
        if(color_mode == "light"){
            setStyle_mode({
                mode1: {},
                mode2: {},
                mode3: {}
            });
        }else{
            setStyle_mode({mode1:{backgroundColor:"black",color:"white"},mode2:{backgroundColor:"white",color:"#1E1E1E"},mode3:{color:"white"}});
        }
    },[color_mode]) 
  return (
    <div style={{"marginRight":"0.5vw",width:"",marginTop:"10px"}}>
        <MathJaxContext config={config}>
      <MathJax>{`\\(${equation}\\)`}</MathJax>
        </MathJaxContext>
    </div>
  )
}

export default Equation