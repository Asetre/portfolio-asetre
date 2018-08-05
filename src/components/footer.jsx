import React from 'react'
import styled from 'styled-components'
import ReactGA from 'react-ga'

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

.footer-link {
  color: white;
  margin: 5px 0;
  text-decoration: none;
}

.footer-link:hover {
  opacity: 0.2;
}

@media (max-width: 900px) {
  .footer-contact-container {
    display: none;
  }
}

@media (max-width: 400px) {
  .watermark {
    font-size: 12px;
  }
}
`

const handleFooterLinkClick = (type) => {
  ReactGA.event({
    category: 'Footer',
    action: type
  })
}

export default function Footer() {
  return (
    <StyledFooter>
      <div className="footer-links-container footer-container">
        <a href="https://github.com/Asetre" className="footer-link" onClick={() => handleFooterLinkClick('Github')}>Github</a>
        <a href="https://www.linkedin.com/in/paul-asetre/" className="footer-link" onClick={() => handleFooterLinkClick('Linkedin')}>Linkedin</a>
        <a href="https://stackoverflow.com/users/9094738/paul-asetre" className="footer-link" onClick={() => handleFooterLinkClick('Stack Overflow')}>StackOverflow</a>
      </div>

      <div className="footer-nav-container footer-container">
        <a href="#About" className="footer-link">About</a>
        <a href="#Projects" className="footer-link">Projects</a>
      </div>

      <div className="footer-contact-container footer-container">
        <a href="mailto:asetre.paul@gmailcom" className="footer-link">asetre.paul@gmail.com</a>
      </div>

      <p className="watermark">Designed and developed by Paul Asetre</p>

    </StyledFooter>
  )
}