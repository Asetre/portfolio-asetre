import React from 'react'
import styled from 'styled-components'

const StyledAbout = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: center;


.about-header {
  font-family: Righteous;
  font-size: 42px;
}

.about-content-text {
  font-family: Hasklig;
  font-size: 14px;
  display: block;
  width: 480px;
}

.about-connect-separator-container {
  display: flex;
}

.about-connect-text {
  font-family: Lobster;
  font-size: 26px;
  color: #eb5e55;
}
`

const AboutBtn = styled.button`
`

const AboutCircle = styled.div`
width: 12px;
height: 12px;
background-color: #707070;
border-radius: 12px;
`

export default function About() {
  return (
    <StyledAbout>
      <p className="about-header">About</p>
      <p className="about-content-text">I'ma a Vancouver based developer with a passion for technology. I love to solve problems and learn new things.</p>
      <p className="about-connect-text">Lets connect</p>
      <div className="about-connect-separator-container">
        <AboutCircle></AboutCircle>
        <AboutCircle></AboutCircle>
        <AboutCircle></AboutCircle>
      </div>
      <div className="about-btn-container">
        <a href="3">
          <AboutBtn>Github</AboutBtn>
        </a>
        <AboutBtn>Linkedin</AboutBtn>
        <a href="#">
          <AboutBtn>asetre.paul@gmail.com</AboutBtn>
        </a>
      </div>
    </StyledAbout>
  )
}