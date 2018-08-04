import React from 'react'
import styled from 'styled-components'
import HeroImg from '../assets/imgs/hero-img.jpg'

const StyledHero = styled.div`
background-image: url(${HeroImg});
background-size: cover;
background-repeat: no-repeat;
background-position: bottom center;
background-attachment: fixed;
width: 100%;
height: 100vh;
min-height: 765px;
position: relative;

.hero-bg-cover {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(25, 42, 81, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.hero-header {
  font-size: 54px;
  font-family: Righteous;
  color: white;
  z-index: 1000;
}

.hero-line-divider {
  width: 395px;
  height: 1px;
  background-color: white;
  margin: 15px 0;
}

.hero-sub-header {
  font-family: Lobster;
  font-size: 28px;
  color: white;
}

.arrow-down {
  width: 0; 
  height: 0; 
  position: absolute;
  bottom: 30px;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid white;
  justify-self: flex-end;
}
`

export default function Hero() {
  return (
    <StyledHero>
      <div className="hero-bg-cover">
        <h1 className="hero-header">Paul Asetre</h1>
        <div className="hero-line-divider"></div>
        <p className="hero-sub-header">Fullstack Developer</p>
        <div className="arrow-down"></div>
      </div>
    </StyledHero>
  )
}