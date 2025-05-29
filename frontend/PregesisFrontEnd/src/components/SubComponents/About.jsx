import React, { useState,useEffect } from 'react'


const About = ({color_mode,screenSize}) => {
    let [arrowClasses_1, setArrowClasses_1] = useState(''); 
    let [arrowClasses_2, setArrowClasses_2] = useState(''); 
    let [style_mode,set_color_mode] = useState({mode1:{},mode2:{},mode3:{}});
      useEffect(()=>{
        if(color_mode == "light"){
          set_color_mode({mode1:{color:"#5a5959"},mode2:{color:"black_button"},mode3:{"transition": "ease 1s"}});
        }else{
          set_color_mode({mode1:{color:"#b9b9b9"},mode2:{color:"white_button"},mode3:{filter: "invert(1)","transition": "ease 1s"}});
        }
      },[color_mode]);
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
                        color:`${style_mode.mode1.color}`
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
                    }}  className={style_mode.mode2.color} style={{
                        width:`${screenSize > 900 ? "10vw":"35vw" }`,
                        height:"5vh",
                        fontSize:"large",
                        
                    }}>Database</button>
                    <img src="/Icon.png" style={style_mode.mode3} className={arrowClasses_1}></img>
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
                        color:`${style_mode.mode1.color}`
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
                    }}  className={style_mode.mode2.color}style={{
                        
                        width:`${screenSize > 900 ? "15vw":"45vw" }`,
                        height:"5vh",
                        fontSize:"large"
                    }}>Real Time Session</button>
                    <img src="/Icon.png" style={style_mode.mode3} className={arrowClasses_2}></img>
                    </div>
                
                
                </div>
            </div>

        </div>
    )
}

export default About