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
import './Navbar.css'
function NavScrollExample() {
  return (
    // <Navbar expand="lg" className="bg-body-tertiary h-50">
    //   <Container fluid>
    //     <Navbar.Brand href="#">Shopping</Navbar.Brand>

    //     <Navbar.Toggle aria-controls="navbarScroll" />
    //     <Form className="d-flex">
    //         <Form.Control
    //           type="search"
    //           placeholder="Search"
    //           className="me-2"
    //           aria-label="Search"
    //         />
    //         <Button variant="outline-success">Search</Button>
    //       </Form>
    //     <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
    //       <Nav
    //         className="me-auto my-0 my-lg-0 content"
    //         style={{ maxHeight: '150px' }}
    //         navbarScroll
    //       >
    //         <Nav.Link href="#action1">Home</Nav.Link>
    //         <Nav.Link href="#action2">User</Nav.Link>
    //         <NavDropdown title="User Name" id="navbarScrollingDropdown">
    //           <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
    //           <NavDropdown.Item href="#action4">
    //             Orders
    //           </NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action5">
    //             Logout
    //           </NavDropdown.Item>
    //         </NavDropdown>

    //       </Nav>

    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>



    // <Navbar expand="lg" className="bg-body-tertiary h-50">
    //   <Navbar.Brand href="#">Shopping</Navbar.Brand>
    //   <Form className="d-flex">
    //     <Form.Control
    //       type="search"
    //       placeholder="Search"
    //       className="me-2 searchbox"
    //       aria-label="Search"
    //       id="search"
    //     />
    //     <Button variant="outline-success">Search</Button>
    //   </Form>
    // </Navbar>


    // <Nav >
    //   <Nav.Item>Hii</Nav.Item>
    //   <Nav.Item>Hii</Nav.Item>
    //   <Nav.Item>Hii</Nav.Item>
    // </Nav>
    <div className="h-100 w-100 main">
      <Navbar expand="lg" className="bg-body-tertiary h-100">
        <Container fluid>
          <Navbar.Brand href="#">Shoping</Navbar.Brand>
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
                <Nav.Link href="/cart">Cart</Nav.Link>
                <Nav.Link href="/products">Products</Nav.Link>
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