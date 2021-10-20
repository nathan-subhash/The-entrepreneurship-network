import React,{createRef, useState} from 'react'
import {Button, Icon, Menu, Dropdown, Image } from 'semantic-ui-react'
import './css/Navbar.css'
import 'semantic-ui-css/semantic.min.css'
import logo from './images/logo.jpg'
import {Navbar, FormControl, Nav, NavDropdown, Container} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'


function Menubar() {

    
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant="dark" sticky-top>
                <Container fluid>
                    <Image src={logo} style={{borderRadius:"50%", width:"80px", height:"70px", margin:"10px"}}/>
                    <Navbar.Brand href="/"><h3>The <br/>Entrepreneurship <br/>Network</h3></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '500px' }}
                        navbarScroll
                    
                    >
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/onlinecourses">Onine Courses</Nav.Link>
                        <Nav.Link href="/werehiring">
                        We're Hiring
                        </Nav.Link>

                        <NavDropdown title="More" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="/blog">Blog</NavDropdown.Item>
                        <NavDropdown.Item href="/certification">Certification</NavDropdown.Item>
                        <NavDropdown.Item href="/alumini">Alumini Team</NavDropdown.Item>
                        <NavDropdown.Item href="/forum">Forum</NavDropdown.Item>
                        <NavDropdown.Item href="/hackathon">Hackathon</NavDropdown.Item>
                        <NavDropdown.Item href="/membership">Membership Registration</NavDropdown.Item>
                        <NavDropdown.Item href="/campusambassador">Campus Ambassador Program</NavDropdown.Item>
                        <NavDropdown.Item href="/metorship">Mentorship</NavDropdown.Item>
                        <NavDropdown.Item href="/socialmedia">Social Media</NavDropdown.Item>
                        <NavDropdown.Item href="/testimonials">Testimonials</NavDropdown.Item>
                        <NavDropdown.Item href="/contactus">Contact Us</NavDropdown.Item>
                        <NavDropdown.Item href="/complaints">Complaints</NavDropdown.Item>

                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                    </Form>
                    <Button animated='vertical'>
                        <Button.Content hidden>Cart</Button.Content>
                        <Button.Content visible>
                            <Icon name='shop' />
                        </Button.Content>
                        </Button>
                    <Button animated='vertical'>
                        <Button.Content hidden>Login</Button.Content>
                        <Button.Content visible>
                            <Icon name='user outline' />
                        </Button.Content>
                    </Button>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
        );
}

export default Menubar;