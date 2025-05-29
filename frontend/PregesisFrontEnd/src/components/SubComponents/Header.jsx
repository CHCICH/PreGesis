import React, { useEffect, useState } from 'react'

const Header = ({color_mode}) => {
    let [style_mode ,setStyle_mode] = useState({mode1:{},mode2:{},mode3:{}});
    useEffect(()=>{
        if(color_mode == "light"){
            setStyle_mode({mode1:{},mode2:{},mode3:{}});
        }else{
            setStyle_mode({mode1:{backgroundColor:"black",color:"white"},mode2:{backgroundColor:"white",color:"#1E1E1E"},mode3:{color:"white"}});
        }
    },[color_mode])
    return (
        <div className='header' style={style_mode.mode1}>
            <h1 className='Logo_title'  >Pregesis</h1>
            <div className='Left_header-Div'>
                <p className='header_router_link' style={style_mode.mode3}>Community</p>
                <p className='header_router_link' style={style_mode.mode3}>Recommended</p>
                <p className='header_router_link' style={style_mode.mode3}>Generator</p>
                <p className='header_router_link' style={style_mode.mode3}>Dashboard</p>
                <div className='Sign_in_register_buttons'>
                    <button className=' white_button sign_in_button' style={style_mode.mode1}>Sign In</button>
                    <button className=' black_button register_button' style={style_mode.mode2}>Log In</button>
                </div>
            </div>
        </div>
    )
}

export default Header