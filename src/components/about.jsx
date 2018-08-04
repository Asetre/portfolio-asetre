import React from 'react'
import styled from 'styled-components'

const StyledAbout = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
height: 100vh;
min-height: 770px;
padding-top: 150px;

.about-header {
  font-family: Righteous;
  font-size: 42px;
}

.about-content-text {
  font-family: Hasklig;
  font-size: 14px;
  color: #474747;
  display: block;
  width: 480px;
  margin: 60px 0;
}

.about-connect-separator-container {
  display: flex;
}

.about-connect-text {
  font-family: Lobster;
  font-size: 26px;
  color: #eb5e55;
}

.about-skill-set {
  position: absolute;
  left: 70px;
}

.about-skill {
  font-size: 46px;
  font-family: PixelVerdana;
  margin: 12.5px 0;
}

.about-btn-container {
  display: flex;
  flex-direction: column;
}
`

const AboutBtn = styled.button`
background-color: ${(props) => props.color ? props.color : '#6d6d6d'};
margin: 15px 0;
width: 240px;
height: 60px;
color: white;
font-family: Hasklig;
font-size: 16px;
`

const AboutCircle = styled.div`
width: 12px;
height: 12px;
border-radius: 12px;
background-color: #707070;
margin: 15px 5px;
`

export default function About() {
  return (
    <StyledAbout id="About">
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
          <AboutBtn color='#2b3137'>Github</AboutBtn>
        </a>
        <AboutBtn color='#0077b5'>Linkedin</AboutBtn>
        <a href="#">
          <AboutBtn color='#c71610'>asetre.paul@gmail.com</AboutBtn>
        </a>
      </div>

      <div className="about-skill-set">
        <div className="about-skill">React</div>
        <div className="about-skill">Nodejs</div>
        <div className="about-skill">HTML</div>
        <div className="about-skill">CSS</div>
        <div className="about-skill">Mongo</div>
        <div className="about-skill">Git</div>
      </div>
    </StyledAbout>
  )
}