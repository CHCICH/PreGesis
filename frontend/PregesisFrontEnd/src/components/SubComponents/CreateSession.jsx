import React from 'react'
import { useState,useEffect } from 'react';

const CreateSession = ({color_mode,screenSize}) => {
    let [style_mode ,setStyle_mode] = useState({mode1:{},mode2:{},mode3:{}});
    useEffect(()=>{
        if(color_mode == "light"){
            setStyle_mode({
                mode1: {backgroundColor:"black",color:"white"},
                mode2: {},
                mode3: {}
            });
        }else{
            setStyle_mode({mode1:{backgroundColor:"white",color:"black"},mode2:{backgroundColor:"white",color:"#1E1E1E"},mode3:{color:"white"}});
        }
    },[color_mode]);
    let [options, set_options ]= useState([{img:"assets-astronaut-7.webp" ,clicked:true}, {img:"assets-astronaut-3.webp" ,clicked:false}, {img:"assets-astronaut-5.webp" ,clicked:false } ,{img:"assets-astronaut-4.webp" ,clicked:false}]);

    return (
        <>
        <p className='main_title_landing_page' style={{fontSize:"xx-large",marginLeft:"10vw"}} >Create Session</p>

        
        <div style={{
            display:"flex",
            justifyContent:"center",
        }}>
            <div style={{
            marginTop:"5vw",
            // display: 'flex',
            width:screenSize < 900 ?"80vw" :"60vw",
            height: screenSize < 900 ? "230vw" : "35vw",
            marginBottom:"5vh"
            ,borderRadius:"10px",
            transition:" all 1s"
            }} >
                <button style={{
                    ...style_mode.mode1,
                    marginLeft:0,
                    marginBottom:"2vw",
                    height:screenSize <900 ? "": "2.5vw",
                    width: screenSize<900 ? "50vw": "15vw",
                    borderRadius: "20px",
                    border: "none",
                    fontSize: "16px",
                    cursor: "pointer",
                    margin: "20px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.38)',

                    gap: "8px"
                }}>
                    <span style={{ fontSize: "23px" }}>+</span>
                    Create New Session
                </button>
                <div style={{
                    display: 'flex',
                    backgroundColor: '#f5f5f5',
                    width:screenSize < 900 ?"80vw" :"60vw",
                    height: "82.5%",
                    borderRadius:"20px",
                    transition:" all 1s",
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',

                    }} >
                        <div style={{
                            display: 'flex',
                            width: '100%',
                            height: '100%',
                            gap: '30px',
                            margin: '10px',
                            flexDirection: screenSize < 900 ? "column":"row",

                        }}>
                            <div style={{
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '25px',
                                padding: '25px',
                                margin: '10px',
                                borderRadius: '10px'
                            }}>
                                <div>
                                    <label style={{ color:"black", display: 'block', marginBottom: '8px', fontSize: '20px' }}>Title</label>
                                    <input 
                                        type="text" 
                                        placeholder="Enter session title"
                                        style={{
                                            width: '95%',
                                            padding: '10px',
                                            borderRadius: '8px',
                                            border: '1px solid #ccc',
                                            fontSize: '18px',
                                            margin: '5px 0',

                                        }}
                                    />
                                </div>
                                
                                <div style={{ margin: '10px 0' }}>
                                    <label style={{ color:"black", display: 'block', marginBottom: '8px', fontSize: '18px' }}>Type</label>
                                    <select style={{
                                        width: '100%',
                                        padding: '10px',
                                        borderRadius: '8px',
                                        border: '1px solid #ccc',
                                        fontSize: '18px',
                                        margin: '5px 0'
                                    }}>
                                        <option value="">Select type</option>
                                        <option value="lecture">Recommended</option>
                                        <option value="workshop">Community</option>
                                        <option value="seminar">Moderator</option>
                                        <option value="lab">Generation</option>
                                    </select>
                                </div>
                                
                                <div style={{ margin: '10px 0' }}>
                                    <label style={{ color:"black", display: 'block', marginBottom: '8px',  fontSize: '18px' }}>Course</label>
                                    <select style={{
                                        width: '100%',
                                        padding: '10px',
                                        borderRadius: '8px',
                                        border: '1px solid #ccc',
                                        fontSize: '18px',
                                        margin: '5px 0'
                                    }}>
                                        <option value="">Select course</option>
                                        <option value="math">MATH 201</option>
                                        <option value="science">EECE 230</option>
                                        
                                    </select>
                                </div>
                            </div>
                            
                            <div style={{
                                flex: 1,
                                backgroundColor: '#f5f5f5',
                                borderRadius: '15px',
                                padding: '25px',
                                margin: '10px',
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gridTemplateRows: '1fr 1fr',
                                gap: '15px'
                            }}>
                                {options.map((option, index) => (
                                    <div key={index} style={{
                                        backgroundColor: '#ddd',
                                        borderRadius: '10px',
                                        aspectRatio: '1',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        overflow: 'hidden',
                                        position: 'relative'
                                    }}>
                                        <img 
                                            src={option.img} 
                                            alt={`Picture ${index + 1}`} 
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                borderRadius: '10px',
                                                cursor:"pointer",
                                                filter:option.clicked ?"" : "invert(0.3)"
                                            }}

                                            onClick={()=>{
                                                let temp = options.map(items =>{
                                                    items.clicked = false;
                                                    if(items.img == option.img){
                                                        items.clicked = true;
                                                    }
                                                    return items;
                                                });
                                                set_options(temp);
                                            }}
                                        />
                                        
                                    </div>
                                ))}
                            </div>
                        </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default CreateSession