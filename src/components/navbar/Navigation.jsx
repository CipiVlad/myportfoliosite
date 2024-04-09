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
                    <Nav >
                        <Nav.Link as={Link} to="/myportfoliosite" >Projects</Nav.Link>
                        <Nav.Link as={Link} to="/myportfoliosite/snippets" >Snippets</Nav.Link>
                        <Nav.Link as={Link} to="/myportfoliosite/in-progress" >In Progress</Nav.Link>
                        <Nav.Link as={Link} to="/myportfoliosite/upcoming-projects" >Upcoming Projects</Nav.Link>
                        <Nav.Link as={Link} to="/myportfoliosite/whoami" >#whoami</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation


