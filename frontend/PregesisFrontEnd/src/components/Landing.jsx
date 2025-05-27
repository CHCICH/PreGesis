import React from 'react'
import { useState } from 'react'
import '../App.css'
import LandingBody from './SubComponents/LandingBody'
import Footer from './SubComponents/Footer'
import Header from './SubComponents/Header'


const Landing = () => {
    let mode = 'light';
    return (
        <>
        <Header mode="light"></Header>
        <LandingBody mode="light"></LandingBody>
        <Footer mode="light" ></Footer>
        </>
    )
}

export default Landing