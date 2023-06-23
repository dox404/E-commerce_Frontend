
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
          <Navbar.Brand href="/admin/product-management">Admin Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
        
          <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
            <div className="links">
              <Nav


                navbarScroll
              >
                {/* <Nav.Link href="/">All Products</Nav.Link> */}
                <Nav.Link href="/admin/all-products">all Products</Nav.Link>
                <Nav.Link href="/admin/add-Product">Add Products</Nav.Link>
                
                <Nav.Link href="/admin/delete-product">Delete Product</Nav.Link>
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