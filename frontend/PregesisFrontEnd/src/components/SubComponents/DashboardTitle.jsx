import React from 'react'
import { useState,useEffect } from 'react';
import Test from './Test';
const DashboardTitle = ({color_mode,screenSize}) => {
    let [style_mode,set_color_mode] = useState({mode1:{}});
    useEffect(()=>{
        if(color_mode == "light"){
          set_color_mode({mode1:{color:"grey"}});
        }else{
          set_color_mode({mode1:{color:"#b9b9b9"}});
        }
    },[color_mode])
return (
    <div>
        <div style={{ display: 'flex', justifyContent: screenSize < 900 ? "center": "space-between",flexDirection: screenSize < 900? "column" :"row", alignItems:"center"}}>
            <div className='main_page_subheader'>
                <p className='main_title_landing_page'>Pregesis</p>
                <p style={{ color: `${style_mode.mode1.color}`, fontSize: "large", marginLeft: "0.5vw", marginTop: "5vh" }}>
                    Welcome to Pregesis – AI-Driven Exam Practice, Reimagined
                </p>
                <div
                    style={{
                        marginTop: '2vh',
                        fontWeight: 'bold',
                        backgroundImage: 'url("/final_background.webp")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        width: screenSize < 900 ? '90vw' : '50vw',
                        height: screenSize < 900 ? '50vw' : '22vw',
                        borderRadius: "10px",
                        color: 'white',
                        // position: screenSize < 900 ? "absolute" : "",
                        marginTop: '5vh',

                    }}
                >
                    <Test screenSize={screenSize} />
                </div>
            </div>
            <img
                src="/assets-astronaut-6.webp"
                alt=""
                style={{
                    width: screenSize < 900 ? '70vw' : '30vw',
                    height: screenSize < 900 ? '70vw' : '30vw',
                    marginTop: '5vh',
                    marginRight: "8vw"
                }}
            />
        </div>
    </div>
)
}










export default DashboardTitle