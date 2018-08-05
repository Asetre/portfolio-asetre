import React from 'react'
import styled from 'styled-components'
import TrackVisibility from 'react-on-screen'

const StyledProject = styled.div`
  position: relative;
  height: 463px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #6d6d6d;
  padding-left: 80px;

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

  .project-hover-container {
    text-decoration: none;
    color: white;
    display: flex;
    opacity: 0;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 34, 0.8);
    width: 100%;
    height: 100%;
    z-index: 4000;
    position: absolute;
  }

  .project-hover-text {
    font-size: 46px;
    font-family: Hasklig;
  }

  .project-hover-container:hover {
    opacity: 1;
  }

  .proj-img-backdrop {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }

  .proj-img-title {
    font-family: Butler;
    font-size: 34px;
    display: none;
  }

  @media (max-width: 1120px) {
    .project-header, .project-sub-header {
      transform: rotate(-90deg);
    }

    .project-header {
      font-size: 22px;
      margin-left: -40px;
    }
    .project-sub-header {
      font-size: 12px;
    }
  }

  @media (max-width: 600px) {
    padding: 0;
    .project-text-container {
      display: none;
    }

    .proj-img-backdrop {
      background-color: rgba(0, 0, 34, 0.6);
    }

    .proj-img-title {
      display: block;
    }
  }


`

const ProjectImg = styled.div`
position: relative;
background: ${(props) => `url(${props.src})`};
background-size: cover;
background-repeat: no-repeat;
width: 1530px;
`

export default function Project(props) {
  let title = props.title
  return (
    <StyledProject>
      <div className="project-text-container">
        <TrackVisibility>
          {({ isVisible }) => {
            return isVisible
              ? <div className="animated flipInX delay-0.5s" f>
                <p className="project-header">{title}</p>
              </div>
              : null
          }}
        </TrackVisibility>

        <TrackVisibility>
          {({ isVisible }) => {
            return isVisible
              ? <div className="animation-container animated slideInUp">
                <p className="project-sub-header">Web Application</p>
              </div>
              : null
          }}
        </TrackVisibility>
      </div>
      <ProjectImg src={props.src}>
        <div className="proj-img-backdrop">
          <p className="proj-img-title">{title}</p>
          <a href={props.link} className="project-hover-container">
            <p className="project-hover-text">Visit</p>
          </a>
        </div>
      </ProjectImg>
    </StyledProject>
  )
}