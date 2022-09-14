import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

function Header() {
    return (

        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/"><i class="fa-sharp fa-solid fa-house"></i> eShop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav  className="mr-auto">
                            <Nav.Link href="/cart"><i class="fa-sharp fa-solid fa-cart-shopping"></i> Cart</Nav.Link>
                            <Nav.Link href="/login"><i class="fa-sharp fa-solid fa-user"></i> Login</Nav.Link>
                    
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>

    )
}
export default Header;