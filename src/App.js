import React, { Component } from 'react'
import P5Wrapper from 'react-p5-wrapper'
import sketch from './p5'

class App extends Component {
  render() {
    return (
      <div id="app">
        <P5Wrapper sketch={sketch} rotation={200} />
      </div>
    )
  }
}

export default App
