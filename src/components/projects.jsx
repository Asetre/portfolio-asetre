import React from 'react'
import styled from 'styled-components'
import ChessBattlesImg from '../assets/imgs/chess-battles.jpg'
import EurasiersImg from '../assets/imgs/eurasiers.jpg'
import TripCostImg from '../assets/imgs/trip-cost.jpg'
import GroupLibraryImg from '../assets/imgs/group-library.jpg'
import ProjectBgImg from '../assets/imgs/project-bg.jpg'
import Typist from 'react-typist'
import TrackVisibility from 'react-on-screen'
import Project from './project'

const projects = [
  {title: 'Chess Battles',
  img: ChessBattlesImg,
  link: 'https://chessbattles.paulasetre.com'
  },
  {title: 'Eurasiers',
  img: EurasiersImg,
  link: '#'
  },
  {title: 'Trip Calculator',
  img: TripCostImg,
  link: 'https://asetre.github.io/capstoneProj/'
  },
  {title: 'Group Library',
  img: GroupLibraryImg,
  link: 'http://ec2-54-185-58-23.us-west-2.compute.amazonaws.com:8000'
  }
]


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
  background-image: url(${ProjectBgImg});
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
    padding: 20px 100px;
  }

  .project-section-header-text {
    font-family: Righteous;
    font-size: 42px;
  }

  .project-section-header-sub-text {
    font-family: Butler-Light;
    font-size: 20px;
    margin-top: 40px;
    word-spacing: 20px;
  }
}
  @media (max-width: 600px) {
    .project-section-header-sub-text {
      font-size: 14px !important;
      word-spacing: 5px !important;
    }
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
                  ReactJs HTML CSS NodeJS Git Javascript Mongo
                  </Typist>
                : null
            }}
          </TrackVisibility>
        </div>
      </div>

      {projects.map(proj => {
        return <Project title={proj.title} src={proj.img} link={proj.link}/>
      })}


    </StyledProjectsContainer>
  )
}

/*
      <Project>
        <div className="project-text-container">
          <TrackVisibility className="animated flipInX delay-0.5s">
            {({ isVisible }) => {
              return isVisible
                ? <p className="project-header">Eurasiers</p>
                : null
            }}
          </TrackVisibility>

          <TrackVisibility className="animated slideInUp">
            {({ isVisible }) => {
              return isVisible
                ? <p className="project-sub-header">Design Concept</p>
                : null
            }}
          </TrackVisibility>
        </div>

        <ProjectImg src={EurasiersImg}>
          <a href="#" className="project-hover-container">
            <p className="project-hover-text">Visit</p>
          </a>
        </ProjectImg>
      </Project>

      <Project>
        <div className="project-text-container">
          <TrackVisibility className="animated flipInX delay-0.5s">
            {({ isVisible }) => {
              return isVisible
                ? <p className="project-header">Trip Calculator</p>
                : null
            }}
          </TrackVisibility>

          <TrackVisibility className="animated slideInUp">
            {({ isVisible }) => {
              return isVisible
                ? <p className="project-sub-header">Front-End</p>
                : null
            }}
          </TrackVisibility>
        </div>

        <ProjectImg src={TripCostImg}>
          <a href="" className="project-hover-container">
            <p className="project-hover-text">Visit</p>
          </a>
        </ProjectImg>
      </Project>

      <Project>
        <div className="project-text-container">
          <TrackVisibility class="animated flipInX delay-0.5s">
            {({ isVisible }) => {
              return isVisible
                ? <p className="project-header">Group Library</p>
                : null
            }}
          </TrackVisibility>

          <TrackVisibility className="animated slideInUp">
            {({ isVisible }) => {
              return isVisible
                ? <p className="project-sub-header">Web Application</p>
                : null
            }}
          </TrackVisibility>
        </div>
        <ProjectImg src={GroupLibraryImg}>
          <a href="" className="project-hover-container">
            <p className="project-hover-text">Visit</p>
          </a>
        </ProjectImg>
      </Project>

*/