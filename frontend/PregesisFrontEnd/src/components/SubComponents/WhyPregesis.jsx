import React, { useState } from 'react'

const WhyPregesis = () => {
    let [arrowClasses_1,setArrowClasses_1] = useState('');
    let [arrowClasses_2,setArrowClasses_2] = useState('');

  return (
   <div className='About_landing_page' style={{
                    marginLeft: "8vw",
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"flex-start",
                    width:"100vw"
                }}>
        <p className='main_title_landing_page' >Why Pregesis?</p>
        <div style={{
            display:'flex',
            justifyContent:"space-between",
            marginTop:"5vh",
            width:"110vw"
                        
        }}>
            <p style={{
                        marginTop: "10vh",
                        width:"50vw",
                        fontSize:"x-large",
                        color:"#5a5959"
                        , lineHeight: "1.5"
                    }}>
                The transition from high school to university—especially in fields like engineering—can be overwhelming. 
                Students often move from solving structured, straightforward problems to tackling abstract concepts that 
                demand deep understanding, visualization, and practice.


            </p>
           <div style={{
                        display:"flex",
                        alignItems:"center",
                        marginTop:"10vh",
                        marginRight: "20vw",
                        width:"20vw"
                    }}>

                    <button onMouseLeave={()=>{
                        setArrowClasses_1('');
                    }} onMouseOver={()=>{
                        if(arrowClasses_1 == ""){
                            setArrowClasses_1('animate_arrow_landing');
                        }
                    }}  className='black_button' style={{
                        width:"10vw",
                        height:"5vh",
                        fontSize:"large"
                    }}>Community</button>
                    <img src="/Icon.png" style={{"transition": "ease 1s"}} className={arrowClasses_1}></img>
                </div>
        </div>

        <div className="top_about_landing_page'" style={{
            display:'flex',
            justifyContent:"space-between",
            marginTop:"15vh",
            width:"110vw"
                        
        }}>
                <img src="/assets-astronaut-5.webp" className='image_about_landing_2' style={{marginLeft:0 }}  alt="" />
                <div style={{
                    marginRight: "28vw"
                }}>
                    
                    <p style={{
                        marginTop: "10vh",
                        width:"40vw",
                        fontSize:"x-large",
                        color:"#5a5959"
                        , lineHeight: "1.5"
                    }}>
                        Yet despite this shift, the available learning resources often fall short. Many course materials lack high-quality,
                         exam-style problems, and the gap between lecture examples and actual exams can be significant. This leaves students underprepared,
                          frustrated, and unsure of how to study effectively.
                        As students who have excelled in challenging courses without external assistance, we recognized this gap firsthand. We built Pregesis to change that.
                    </p>
                     
                
                
            </div>
        </div>
        <div className="final_landing_page_paragraph_div">
            <p className='final_landing_page_paragraph'>
                Pregesis uses AI to generate exam-level problems that reflect not just the format, but the depth and complexity of real assessments. 
                Drawing on our understanding of both the subject matter and the common pain points in studying, we created a platform that doesn't just 
                throw problems at students—it helps them think, visualize, and master concepts that are often missed in robotic, rote preparation.
                Whether you're tackling advanced math, logic-heavy programming, or anything in between, Pregesis is here to make your learning smarter, more focused, 
                and actually aligned with what you’ll face in exams.
            </p>

        </div>
        <div>

            <img src="/assest-astronaut.webp" className='image_about_landing_3' style={{marginLeft:0 }}  alt="" />

        </div>
        
    </div>
  )
}

export default WhyPregesis