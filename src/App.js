import React, { Component } from 'react';
import {injectGlobal} from 'styled-components'
import 'animate.css'
import ReactGA from 'react-ga';

//Components
import Hero from './components/hero'
import Navbar from './components/nav'
import Projects from './components/projects'
import About from './components/about'
import Footer from './components/footer'

//Fonts
import butler from './assets/fonts/Butler/Butler_Black.otf'
import butlerlight from './assets/fonts/Butler/Butler_Light.otf'
import hasklig from './assets/fonts/Hasklig/Hasklig-Regular.otf'
import lobster from './assets/fonts/Lobster/Lobster-Regular.ttf'
import pixel from './assets/fonts/Pix/PixelPix.ttf'
import righteous from './assets/fonts/Righteous/Righteous-Regular.ttf'

//Google Analytics
ReactGA.initialize('UA-123370185-1');

injectGlobal`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face {
  font-family: 'Butler';
  src: url(${butler})
}

@font-face {
  font-family: 'Hasklig';
  src: url(${hasklig})
}

@font-face {
  font-family: 'Lobster';
  src: url(${lobster})
}

@font-face {
  font-family: 'PixelVerdana';
  src: url(${pixel})
}

@font-face {
  font-family: 'Righteous';
  src: url(${righteous})
}

@font-face {
  font-family: 'Butler-Light';
  src: url(${butlerlight});
}
`

class App extends Component {
  componentDidMount() {
    ReactGA.event({
      category: 'Site Loaded',
      action: 'Site Loaded'
    })
  }
  render() {
    return (
      <div className='App'>
        <Navbar></Navbar>
        <Hero></Hero>
        <Projects></Projects>
        <About></About>
        <Footer></Footer>
      </div>
    )
  }
}

export default App;
