"use client";
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Alert, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';


const Blogs = () => {
  
  return (
    <>
      
      <Header />
      <main className="main">
        <Container>
          <Row>
            <Col md={8}>
              <h2>Welcome to our website!</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec diam euismod, lacinia odio sed, tincidunt quam. Donec finibus neque ornare ipsum euismod, ac lobortis magna blandit. Sed eu laoreet magna. Donec nec diam euismod, lacinia odio sed, tincidunt quam. Donec finibus neque ornare ipsum euismod, ac lobortis magna blandit. Sed eu laoreet magna.</p>
              <a href="https://blog-lovat-zeta.vercel.app/blogs/ssc-hsc-exam-fees-refund" className="btn btn-primary">Learn More</a>
            </Col>
            <Col md={4}>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Blogs;
