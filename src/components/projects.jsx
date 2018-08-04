import React from 'react'
import styled from 'styled-components'
import ChessBattlesImg from '../assets/imgs/chess-battles.jpg'
import EurasiersImg from '../assets/imgs/eurasiers.jpg'
import TripCostImg from '../assets/imgs/trip-cost.jpg'
import GroupLibraryImg from '../assets/imgs/group-library.jpg'
import ProjectImg from '../assets/imgs/project-bg.jpg'
import TrackVisibility from 'react-on-screen'
import Typist from 'react-typist'

const StyledProjectsContainer = styled.div`
width: 100%;

.project-section-header {
  display: flex;
  width: 100%;
  height: 390px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: url(${ProjectImg});
  background-size: cover;
  background-position: center;

  .project-header-bg-cover {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(9, 4, 70, 0.45);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
  }

  .project-section-header-text {
    font-family: Righteous;
    font-size: 42px;
  }

  .project-section-header-sub-text {
    font-size: 20px;
    margin-top: 40px;
    word-spacing: 20px;
  }
}
`

const Project = styled.div`
  position: relative;
  height: 463px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #6d6d6d;

  .project-text-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }

  .project-header {
    font-family: Butler;
    font-size: 42px;
  }

  .project-sub-header {
    font-family: Butler;
    font-size: 20px;
  }

  .project-img {
    width: 680px;
    height: 465px;
  }

  .project-hover-container {
    text-decoration: none;
    color: white;
    display: flex;
    opacity: 0;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 34, 0.55);
    position: absolute;
    right: 0;
    width: 680px;
    height: 465px;
  }

  .project-hover-text {
    font-size: 46px;
    font-family: Hasklig;
  }

  .project-hover-container:hover {
    opacity: 1;
  }

`

export default function Projects() {
  return (
    <StyledProjectsContainer id="Projects">
      <div className="project-section-header">
        <div className="project-header-bg-cover">
          <p className="project-section-header-text">Projects</p>
          <TrackVisibility>
            {({ isVisible }) => {
              return isVisible
                ? <Typist className="project-section-header-sub-text">
                    ReactJs HTML CSS NodeJS Git Javascript Mongo AWS AdobeXD
                  </Typist>
                : null
            }}
          </TrackVisibility>
        </div>
      </div>

      <Project>
        <div className="project-text-container">
          <TrackVisibility>
            {({ isVisible }) => {
              return isVisible
                ? <p className="project-header animated flipInX delay-0.5s">Chess Battles</p>
                : null
            }}
          </TrackVisibility>

          <TrackVisibility>
            {({ isVisible }) => {
              return isVisible
                ? <p className="project-sub-header animated slideInUp">Web Application</p>
                : null
            }}
          </TrackVisibility>
        </div>
        <a href="https://chessbattles.paulasetre.com" className="project-hover-container">
          <p className="project-hover-text">Visit</p>
        </a>
        <img className="project-img" src={ChessBattlesImg} alt="Chess Battles" />
      </Project>

      <Project>
        <div className="project-text-container">
          <TrackVisibility>
            {({ isVisible }) => {
              return isVisible
                ? <p className="project-header animated flipInX delay-0.5s">Edelweiss Eurasiers</p>
                : null
            }}
          </TrackVisibility>

          <TrackVisibility>
            {({ isVisible }) => {
              return isVisible
                ? <p className="project-sub-header animated slideInUp">Design Concept</p>
                : null
            }}
          </TrackVisibility>
        </div>

        <a href="#" className="project-hover-container">
          <p className="project-hover-text">Visit</p>
        </a>
          <img className="project-img" src={EurasiersImg} alt="Edleweiss Eurasiers" />
      </Project>

      <Project>
        <div className="project-text-container">
          <TrackVisibility>
            {({ isVisible }) => {
              return isVisible
                ? <p className="project-header animated flipInX delay-0.5s">Trip Cost Calculator</p>
                : null
            }}
          </TrackVisibility>

          <TrackVisibility>
            {({ isVisible }) => {
              return isVisible
                ? <p className="project-sub-header animated slideInUp">Front-End</p>
                : null
            }}
          </TrackVisibility>
        </div>
        <a href="https://asetre.github.io/capstoneProj/" className="project-hover-container">
          <p className="project-hover-text">Visit</p>
        </a>
        <img className="project-img" src={TripCostImg} alt="Trip Cost Calculator" />
      </Project>

      <Project>
        <div className="project-text-container">
          <TrackVisibility>
            {({ isVisible }) => {
              return isVisible
                ? <p className="project-header animated flipInX delay-0.5s">Group Library</p>
                : null
            }}
          </TrackVisibility>

          <TrackVisibility>
            {({ isVisible }) => {
              return isVisible
                ? <p className="project-sub-header animated slideInUp">Web Application</p>
                : null
            }}
          </TrackVisibility>
        </div>
        <a href="http://ec2-54-185-58-23.us-west-2.compute.amazonaws.com:8000" className="project-hover-container">
          <p className="project-hover-text">Visit</p>
        </a>
          <img className="project-img" src={GroupLibraryImg} alt="Group Library" />
      </Project>
    </StyledProjectsContainer>
  )
}