import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <div >
            <p className="text-center pt-3"> <i class="fas fa-phone-alt"></i> Call us  +8801648474645</p>
            <Navbar collapseOnSelect expand="lg" bg="success" variant="light">
                <Container>
                    <Navbar.Brand className=" sm-text-center text-start"><Link to="/" className='linkstye text-white'><i className="fas fa-clinic-medical "></i> <span className="ml-5"> Wellbeign Hospital</span></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link ><Link to='/' className='linkstye text-white' >Home</Link></Nav.Link>
                            <Nav.Link ><Link to='/about' className='linkstye text-white'>About</Link></Nav.Link>
                            <Nav.Link ><Link to="/services" className='linkstye text-white'>Services</Link></Nav.Link>
                            <Nav.Link > <Link to='/contact' className='linkstye text-white'>Contact US</Link></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Navigation;