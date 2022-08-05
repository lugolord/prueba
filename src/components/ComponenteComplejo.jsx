import styles from '../styles/ComponenteComplejo.module.css';
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ProductCard from './ProductCard';

export default function ComponenteComplejo() {

  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function getProducts() {
    const response = await fetch('https://dummyjson.com/products');
    const results = await response.json();
    const products = results.products;
    setProducts(products);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
  <Container fluid>
    <Row as='header' className='bg-dark text-light p-3 text-center'>
      <h1>My ecommerce</h1>
      <nav className={styles.navbar}>
        <a href='#' className={styles.link}>Home</a>
        <a href='#' className={styles.link}>Products</a>
        <a href='#' className={styles.link}>About us</a>
        <a href='#' className={styles.link}>Contact</a>
      </nav>
      <Button variant="outline-light" onClick={handleShow} style={{ position: 'absolute', right: 10, width: 100 }}>
      Cart
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Products...
        </Offcanvas.Body>
      </Offcanvas>
    </Row>
    <Row as='main' className='mt-3'>
      { products.map(product => product.price < 500 ? 
        <ProductCard product={product} key={product.id} bgColor='bg-danger'/> 
        : 
        <ProductCard product={product} key={product.id} bgColor='bg-light' />) 
      }
    </Row>
  </Container>
  );
}