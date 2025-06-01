import React from 'react'
import CreateSession from './CreateSession'
import { useState,useEffect } from 'react';

const Edit_Panel = ({color_mode,screenSize,edit_on,set_edit_on,edit_enable,set_edit_enable}) => {
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
    <div style={{
      marginTop:screenSize <900 ? "9vw":"",
      transition:"1s all",
      position: "fixed",
      top: "50%",
      left: "50%",
      transform:edit_on ?"translate(-50%, -50%)":"translate(200%,-50%)",
      zIndex: 1000,
      backgroundColor:'#f5f5f5',
      height:screenSize < 900 ? "90vh" :"40vw",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.29)",
      borderRadius:"15px",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      opacity: edit_on ? 1 : 0,
      visibility: edit_on ? "visible" : "hidden",
      overflowY:"scroll"
    }}>
        <button 
          style={{
            backgroundColor:"black",
            position: "absolute",
            top: "20px",
            left: "20px",
            border: "none",
            cursor: "pointer",
            fontSize: "24px",
            color: style_mode.mode3.color || "#333",
            padding: "8px",
            borderRadius: "10px",
            color:"white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width:screenSize<900 ? "10vw":"5vw",
            height:screenSize<900 ? "5vw" :"2.5vw",
            marginLeft:screenSize < 900 ? "60vw" :"",
          }}
          onClick={() => {set_edit_on(false);
            setTimeout(()=>set_edit_enable(true),1000);
          }}
        >
          ←
        </button>
        <CreateSession color_mode={color_mode} screenSize={screenSize} hide_create_session={true} style={{backgroundColor:"" ,boxShadow:""}}/>
        <button 
          style={{
            backgroundColor: "black",
            position: "absolute",
            bottom: "20px",
            right: "20px",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            color: "white",
            padding: "12px 24px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold"
          }}
          onClick={() => {
            // Add save functionality here
            console.log("Save clicked");
          }}
        >
          Save
        </button>
    </div>
  )
}

export default Edit_Panel