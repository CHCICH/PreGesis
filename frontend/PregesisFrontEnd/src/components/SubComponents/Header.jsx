import React from 'react'

const Header = ({mode}) => {
    return (
        <div className='header'>
            <h1 className='Logo_title'>Pregesis</h1>
            <div className='Left_header-Div'>
                <p className='header_router_link'>Community</p>
                <p className='header_router_link'>Recommended</p>
                <p className='header_router_link'>Generator</p>
                <p className='header_router_link'>Dashboard</p>
                <div className='Sign_in_register_buttons'>
                    <button className=' white_button sign_in_button'>Sign In</button>
                    <button className=' black_button register_button'>Log In</button>
                </div>
            </div>
        </div>
    )
}

export default Header