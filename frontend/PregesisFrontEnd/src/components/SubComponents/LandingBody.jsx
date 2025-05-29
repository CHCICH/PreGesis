import React from 'react'
import TitleBody from './TitleBody'
import About from './About'
import MeetTheTeam from './MeetTheTeam'
import WhyPregesis from './WhyPregesis'

const LandingBody = ({mode}) => {
  return (
    <div className="Landing_body">
      <TitleBody></TitleBody>
      <div className="speration_line_landing_page"></div>
      <About></About>
      <div className="speration_line_landing_page"></div>
      <MeetTheTeam></MeetTheTeam>
      <div className="speration_line_landing_page"></div>
      <WhyPregesis></WhyPregesis>
    </div>
  )
}

export default LandingBody