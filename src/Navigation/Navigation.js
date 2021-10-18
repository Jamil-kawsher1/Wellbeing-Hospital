import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="light">
                <Container>
                    <Navbar.Brand className="text-start"><Link to="/" className='linkstye'>Baseline Photography</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link ><Link to='/' className='linkstye text-white'  >Home</Link></Nav.Link>
                            <Nav.Link ><Link to='/about' className='linkstye'>About</Link></Nav.Link>
                            <Nav.Link ><Link to="/services" className='linkstye'>Services</Link></Nav.Link>
                            <Nav.Link > <Link to='/contact' className='linkstye'>Contact US</Link></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Navigation;