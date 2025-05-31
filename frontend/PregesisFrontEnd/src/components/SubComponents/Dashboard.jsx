import React from 'react';
import { useState, useEffect } from 'react';
import DashboardTitle from './DashboardTitle';
import MyLibrary from './MyLibrary';
import CreateSession from './CreateSession';


const Dashboard = ({color_mode,screenSize}) => {
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
        <div className="Landing_body" style={style_mode.mode1}>
            <DashboardTitle color_mode={color_mode} screenSize={screenSize} ></DashboardTitle>
            <div className="speration_line_landing_page" style={{...style_mode.mode2,}}></div>
            <MyLibrary color_mode={color_mode} screenSize={screenSize} />
            <div className="speration_line_landing_page" style={{...style_mode.mode2,}}></div>

            <CreateSession color_mode={color_mode} screenSize={screenSize}/>
        </div>
    );
};

export default Dashboard;