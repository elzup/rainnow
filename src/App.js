import React, { Component } from 'react'
import { SketchPicker } from 'react-color'
import _ from 'lodash'

import logo from './logo.svg'
import './App.css'

class App extends Component {
  state = {
    leds: _.times({ r: 0, g: 0, b: 0, off: true, blink: true }),
    color: null,
  }
  static onClick() {}
  render() {
    const num = 12
    const deg = 360.0 / num
    const r = 100
    const red = deg * Math.PI / 180.0
    return (
      <div className="App">
        <div className="App-header">
          <h2>CPS Lab 14F Rainnow Controller</h2>
        </div>
        <p className="App-intro">
          <section
            class="main-contents"
            style={{
              display: 'flex',
              justifyContent: 'center',
              padding: 30,
            }}
          >
            <div>
              <div
                class="circle-box"
                style={{ position: 'relative', height: 350 }}
              >
                {_.map(_.range(0, 12), i => {
                  const it = (i + 9) % 12
                  const x = -Math.cos(red * it) * r + r
                  const y = Math.sin(red * it) * r + r
                  return (
                    <div
                      key={i}
                      style={{
                        position: 'absolute',
                        left: x,
                        top: y,
                      }}
                    >
                      {i}
                    </div>
                  )
                })}
              </div>
              <SketchPicker
                color={this.state.background}
                onChangeComplete={this.handleChangeComplete}
              />
            </div>
          </section>
        </p>
      </div>
    )
  }
}

export default App
