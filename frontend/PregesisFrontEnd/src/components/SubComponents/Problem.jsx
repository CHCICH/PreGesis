import React from 'react'
import { useEffect,useState } from 'react';
import { MathJaxContext, MathJax } from 'better-react-mathjax';


const config = {
  loader: { load: ["input/tex", "output/chtml"] }
};


const Problem = ({color_mode,screenSize,title,problem}) => {  
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
    let [active_session,set_active_session] = useState({id:1,favorite:false,picture:0 , title:"Rigorous Exam Prep", session_type:"Recom Session", capacity:"3/10", course:"Math 201"});
        
  return (
    <div className="Landing_body" style={{display:"flex",alignItems:"center",flexDirection:"column",width:"80vw"}}>
         <MathJaxContext config={config}>
      <MathJax>{`\\(${problem}\\)`}</MathJax>
        </MathJaxContext>
    </div>
  )
}

export default Problem