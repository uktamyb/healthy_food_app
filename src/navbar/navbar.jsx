import React, { Component } from 'react'
import { Container, Logo, NavItem } from './navbarStyle.js'
import logo from '../img/logo'

export default class navbar extends Component {
  render() {
    return (
      <Container>
        <Logo src={logo} alt="logo" />
        <NavItem>Home</NavItem>
        <NavItem>About us</NavItem>
        <NavItem>Menu</NavItem>
        <NavItem>Features</NavItem>
        <NavItem>Contact us</NavItem>
      </Container>
    )
  }
}
