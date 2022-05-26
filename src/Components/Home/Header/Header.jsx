import React, { useEffect } from 'react';
import './Headerstyle.css';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap'




import $ from 'jquery'
export default function Header() {




    return <div>

        {/* <Navbar collapseOnSelect expand="lg" className='navbgcolor'>
            <Container>
                <Navbar.Brand href="#home"><img src="A._Logo_File__1_-removebg-preview.png" alt="" width="50px" />  Saad Tax Associates</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to='/'>
                            <Nav.Link  >

                                <a class="nav-link active " aria-current="page" href="#">
                                    <button className='btn navbtn'>Home</button>
                                </a>

                            </Nav.Link>
                        </Link>

                        <Link to='/services'>
                            <Nav.Link >
                                <a class="nav-link" >   <button className='btn navbtn'>Services</button> </a>
                            </Nav.Link>
                        </Link>
                        <Nav.Link to="/update"> <a class="nav-link " href="#" >   <button className='btn navbtn'>Updates</button> </a></Nav.Link>
                        <Nav.Link to="/about">  <a class="nav-link " href="#" >   <button className='btn navbtn'>About</button> </a></Nav.Link>
                        <Nav.Link to="/contact"><a class="nav-link " href="#" >   <button className='btn navbtn'>Contact</button> </a></Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar> */}





        <nav class="navbar navbar-expand-xl navbar-light  navbgcolor">
            <div class="container">
                <a class="navbar-brand " href="#"><img src="A._Logo_File__1_-removebg-preview.png"  className="Img_header_nav" alt="" width="80px" />
                    <span className='text_nav_band'>
                        <span className=' '>
                            <span className=' Change_Color'>Saad</span>  <span className='Log_text '>Tax Associates</span>
                        </span>
                        <small className='text_small'>You deserve the best tax firm</small>
                    </span>


                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">

                    <i class="far fa-bars "></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to='/'>
                                <a class="nav-link active " aria-current="page" href="#">
                                    <button className='btn navbtn'>Home</button>
                                </a>
                            </Link>
                        </li>

                        <li class="nav-item">
                            <Link to='/services'>    <a class="nav-link" href="#">   <button className='btn navbtn'>Services</button> </a>
                            </Link>
                        </li>
                        <li class="nav-item">

                            <Link to="/update">
                                <a class="nav-link " href="#" >   <button className='btn navbtn'>Updates</button> </a>
                            </Link>
                        </li>
                        <li class="nav-item">

                            <Link to="/about">
                                <a class="nav-link " href="#" >   <button className='btn navbtn'>About</button> </a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/contact">
                                <a class="nav-link " href="#" >   <button className='btn navbtn'>Contact</button> </a>
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>

    </div>;
}