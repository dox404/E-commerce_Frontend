
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'
function NavScrollExample() {
  return (

    <div className="h-100 w-100 main">
      <Navbar expand="lg" className="bg-body-tertiary h-100">
        <Container fluid>
          <Navbar.Brand href="/">Shoping.com</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Form className="d-flex searchform">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 searchbox"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
            <div className="links">
              <Nav


                navbarScroll
              >
                <Nav.Link href="/">Home</Nav.Link>
                
                <Nav.Link href="/products">Products</Nav.Link>
                <Nav.Link href="/cart">Cart</Nav.Link>
                <NavDropdown title="User" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item href="/orders">
                    Orders
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>

              </Nav>
            </div>

          </Navbar.Collapse>
        </Container>
      </Navbar>




    </div>








  );
}

export default NavScrollExample;