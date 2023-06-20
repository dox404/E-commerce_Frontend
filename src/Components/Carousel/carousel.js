import Carousel from 'react-bootstrap/Carousel';
import './carousel.css'

function Carousle() {
  return (
    <Carousel className='crousel-container'>
    <Carousel.Item interval={1000}>
      <img
        className="d-block carousel-img"
        
        src="https://www.searchenginejournal.com/wp-content/uploads/2022/08/google-shopping-ads-6304dccb7a49e-sej.png"
        alt="First slide"
      />
      {/* <Carousel.Caption>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption> */}
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
        className="d-block carousel-img"
        
        src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?w=1060&t=st=1687247913~exp=1687248513~hmac=0a8264b74e106d2d1425947d2aa8a3594cf1bd0e44d6e6a54f3f0ee984267fb7"
      />
      {/* <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption> */}
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block carousel-img"
     
        src="https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2022/05/Malls-in-Mumbai.jpg?fit=1000%2C678&ssl=1"
        alt="Third slide"
      />
      {/* <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption> */}
    </Carousel.Item>
  </Carousel>
  
  );
}

export default Carousle;