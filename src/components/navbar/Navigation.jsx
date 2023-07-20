import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const Navigation = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container style={{ justifyContent: 'center' }}>
                    {/* <Navbar.Brand >My Portfolio Site</Navbar.Brand> */}
                    <Nav >
                        <Nav.Link as={Link} to="/" >Projects</Nav.Link>
                        <Nav.Link as={Link} to="/background" >Background</Nav.Link>
                        <Nav.Link as={Link} to="/snippets" >Snippets</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation


