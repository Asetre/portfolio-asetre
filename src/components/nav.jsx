import React from 'react'
import styled from 'styled-components'

const StyledNavbar = styled.div`
position: fixed;
left: 10px;
z-index: 9999;

 .nav-item {
   transform: rotate(-90deg);
   font-size: 16px;
   font-family: Butler;
   position: fixed;
   top: 50%;
   color: white;
   text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
 }
`
function handleNavClick(el) {
  document.getElementById(el).scrollIntoView()
}

export default function Navbar() {
  return(
    <StyledNavbar>
      <p className="nav-item" onClick={() => handleNavClick('')}>Back to top</p>
      <p className="nav-item" onClick={() => handleNavClick('About')}>About</p>
    </StyledNavbar>
  )
}