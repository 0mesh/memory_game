import React from 'react'
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
function Navbar1(props) {
  return (
    <>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#">Memory Game</Navbar.Brand>
    <Nav className="mr-auto">
    <Nav.Link href="#" onClick={props.onNewGame} >New Game</Nav.Link>
    </Nav>
  </Navbar>
   </>
  )
}

export default Navbar1
 