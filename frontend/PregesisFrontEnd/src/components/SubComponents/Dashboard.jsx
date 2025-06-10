import React from 'react';
import { useState, useEffect } from 'react';
import DashboardTitle from './DashboardTitle';
import MyLibrary from './MyLibrary';
import CreateSession from './CreateSession';
import Edit_Panel from './Edit_Panel';
import Testing from './Testing';
import Session_inside from './Session_inside';
import Problem from './Problem';


const Dashboard = ({color_mode,screenSize}) => {
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
    let [active_session,set_active_session] = useState({id:1,favorite:false,picture:0 , title:"Rigorous Exam Prep", session_type:"Recom Session", capacity:"3/10", course:"Math 201"});
    let problem = "\\frac{y^{2}}{0.1}+\\frac{x^{2}}{0.2}=3 \\text{, } z= x^2+ y^2 \\text{ and } y = x^2 + z^2 \\text{. } dV(x,y,z) \\text{ should be in the form } dxdA(y,z) \\text{ or } dydA(x,z) \\text{.}";
    return (
        <div className="Landing_body" style={style_mode.mode1}>
            <DashboardTitle color_mode={color_mode} screenSize={screenSize} ></DashboardTitle>
            <div className="speration_line_landing_page" style={{...style_mode.mode2,}}></div>
            <MyLibrary color_mode={color_mode} screenSize={screenSize} set_edit_on={set_edit_on} edit_on={edit_on} edit_enable = {edit_enable}  set_edit_enable={set_edit_enable} />
            {!edit_enable?<Edit_Panel color_mode={color_mode} screenSize={screenSize} set_edit_on={set_edit_on} edit_on={edit_on} edit_enable = {edit_enable}  set_edit_enable={set_edit_enable}/>:""}
            <div className="speration_line_landing_page" style={{...style_mode.mode2,}}></div>

            <CreateSession color_mode={color_mode} screenSize={screenSize}/>
            <Testing color_mode={color_mode} screenSize={screenSize} />
            <Session_inside color_mode={color_mode} screenSize={screenSize} background_image={active_session.picture} titlle={active_session.title} tags={[active_session.session_type,active_session.course,active_session.capacity]} />
           
            <Problem course={"MATH 201"} author={"CHICH"} difficulty={8} color_mode={color_mode} screenSize={screenSize} title={"Problem #143 triple integrals in elipsoidal object"} problem={problem} description />
        </div>
    );
};


export default Dashboard;