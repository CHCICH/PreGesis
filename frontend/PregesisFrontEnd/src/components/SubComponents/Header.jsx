import React, { useEffect, useState } from 'react'

const Header = ({color_mode,screenSize}) => {
    let [style_mode ,setStyle_mode] = useState({mode1:{},mode2:{},mode3:{}});
    

    useEffect(()=>{
        if(color_mode == "light"){
            setStyle_mode({mode1:{},mode2:{},mode3:{}});
        }else{
            setStyle_mode({mode1:{backgroundColor:"black",color:"white"},mode2:{backgroundColor:"white",color:"#1E1E1E"},mode3:{color:"white"}});
        }
    },[color_mode])
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='header' style={style_mode.mode1}>
            <h1 className='Logo_title'>Pregesis</h1>
            {
                screenSize < 832 ? 
                <div>
                    {/* Hamburger Icon */}
                    <div
                        style={{
                            position: 'absolute',
                            top: 24,
                            right: 24,
                            zIndex: 1100,
                            cursor: 'pointer',
                            width: 32,
                            height: 32,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 6,
                        }}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <div style={{
                            width: 28,
                            height: 4,
                            background: color_mode === "light" ? "#1E1E1E" : "#fff",
                            borderRadius: 2,
                            transition: '0.3s',
                            transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none'
                        }} />
                        <div style={{
                            width: 28,
                            height: 4,
                            background: color_mode === "light" ? "#1E1E1E" : "#fff",
                            borderRadius: 2,
                            opacity: menuOpen ? 0 : 1,
                            transition: '0.3s'
                        }} />
                        <div style={{
                            width: 28,
                            height: 4,
                            background: color_mode === "light" ? "#1E1E1E" : "#fff",
                            borderRadius: 2,
                            transition: '0.3s',
                            transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none'
                        }} />
                    </div>
                    {/* Side Menu */}
                    <div
                        style={{
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            height: '100vh',
                            width: '220px',
                            background: color_mode === "light" ? "#fff" : "black",
                            color: color_mode === "light" ? "#1E1E1E" : "#fff",
                            boxShadow: '2px 0 8px rgba(0,0,0,0.1)',
                            zIndex: 1000,
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '32px 16px',
                            borderLeft: color_mode === "light" ? "#1E1E1E solid 1px" : "white solid 1px",
                            transition: "transform 0.4s cubic-bezier(.4,0,.2,1)",
                            transform: menuOpen ? "translateX(0)" : "translateX(100%)",
                            pointerEvents: menuOpen ? "auto" : "none"
                        }}
                    >
                        <h2 style={{marginBottom: '32px'}}>Pregesis</h2>
                        <p className='header_router_link' style={{marginBottom: '16px', ...style_mode.mode3}}>Community</p>
                        <p className='header_router_link' style={{marginBottom: '16px', ...style_mode.mode3}}>Recommended</p>
                        <p className='header_router_link' style={{marginBottom: '16px', ...style_mode.mode3}}>Generator</p>
                        <p className='header_router_link' style={{marginBottom: '32px', ...style_mode.mode3}}>Dashboard</p>
                        <div className='Sign_in_register_buttons' style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
                            <button className='white_button sign_in_button' style={{...style_mode.mode1}}>Sign In</button>
                            <button className='black_button register_button' style={{...style_mode.mode2}}>Log In</button>
                        </div>
                    </div>
                </div> :
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
            }
        </div>
    )
}

export default Header