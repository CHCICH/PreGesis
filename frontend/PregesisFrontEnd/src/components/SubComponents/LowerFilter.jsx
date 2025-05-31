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
        },[color_mode]);
    let [tags,set_tags] = useState(['Math201-G','Math201-R','EECE230-C']);
    let [active_sessions ,set_active_sessions ] = useState([ {id:0,favorite:false, picture:3 , title:"Math 201 Practice Session", session_type:"Gen Session", capacity:"3/10", course:"Math 201" },
        { id:1,favorite:false,picture:0 , title:"Rigorous Exam Prep", session_type:"Recom Session", capacity:"3/10", course:"Math 201" } ,
        { id:2,favorite:false,picture:1 , title:"EECE 230 Leetcode session", session_type:"Com Session", capacity:"9/10", course:"EECE 230" } ,
        { id:3,favorite:false,picture:2 , title:"My community Posts", session_type:"Com Session", capacity:"11/50", course:"Math 201" } 
     ])
    return (
        <div style={{display:"flex",flexDirection:screenSize < 900 ? "column" : "row"}} >
            <div className="filter_box" style={{width: screenSize < 900 ? "70vw": "16vw",height:  screenSize < 900 ? "90vw": "25vw",flexDirection:"column"}}> 
                <p>Course Filter</p>
                <div style={{height:"9vh", display:"flex",flexWrap:"wrap"}}>
                    {
                        tags.map(item => {
                            return(<div key={item} style={{marginRight:screenSize < 900 ? "5vh":"",display:"flex", justifyContent:"space-between",alignItems:"center",backgroundColor: "#f0f0f0", padding: "4px 8px", margin: "2px", borderRadius: "4px",height:"3vh",width:screenSize<900 ? "18vw" :"6vw",fontSize:"small", border: "none"}}>
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
                width:screenSize < 900 ? "70vw" :"60vw",
                height:screenSize<900 ? "200vw" :"40vw",
                backgroundColor:"alice-blue",
                // border:"none"
                marginLeft:screenSize < 900 ? "" : "7vw",
                overflowY:"scroll",
                display:"flex",
                flexWrap:"wrap",
                paddingTop:screenSize < 900 ? "" : "5vh"
            }}>
               {
                active_sessions.map(item =>{
                    return(<Session_Box key={item.id} active_sessions={active_sessions} set_active_sessions={set_active_sessions} color_mode={color_mode} screenSize={screenSize} item={item} ></Session_Box>)
                })
               }
            </div>

        </div>
    )
}

const Session_Box = ({color_mode,screenSize,item,set_active_sessions,active_sessions}) =>{
    let [favorite,set_favorite] = useState(item.favorite);
    const options = ["assets-astronaut-7.webp","assets-astronaut-3.webp", "assets-astronaut-5.webp"  ,"assets-astronaut-4.webp"]
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
    },[color_mode]);
    return(
        <div className='box_session' style={{width:screenSize < 900 ? "60vw" : "26vw", height:"40vh", position: "relative"}}>
        <div style={{
            transition:"1s all",
            width: "100%",
            height: "65%",
            backgroundImage: `url(${options[item.picture]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius:"10px",
        }}>
            <div style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                display: "flex",
                gap: "8px",
                flexDirection: "column"
            }}>
                <button style={{
                    width: "35px",
                    height: "35px",
                    borderRadius: "50%",
                    border: "none",
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                }}>
                    <img src="edit.png"></img>
                </button>
                <button style={{
                    width: "35px",
                    height: "35px",
                    borderRadius: "50%",
                    border: "none",
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                }}>
                    <img src="delete.png"></img>
                </button>
                <button className="white_button" style={{
                    width: "35px",
                    height: "35px",
                    borderRadius: "50%",
                    border: "none",
                    backgroundColor:item.favorite ? "black" :"",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",

                }}>
            
                    <img src="favorite.png" style={{border:"none",filter: item.favorite ? "invert(1)":""}} onClick={()=>{
                        let temp = active_sessions.map(session =>{
                            if(session.id == item.id){
                                session.favorite = !session.favorite; 
                            }
                            return session;
                        })
                        set_active_sessions(temp);
                    }}></img>
                </button>
            </div>
            <div style={{
                position: "absolute",
                bottom: "10px",
                left: "10px",
                right: "10px",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                padding: "10px",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
            }}>
                <h3 style={{ margin: "0 0 5px 0", fontSize: "16px", color: "#333" }}>{item.title}</h3>
                <p style={{ margin: "0", fontSize: "12px", color: "#666" }}>
                    {item.session_type} • {item.capacity} • {item.course}
                </p>
            </div>
        </div>
        </div>
    )
}

export default LowerFilter