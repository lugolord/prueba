import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ProductCard({ product, bgColor }) {
  return (
    <Col lg={4} className='mb-3' key={product.id}>
      <Card className={bgColor}>
        <Card.Img variant="top" src={product.images[0]} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
          <Card.Text>
            ${product.price}
          </Card.Text>
          <Button variant="primary">Buy</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}