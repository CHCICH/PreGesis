import React from 'react'
import { useState,useEffect } from 'react'

const Problem_Box = ({problem,color_mode,screenSize}) => {
    let [open_more, set_edit_more] = useState(true);
    return (
        <>
            <div style={{ position: 'relative'}}>
                <div style={{
                    transition:"1s all",
                    width: screenSize<900 ? "65vw" :'30vw',
                    height: screenSize<900 ?"25vh" :'10vw',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    padding: '16px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    backgroundColor:color_mode == "dark" ? "white": "#5C5C5C",
                    color:color_mode == "dark" ? "black" : "white",
                    transition:"1s all",
                    margin:"2vw",
                    
            }}>
                <div style={{display:"flex", justifyContent:"space-between",transition:"1s all"}}>
                    <p style={{ margin: '0 0 12px 0', fontSize: screenSize<900 ? "15px" :'25px',width:"20vw",overflow:"hidden", height:"8vh"}}>{problem.Title}</p>
                    <div>
                        {
                            problem.liked ? <> <img 
                            src="/Check circle.png" alt="More options" style={{ width: '30px', height: '30px',filter:color_mode == "dark" ?"invert(1)" : ""}} /></>:"" 
                        }
                        <img onClick={()=>{
                                set_edit_more(!open_more);    
                            }}  src="/More horizontal.png" alt="More options" style={{ transition:"1s all", transform:open_more && "rotate(90deg)", width: '30px', height: '30px', cursor: 'pointer' ,marginLeft:"1vw",filter:color_mode == "dark" ?"invert(1)" : ""}} />
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginTop:"3vw",
                    flexDirection:screenSize<900 ? "column":"",
                    justifyContent:screenSize <900 ? "center": "end"
                }}>
                    <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    
                }} >

                    <span style={{
                        backgroundColor: '#ffffff',
                        color: '#000000',
                        padding: '8px 16px',
                        borderRadius: '12px',
                        fontSize: '16px',
                        border: '1px solid #ccc'
                    }}>{problem.Chapter}</span>
                    <span style={{
                        backgroundColor: '#000000',
                        color: '#ffffff',
                        padding: '8px 16px',
                        borderRadius: '12px',
                        fontSize: '16px'
                    }}>{problem.Difficulity}</span>
                    {problem.AI && (
                        <span style={{
                            backgroundColor: '#808080',
                            color: '#ffffff',
                            padding: '8px 16px',
                            borderRadius: '12px',
                            fontSize: '16px'
                        }}>AI</span>
                    )}
                    </div>
                    <button style={{
                        backgroundColor: 'black',
                        color: '#ffffff',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '16px',
                        marginLeft: 'auto',
                        width:screenSize < 900 && "65vw",
                        transition:"1s all",
                        marginTop:screenSize <900 &&"3vw"
                    }}>OPEN</button>
                    {  (
                        <div style={{
                            transition:"1s all",
                            position: 'absolute',
                            top: "4rem",
                            right: screenSize < 900 ? "1rem" :"-4rem",
                            width: '5rem',
                            height: '10rem',
                            backgroundColor: color_mode == "light" ? "black" : "white",
                            color: color_mode == "dark" ? "black" : "white",
                            border: '1px solid #ccc',
                            borderRadius: '8px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow:"none",
                            opacity: open_more ? 0 : 1,
                            pointerEvents: open_more ? 'none' : 'auto',
                            gap: '1rem'
                            
                        }}>
                            <img src="/delete.png" alt="Option 1" style={{ width: '30px', height: '30px', cursor: 'pointer',filter:"invert(1)"}} onClick={() => console.log('Image 1 clicked')} />
                            <img src="/Share.png" alt="Option 2" style={{ width: '30px', height: '30px', cursor: 'pointer' ,filter:"invert(1)"}} onClick={() => console.log('Image 2 clicked')} />
                            <img src="/Git branch.png" alt="Option 3" style={{ width: '30px', height: '30px', cursor: 'pointer' ,filter:"invert(1)"}} onClick={() => console.log('Image 3 clicked')} />
                        </div>
                    )}
                </div>
                </div>
            </div>
        </>
        
    )
}

export default Problem_Box