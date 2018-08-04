import React from 'react'
import styled from 'styled-components'
import ChessBattlesImg from '../assets/imgs/chess-battles.jpg'
import EurasiersImg from '../assets/imgs/eurasiers.jpg'
import TripCostImg from '../assets/imgs/trip-cost.jpg'
import GroupLibraryImg from '../assets/imgs/group-library.jpg'
import ProjectImg from '../assets/imgs/project-bg.jpg'

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
}
`

const Project = styled.div`
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
`

export default function Projects() {
  return (
    <StyledProjectsContainer>
      <div className="project-section-header">
        <div className="project-header-bg-cover">
          <p className="project-section-header-text">Projects</p>
          <p className="project-section-header-sub-text">lorem ipsum</p>
        </div>
      </div>

      <Project>
        <div className="project-text-container">
          <p className="project-header">Chess Battles</p>
          <p className="project-sub-header">Web Application</p>
        </div>
        <img className="project-img" src={ChessBattlesImg} alt="Chess Battles" />
      </Project>
      <Project>
        <div className="project-text-container">
          <p className="project-header">Edelweiss Eurasiers</p>
          <p className="project-sub-header">Design Concept</p>
        </div>
        <img className="project-img" src={EurasiersImg} alt="Edleweiss Eurasiers" />
      </Project>
      <Project>
        <div className="project-text-container">
          <p className="project-header">Trip Cost Calculator</p>
          <p className="project-sub-header">Front-End</p>
        </div>
        <img className="project-img" src={TripCostImg} alt="Trip Cost Calculator" />
      </Project>
      <Project>
        <div className="project-text-container">
          <p className="project-header">Group Library</p>
          <p className="project-sub-header">Web Application</p>
        </div>
        <img className="project-img" src={GroupLibraryImg} alt="Group Library" />
      </Project>
    </StyledProjectsContainer>
  )
}