import {Navbar,Nav,Container } from 'react-bootstrap'
import classes from './styles.module.css'
import {Headercart} from '../../ecommerce'
import Logo from '../../../assets/logo.png'
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
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Categories</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
          </Nav>
          <Nav >
            <Nav.Link href="#home">Login</Nav.Link>
            <Nav.Link href="#link">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header