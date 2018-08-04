import React, { Component } from 'react';
import {injectGlobal} from 'styled-components'
import Hero from './components/hero'
import Navbar from './components/nav'
import Projects from './components/projects'
import About from './components/about'

injectGlobal`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face {
  font-family: 'Butler';
  src: url('./assets/fonts/Butler/Butler_black.otf')
}

@font-face {
  font-family: 'Hasklig';
  src: url('./assets/fonts/Hasklig/Hasklig-Regular.otf')
}

@font-face {
  font-family: 'Lobster';
  src: url('./assets/fonts/Lobster/Lobster-Regular.ttf')
}

@font-face {
  font-family: 'Pix';
  src: url('./assets/fonts/Pix/PixelFJVerdana12pt.ttf')
}

@font-face {
  font-family: 'Righteous';
  src: url('./assets/fonts/Righteous/Righteous-Regular.ttf')
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
      </div>
    )
  }
}

export default App;
