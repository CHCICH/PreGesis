import React, { useState } from 'react'


const About = () => {
    let [arrowClasses_1, setArrowClasses_1] = useState(''); 
    let [arrowClasses_2, setArrowClasses_2] = useState(''); 

    return (
        <div className='About_landing_page'>
            <div className='top_about_landing_page'>
                <div style={{
                    marginLeft: "8vw"
                }}>
                    <p className='main_title_landing_page'>About</p>
                    <p style={{
                        marginTop: "8vh",
                        width:"40vw",
                        fontSize:"x-large",
                        color:"#5a5959"
                        , lineHeight: "1.5"
                    }}>
                        At the core of Pregesis is a powerful machine learning engine trained on course-specific material 
                        to generate high-quality, exam-style questions. We've used this technology to build a large, curated 
                        database of filtered problems that closely reflect the format and difficulty of real exams.
                    </p>
                    <div style={{
                        display:"flex",
                        alignItems:"center",
                        marginTop:"10vh",

                    }}>

                    <button onMouseLeave={()=>{
                        setArrowClasses_1('');
                    }} onMouseOver={()=>{
                        if(arrowClasses_2 == ""){
                            setArrowClasses_1('animate_arrow_landing');
                        }
                    }}  className='black_button' style={{
                        width:"10vw",
                        height:"5vh",
                        fontSize:"large"
                    }}>Database</button>
                    <img src="/Icon.png" style={{"transition": "ease 1s"}} className={arrowClasses_1}></img>
                    </div>
                </div>
                <img src="/assets-astronaut-4.webp" className='image_about_landing' alt="" />
            </div>
            <div className='top_about_landing_page'>
                <img src="/assets-astronaut-3.webp" className='image_about_landing_2' alt="" />
                <div style={{
                    marginRight: "8vw"
                }}>
                    
                    <p style={{
                        marginTop: "10vh",
                        width:"40vw",
                        fontSize:"x-large",
                        color:"#5a5959"
                        , lineHeight: "1.5"
                    }}>
                        In addition, Pregesis offers a real-time AI generation 
                        system that produces fresh, relevant practice questions on demand — so you're never short
                        on material to study, no matter when you start.
                    </p>
                     <div style={{
                        display:"flex",
                        alignItems:"center",
                        marginTop:"10vh",
                    }}>

                    <button onMouseLeave={()=>{
                        setArrowClasses_2('');
                    }} onMouseOver={()=>{
                        if(arrowClasses_2 == ""){
                            setArrowClasses_2('animate_arrow_landing');
                        }
                    }}  className='black_button' style={{
                        
                        width:"15vw",
                        height:"5vh",
                        fontSize:"large"
                    }}>Real Time Session</button>
                    <img src="/Icon.png" style={{"transition": "ease 1s"}} className={arrowClasses_2}></img>
                    </div>
                
                
                </div>
            </div>

        </div>
    )
}

export default About