
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
function NavScrollExample() {
  const navigate = useNavigate()
  const data = localStorage.getItem('user')
  const ParsedData = JSON.parse(data)
  console.log(data)
  const Clear = () => {

    localStorage.clear()
    navigate('/')

  }
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

                {
                  data ? <div style={{ "display": "inline-flex" }}><Nav.Link href="/">Home</Nav.Link>

                    <Nav.Link href="/products">Products</Nav.Link>
                    <Nav.Link href="/cart">Cart</Nav.Link>
                    {/* <Nav.Link href="/cart"><img src={ParsedData.image}></img></Nav.Link> */}

                    <NavDropdown title={
                      <div className="pull-left">
                        <img className="thumbnail-image"
                          src={ParsedData.image}
                          alt="user pic"
                        />
                      </div>} id="navbarScrollingDropdown">
                      <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                      <NavDropdown.Item href="/orders">
                        Orders
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item><Button onClick={Clear}> Logout</Button>

                      </NavDropdown.Item>
                    </NavDropdown>
                  </div> : <div style={{ "display": "inline-flex" }}>
                    <Nav.Link href="/signup">Sign Up</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                  </div>
                }


              </Nav>
            </div>

          </Navbar.Collapse>
        </Container>
      </Navbar>




    </div>








  );
}

export default NavScrollExample;