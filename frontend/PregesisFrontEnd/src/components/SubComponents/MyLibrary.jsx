import React from 'react'
import { useEffect,useState } from 'react';
import UpperFilter from './UpperFilter';
import LowerFilter from './LowerFilter';


const MyLibrary = ({color_mode,screenSize,set_edit_enable,set_edit_on,edit_on,edit_enable}) => {
   
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
        <div style={{paddingLeft:"8vh"}}>
            <p className='main_title_landing_page' style={{fontSize:"xx-large"}} >My Library</p>
            <UpperFilter color_mode={color_mode} screenSize={screenSize} />
            <LowerFilter set_edit_on={set_edit_on} edit_on={edit_on} edit_enable = {edit_enable}  set_edit_enable={set_edit_enable} color_mode={color_mode} screenSize={screenSize} />
        </div>
    )
}

// upper filter component 


export default MyLibrary