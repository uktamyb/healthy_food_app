import React, { Component } from 'react'
import Navbar from './navbar/navbar'
import { Wrapper, Button } from './styles.js'

export default class App extends Component {
  render() {
    return (
      <Wrapper>
        <Navbar />
      </Wrapper>
    )
  }
}
