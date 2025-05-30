import React from 'react'
import { useEffect,useState } from 'react';
import DualThumbSlider from './DualThumbSlider';

const LowerFilter = ({color_mode,screenSize}) => {
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
    let [tags,set_tags] = useState(['Math201-G','Math201-R','EECE230-C'])
    return (
        <div style={{display:"flex"}} >
            <div className="filter_box" style={{width: screenSize < 900 ? "70vw": "16vw",height:  screenSize < 900 ? "90vw": "25vw",flexDirection:"column"}}> 
                <p>Course Filter</p>
                <div style={{height:"9vh", display:"flex",flexWrap:"wrap"}}>
                    {
                        tags.map(item => {
                            return(<div style={{marginRight:screenSize < 900 ? "5vh":"",display:"flex", justifyContent:"space-between",alignItems:"center",backgroundColor: "#f0f0f0", padding: "4px 8px", margin: "2px", borderRadius: "4px",height:"3vh",width:screenSize<900 ? "18vw" :"6vw",fontSize:"small", border: "none"}}>
                                {item} <button style={{border: "none",borderRadius:"5px"}}>X</button></div>)
                        })
                    }
                </div>
                
                <div style={{marginTop:"1vh"}}>
                    <label style={{...style_mode.mode3, display: "flex", alignItems: "center", margin: "5px 0"}}>
                        <input 
                            type="checkbox" 
                            style={{
                                marginRight: "8px",
                                width: "18px",
                                height: "18px",
                                accentColor: "black"
                            }} 
                        />
                        Owned
                    </label>
                    <label style={{...style_mode.mode3, display: "flex", alignItems: "center", margin: "5px 0"}}>
                        <input 
                            type="checkbox" 
                            style={{
                                marginRight: "8px",
                                width: "18px",
                                height: "18px",
                                accentColor: "black"
                            }} 
                        />
                        Shared
                    </label>
                    <label style={{...style_mode.mode3, display: "flex", alignItems: "center", margin: "5px 0"}}>
                        <input 
                            type="checkbox" 
                            style={{
                                marginRight: "8px",
                                width: "18px",
                                height: "18px",
                                accentColor: "black"
                            }} 
                        />
                        Random
                    </label>
                </div>
                
                <div style={{margin: "20px 0", position: "relative"}}>
                   <DualThumbSlider/>
                                
                    <button style={{backgroundColor:"black", padding: "8px 16px", margin: "10px 0", border: "1px solid #ccc", borderRadius: "4px",color:"white", marginTop:"5vh"}}>
                        Filter
                    </button>
                </div>
                                
            </div>
            <div className="filter_box" style={{
                width:"65vw",
                height:"10vw",
                backgroundColor:"gray"
            }}>
               
            </div>

        </div>
    )
}

export default LowerFilter