import React from 'react'
import TreedAstronaut from './TreedAstronaut';

const TitleBody = () => {
  return (
    <div>
        <div className='main_page_subheader'>
            <p className='main_title_landing_page'>Pregesis</p>
            <p style={{"color":"grey", "fontSize":"large", "marginLeft":"0.5vw","marginTop":"5vh"}}>Welcome to Pregesis – AI-Driven Exam Practice, Reimagined</p>
        </div>
        <TreedAstronaut></TreedAstronaut>

    </div>
  )
}

export default TitleBody


