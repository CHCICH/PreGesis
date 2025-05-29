import React from 'react'
import { useState } from 'react'
import '../App.css'
import LandingBody from './SubComponents/LandingBody'
import Footer from './SubComponents/Footer'
import Header from './SubComponents/Header'


const Landing = ({color_mode,screenSize}) => {
    return (
        <>
        <Header color_mode={color_mode} screenSize={screenSize}></Header>
        <LandingBody color_mode={color_mode} screenSize={screenSize}></LandingBody>
        <Footer color_mode={color_mode} ></Footer>
        </>
    )
}

export default Landing