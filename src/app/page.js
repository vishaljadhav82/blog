"use client";
import React from 'react';
import { Container,Row, Col, ListGroup, Card, CardBody, CardTitle, CardText } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';


const Blogs = () => {
  
  return (
    <>
      
      <Header />
      <main className="main">
        <Container>
        <Row className="education-section">
      <Col xs={12} md={6}>
        <h2>Education</h2>
        <ListGroup>
          <ListGroup.Item action variant="light">
            <Card>
              <CardBody>
                <CardTitle>10 वी, 12 वी विद्यार्थ्यांची परीक्षा फी परत मिळणार, तुमचं नाव चेक करा | SSC HSC Board Exam Fees Refund 2024</CardTitle>
                <CardText>
                <a href="https://blog-lovat-zeta.vercel.app/blogs/ssc-hsc-exam-fees-refund">Click here</a>                </CardText>
              </CardBody>
            </Card>
          </ListGroup.Item>
          {/* Repeat ListGroup.Item for other blog posts */}
        </ListGroup>
      </Col>
      {/* Add content for the other half of the Row (optional) */}
    </Row>

        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Blogs;
