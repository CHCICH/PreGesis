import React from 'react'
import { useState,useEffect } from 'react';
import { MathJaxContext, MathJax } from 'better-react-mathjax';


const config = {
  loader: { load: ["input/tex", "output/chtml"] }
};


const Testing = ({color_mode,screenSize}) => {
    let [edit_on, set_edit_on] = useState(false);
    let [edit_enable, set_edit_enable] = useState(true);
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
     <div className="Landing_body" >

         
        {/* <MathJaxContext config={config}>
      <MathJax>{`\\(${"t"}\\)`}</MathJax>
        </MathJaxContext> */}
    </div>
  )
}

export default Testing

