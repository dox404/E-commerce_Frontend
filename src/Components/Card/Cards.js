import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Card.css'

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }} className="mt-5 card-container">
      <Card.Img variant="top" src="https://i.gadgets360cdn.com/products/large/redmi-note-12-5g-pro-plus-db-gadgets360-800x600-1673019783.jpg" />
      <Card.Body>
        <Card.Title>Redmi Note 10 pro</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className='btn btn-space'>Buy</Button>

        <Button variant="danger" className='btn btn-space'>Add to cart</Button>
      </Card.Body>
    </Card>
    
  );
}

export default BasicExample;