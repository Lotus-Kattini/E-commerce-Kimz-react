import {Navbar,Nav,Container } from 'react-bootstrap'
import classes from './styles.module.css'
import { Headercart } from '@components/ecommerce'
import Logo from '@assets/logo.png'
import { NavLink } from 'react-router-dom'
const {headerContainer,logo}=classes

const Header = () => {
  return (
    <header>
        <div className={headerContainer}>
            {/* <h1 className={headerLogo}><span>our</span><Badge bg='info'>Ecom</Badge></h1> */}
            <img src={Logo} alt="logo" className={logo}/>
            <Headercart/>
        </div>
        <Navbar expand="lg" className="bg-body-tertiary" bg='dark' data-bs-theme='dark'>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to={'home'}>Home</Nav.Link>
            <Nav.Link as={NavLink} to={'categories'} >Categories</Nav.Link>
            <Nav.Link as={NavLink} to={'about-us'} >About</Nav.Link>
          </Nav>
          <Nav >
            <Nav.Link as={NavLink} to={'login'} href="#home">Login</Nav.Link>
            <Nav.Link as={NavLink} to={'register'} >Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header