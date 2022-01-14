import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Cart from './CartWidget'

export default  Navbar = () => {
    
   return (
        <div>
            <CartWidge/>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Regulus</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Offers</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Inside</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Outside</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">US</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )

}