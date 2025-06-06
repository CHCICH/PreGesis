import React from 'react'
import { useEffect,useState } from 'react'
import Equation from './Equation';
const GraphicalProblemEngine = ({color_mode,screenSize,formatted_text_object}) => {
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
        <div style={{backgroundColor:style_mode.mode1.backgroundColor,color:style_mode.mode1.color,width:"80vw",display:"flex",alignItems:"center",flexWrap:"wrap",transition:"1s all",overflowY:"scroll",overflowX:"none"}}>
            {
                formatted_text_object.map(item =>{
                    if(item.type == "blank_text"){
                        return(<p style={{fontSize:"18px" ,marginRight:"1vw",marginBottom:0 }}>{item.content}</p>)
                    }else if(item.type == "equation"){
                        return(
                            <div style={{position: "relative", display: "inline-block"}}>
                                <Equation color_mode={color_mode} screenSize={screenSize} equation={item.content}></Equation>
                                <div style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: "transparent",
                                    pointerEvents: "all",
                                    cursor: "",
                                }}></div>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default GraphicalProblemEngine