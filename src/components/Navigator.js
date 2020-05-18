import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'

const Navigator = () => {
  return (
    <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">Tienda App</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="/categories">Categorías</Nav.Link>
            <Nav.Link href="/products">Productos</Nav.Link>
        </Nav>
    </Navbar>
  );
}

export default Navigator;
