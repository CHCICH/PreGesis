import React from 'react'
import { useEffect,useState } from 'react';
import { MathJaxContext, MathJax } from 'better-react-mathjax';
import GraphicalProblemEngine from './GraphicalProblemEngine';
import ThreeDSurfaceGraph from './ThreeDSurfaceGraph';


const config = {
  loader: { load: ["input/tex", "output/chtml"] }
};


const Problem = ({color_mode,screenSize,title,problem,difficulty,author,course}) => {  
    let [style_mode ,setStyle_mode] = useState({mode1:{},mode2:{},mode3:{}});
    useEffect(()=>{
        if(color_mode == "light"){
            setStyle_mode({
                mode1: {},
                mode2: {backgroundColor:"black",color:"white"},
                mode3: {}
            });
        }else{
            setStyle_mode({mode1:{backgroundColor:"black",color:"white"},mode2:{backgroundColor:"white",color:"black"},mode3:{color:"white"}});
        }
    },[color_mode]) 
    let [active_session,set_active_session] = useState({id:1,favorite:false,picture:0 , title:"Rigorous Exam Prep", session_type:"Recom Session", capacity:"3/10", course:"Math 201"});
        
return (
    <div className="Landing_body" style={{backgroundColor:style_mode.mode1.backgroundColor,color:style_mode.mode1.color, display:"flex",alignItems:"center",width:"80vw","flexWrap":"wrap"}}>
        <div style={{width: "100%", marginBottom: "20px"}}>
            <h2 style={{...style_mode.mode3, marginBottom: "10px"}}>{title}</h2>
            <div style={{
                display: "inline-block",
                padding: "5px 10px",
                borderRadius: "5px",
                backgroundColor: difficulty > 7 ? "red" : difficulty < 3 ? "green" : "orange",
                color: "white",
                fontWeight: "bold"
            }}>
                Difficulty: {difficulty}/10
            </div>
            <div style={{
                display: "inline-block",
                padding: "5px 10px",
                borderRadius: "5px",
                backgroundColor: "#1e3a8a",
                color: "white",
                fontWeight: "bold",
                marginLeft: "10px"
            }}>
                {author}
            </div>
            <div style={{
                display: "inline-block",
                padding: "5px 10px",
                borderRadius: "5px",
                backgroundColor: style_mode.mode2.backgroundColor,
                color: style_mode.mode2.color,
                fontWeight: "bold",
                marginLeft: "10px"
            }}>
                {course}
            </div>  
        </div>
        <GraphicalProblemEngine color_mode={color_mode} screenSize={screenSize} formatted_text_object={[
            {type:"blank_text",content:"this problem is a little bit tricky and needs deep visualisation don't underestimate it it also requires some complex equations. Set up but do not integrate the iterated triple integral bounded by"},
            {type:"equation",content:"\\frac{y^{2}}{0.1}"},
             {type:"equation",content:"+\\frac{x^{2}}{0.2}=3,"},
             {type:"equation",content:"z= x^2+ y^2"},
             {type:"blank_text", content:"and"},
             {type:"equation",content:"y = x^2 +"},
            {type:"equation",content:"z^2  \\ \\ dV(x,y,z) "},
            {type:"blank_text",content:"should be in the form"},
             {type:"equation", content:"dV(x,y,z) = dxdA(y,z)"},
             {type:"blank_text",content:"or"},
             {type:"equation",content:"dV(x,y,z) = dydA(x,z)"}
        
        ]}></GraphicalProblemEngine> 
        <ThreeDSurfaceGraph/>    
    </div>
)
}


export default Problem