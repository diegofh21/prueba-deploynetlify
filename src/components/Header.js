import React, { useEffect, useReducer, useContext } from 'react'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export const Header = () => {

	return (
		<>
			<Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
				<Container fluid>
					<Navbar.Brand href="/">Multimax Maracaibo</Navbar.Brand>
					{/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
					{/* <Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="/">Inicio</Nav.Link>
						</Nav>
					</Navbar.Collapse> */}
				</Container>
			</Navbar>
		</>
	)
}

export default Header