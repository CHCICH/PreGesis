import React from 'react'
import { useState, useEffect } from 'react';


const Footer = ({color_mode}) => {
    let [style_mode ,setStyle_mode] = useState({mode1:{},mode2:{},mode3:{}});
        useEffect(()=>{
            if(color_mode == "light"){
                setStyle_mode({mode1:{},mode2:{},mode3:{},mode4:{"transition": "ease 1s",width: 25, height: 25, margin: '0 8px'}});
            }else{
                setStyle_mode({mode1:{backgroundColor:"black",color:"white"},mode2:{backgroundColor:"white",color:"#1E1E1E"},mode3:{color:"white"},mode4:{filter: "invert(1)","transition": "ease 1s",width: 25, height: 25, margin: '0 8px'}});
            }
        },[color_mode])
    return (
        <div className='footer' style={style_mode.mode1}>
            <div
                className="footer-icons"
                style={{
                    marginLeft: "4vw",
                    marginTop: "3vh"
                }}
            >
                <a href="" target="_blank" rel="noopener noreferrer">
                    <img src="/XLogo.png" alt="" className="footer-icon-img" style={style_mode.mode4} />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                    <img src="/Logo Instagram.png" alt="" className="footer-icon-img" style={style_mode.mode4} />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                    <img src="/Logo-YouTube.png" alt="" className="footer-icon-img" style={style_mode.mode4} />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                    <img src="/LinkedIn.png" alt="" className="footer-icon-img" style={style_mode.mode4} />
                </a>
            </div>
            <div style={{
                marginLeft: "9vw",
                marginTop: "1vh",
                display: "flex",
                flexDirection: "column"

            }}>
                <h3>Use Cases</h3>
                <p style={{ marginTop: "0.3rem" }}>Generating Exams</p>
                <p style={{ marginTop: "0.3rem" }}>Studying on new material</p>
                <p style={{ marginTop: "0.3rem" }}>Online Community</p>
                <p style={{ marginTop: "0.3rem" }}>Team collaboration</p>
            </div>
            <div style={{
                marginLeft: "9vw",
                marginTop: "1vh",
                display: "flex",
                flexDirection: "column"

            }}>
                <h3>Explore</h3>
                <p style={{ marginTop: "0.3rem" }}>Math 201</p>
                <p style={{ marginTop: "0.3rem" }}>EECE 230 (under construction)</p>
            </div>
        </div>
    )
}

export default Footer