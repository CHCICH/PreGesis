import React from 'react'
import TitleBody from './TitleBody'
import About from './About'

const LandingBody = ({mode}) => {
  return (
    <div className="Landing_body">
      <TitleBody></TitleBody>
      <div className="speration_line_landing_page"></div>
      <About></About>
      <div className="speration_line_landing_page"></div>

    </div>
  )
}

export default LandingBody