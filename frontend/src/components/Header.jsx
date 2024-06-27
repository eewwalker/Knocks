import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingBasket, FaUserAstronaut } from 'react-icons/fa';
import { PiVinylRecordDuotone } from 'react-icons/pi';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header>
            <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
                <Container>
                    <Link to='/' className='text-decoration-none'>
                        <Navbar.Brand>
                            <PiVinylRecordDuotone /> Knocks
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto'>
                            <Link to='/cart' className='text-decoration-none pe-3'>
                                <Navbar.Text>
                                    <FaShoppingBasket /> Cart
                                </Navbar.Text>
                            </Link>
                            <Link to='/login' className='text-decoration-none'>
                            <Navbar.Text>
                                <FaUserAstronaut /> Sign In
                            </Navbar.Text>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};




export default Header;