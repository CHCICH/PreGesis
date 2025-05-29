import React from 'react'
import { useState } from 'react'
import '../App.css'
import LandingBody from './SubComponents/LandingBody'
import Footer from './SubComponents/Footer'
import Header from './SubComponents/Header'


const Landing = ({color_mode}) => {
    return (
        <>
        <Header color_mode={color_mode}></Header>
        <LandingBody color_mode={color_mode}></LandingBody>
        <Footer color_mode={color_mode} ></Footer>
        </>
    )
}

export default Landing