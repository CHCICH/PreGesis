import React from 'react'
import { useState,useEffect } from 'react';
import Problem_Box from './Problem_Box';

const Session_inside = ({color_mode,screenSize,titlle,tags,background_image}) => {
    let [edit_on, set_edit_on] = useState(false);
    let [edit_enable, set_edit_enable] = useState(true);
    let [style_mode ,setStyle_mode] = useState({mode1:{},mode2:{},mode3:{}});
    const options = ["assets-astronaut-7.webp","assets-astronaut-3.webp", "assets-astronaut-5.webp"  ,"assets-astronaut-4.webp"];
    console.log(background_image)
    useEffect(()=>{
          if(color_mode == "light"){
              setStyle_mode({
                  mode1: {},
                  mode2: {},
                  mode3: {}
              });
          }else{
              setStyle_mode({mode1:{backgroundColor:"black",color:"white"},mode2:{backgroundColor:"white",color:"#1E1E1E"},mode3:{color:"white"}});
          }
      },[color_mode]) 
    const problems = [{Title:"Tangent planes and normal lines", Chapter:"Analytical Geometry", Difficulity:"3/10", AI:true,liked:true},{Title:"Ratio test", Chapter:"Infinite Series", Difficulity:"6/10", AI:true,liked:false}];
    return (
       <div className="Landing_body" style={{display:"flex",alignItems:"center",flexDirection:"column",...style_mode.mode1}}>
        <div style={{marginBottom:"3vw",width:"90vw", height:"30vh",borderRadius:"10px",backgroundImage:`url(/${options[background_image]})`,display:"flex",flexDirection:"column", padding:"2vw",position:"relative"}}>
            <div style={{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"gray",opacity:0.6,borderRadius:"10px"}}></div>
            <p className='main_title_landing_page' style={{fontSize:"xxx-large",color:'white',position:"relative",zIndex:1,marginBottom:"2vw"}} >{"Live Session"}</p>
            <p className='main_title_landing_page' style={{fontSize:"x-large",color:'white',position:"relative",zIndex:1}} >{titlle}</p>
            <div style={{display:"flex",gap:"2vw",position:"relative",zIndex:1}}>
                {tags && tags.slice(0,3).map((tag, index) => (
                    <span 
                        key={index}
                        style={{
                            marginTop:"5vw",
                            backgroundColor: index === 1 ? "gray" : "black",
                            color: "white",
                            padding: "0.5vw 1vw",
                            borderRadius: "20px",
                            fontSize: "small"
                        }}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
        <div style={{overflowX:"hidden",overflowY:"scroll", display:"flex",backgroundColor:"rgb(224, 224, 224)",width:"90vw",justifyContent:"space-around",flexWrap:"wrap",height:"80vh",borderRadius:"10px",transition:"1s all"}}>

            {
                problems.map(item =>{
                    return(<Problem_Box key={item.Title} problem={item} color_mode={color_mode} screenSize={screenSize} />)
                })
            }

        </div>

      </div>
    )
}

export default Session_inside