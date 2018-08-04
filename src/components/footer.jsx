import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
width: 100%;
height: 150px;
position: relative;
background-color: #e63946;
display: flex;
padding: 30px 50px;

.footer-container {
  display: flex;
  flex-direction: column;
  margin-right: 100px;
  height: 100%;
}

.watermark {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.6); 
  position: absolute;
  right: 25px;
  bottom: 20px;
}
`

const FooterLink = styled.a`
color: white;
margin: 5px 0;
`

export default function Footer() {
  return (
    <StyledFooter>
      <div className="footer-links-container footer-container">
        <FooterLink>Github</FooterLink>
        <FooterLink>Linkedin</FooterLink>
        <FooterLink>StackOverflow</FooterLink>
      </div>

      <div className="footer-nav-container footer-container">
        <FooterLink>About</FooterLink>
        <FooterLink>Projects</FooterLink>
      </div>

      <div className="footer-contact-container footer-container">
        <FooterLink>asetre.paul@gmail.com</FooterLink>
      </div>

      <p className="watermark">Designed and developed by Paul Asetre</p>

    </StyledFooter>
  )
}