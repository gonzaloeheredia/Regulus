import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Cart from './CartWidget'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    
   return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <NavLink to='/'>
                        <Navbar.Brand href="#home">Regulus</Navbar.Brand>
                    </NavLink>                 
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <NavLink to='/'>
                        <Nav.Link href="#home">Home</Nav.Link> 
                    </NavLink>    
                    <NavDropdown title="Variety" id="basic-nav-dropdown">
                        <NavLink to='/category/inside'> 
                            <NavDropdown.Item href="#action/3.1">Inside</NavDropdown.Item>
                        </NavLink>
                        <NavLink to='/category/outside'> 
                            <NavDropdown.Item href="#action/3.2">Outside</NavDropdown.Item>
                        </NavLink>
                    </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                    <NavLink to='/cart'>
                        <Cart/>
                    </NavLink>
                </Container>
                
                
            </Navbar>
            
        </div>
    )

}

export default NavBar
