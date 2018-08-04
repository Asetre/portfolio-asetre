import React, { Component } from 'react';
import {injectGlobal} from 'styled-components'
import Hero from './components/hero'
import Navbar from './components/nav'
import Projects from './components/projects'
import About from './components/about'
import Footer from './components/footer'

//Fonts
import butler from './assets/fonts/Butler/Butler_Black.otf'
import hasklig from './assets/fonts/Hasklig/Hasklig-Regular.otf'
import lobster from './assets/fonts/Lobster/Lobster-Regular.ttf'
import pixel from './assets/fonts/Pix/PixelPix.ttf'
import righteous from './assets/fonts/Righteous/Righteous-Regular.ttf'

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
`

class App extends Component {
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
