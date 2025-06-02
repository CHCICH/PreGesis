import React from 'react'
import { useState,useEffect } from 'react';
import Problem_Box from './Problem_Box';

const Session_inside = ({color_mode,screenSize}) => {
  let [edit_on, set_edit_on] = useState(false);
      let [edit_enable, set_edit_enable] = useState(true);
      let [style_mode ,setStyle_mode] = useState({mode1:{},mode2:{},mode3:{}});
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
       <div className="Landing_body" >
        {
            problems.map(item =>{
                return(<Problem_Box key={item.Title} problem={item} color_mode={color_mode} screenSize={screenSize} />)
            })
        }

      </div>
    )
}

export default Session_inside