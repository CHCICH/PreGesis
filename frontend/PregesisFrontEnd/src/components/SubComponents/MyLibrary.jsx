import React from 'react'
import { useEffect,useState } from 'react';

const MyLibrary = ({color_mode,screenSize}) => {
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
    return (
        <div>MyLibrary</div>
    )
}

export default MyLibrary