import React from 'react'

const Footer = ({mode}) => {

    return (
        <div className='footer'>
            <div style={{
                marginLeft:"4vw",
                marginTop:"3vh"
            }}>
                <a href="" target="_blank" rel="noopener noreferrer">
                    <img src="/XLogo.png" alt="" style={{ width: 25, height: 25, margin: '0 8px' }} />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                    <img src="/Logo Instagram.png" alt="" style={{ width: 25, height: 25, margin: '0 8px' }} />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                    <img src="/Logo-YouTube.png" alt="" style={{ width: 25, height: 25, margin: '0 8px' }} />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                    <img src="/LinkedIn.png" alt="" style={{ width: 25, height: 25, margin: '0 8px' }} />
                </a>
            </div>
            <div style={{
                marginLeft:"9vw",
                marginTop:"1vh",
                display:"flex",
                flexDirection:"column"
        
            }}>
                <h3>Use Cases</h3>
                <p style={{marginTop: "0.3rem"}}>Generating Exams</p>
                <p style={{marginTop: "0.3rem"}}>Studying on new material</p>
                <p style={{marginTop: "0.3rem"}}>Online Community</p>
                <p style={{marginTop: "0.3rem"}}>Team collaboration</p>
            </div>
             <div style={{
                marginLeft:"9vw",
                marginTop:"1vh",
                display:"flex",
                flexDirection:"column"
        
            }}>
                <h3>Explore</h3>
                <p style={{marginTop: "0.3rem"}}>Math 201</p>
                <p style={{marginTop: "0.3rem"}}>EECE 230 (under construction)</p>
            </div>
        </div>
    )
}

export default Footer