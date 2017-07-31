import React, { Component } from 'react'
import { CirclePicker } from 'react-color'
import _ from 'lodash'

import './App.css'

class App extends Component {
  state = {
    color: { hex: '#fff' },
    colors: _.map(_.range(12), () => ({
      off: true,
    })),
  }
  render() {
    const { colors, color } = this.state
    const num = 12
    const deg = 360.0 / num
    const r = 100
    const red = deg * Math.PI / 180.0
    return (
      <div className="App">
        <div className="App-header">
          <h2>CPS Lab 14F Rainnow Controller</h2>
        </div>
        <div className="App-intro">
          <section
            className="main-contents"
            style={{
              display: 'flex',
              justifyContent: 'center',
              padding: 30,
            }}
          >
            <div>
              <div className="circle-box" style={{ height: 350 }}>
                {_.map(_.range(0, 12), i => {
                  const it = (i + 9) % 12
                  const x = -Math.cos(red * it) * r + r
                  const y = Math.sin(red * it) * r + r
                  return (
                    <button
                      key={i}
                      style={{
                        position: 'absolute',
                        left: x,
                        top: y,
                        width: '2em',
                        height: '2em',
                        backgroundColor: colors[i].off ? '#aaa' : colors[i].hex,
                      }}
                      onClick={() => {
                        colors[i] = {
                          ...color,
                          off: false,
                        }
                        this.setState({
                          colors: colors,
                        })
                      }}
                    />
                  )
                })}
              </div>
              <CirclePicker
                color={color.hex}
                onChangeComplete={color => {
                  this.setState({ color })
                }}
              />
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default App
