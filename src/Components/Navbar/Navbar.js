// import React from 'react';
// import './Navbar.css'
// const navbar = () => {
//     return (
//         <>
//             <div className='navbar'></div>
//             <input
//                 type="text"
//                 placeholder="Search here"
//             />
//             <button>Search</button>
//             <select>

//                 <option value="fruit">Fruit</option>

//                 <option value="vegetable">Vegetable</option>

//                 <option value="meat">Meat</option>

//             </select>
//         </>
//     );
// }
// export default navbar;
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar expand="lg"  className="bg-body-tertiary h-50">
      <Container fluid>
        <Navbar.Brand href="#">Shopping</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll 
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">User</Nav.Link>
            <NavDropdown title="User Name" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Orders
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;