import React from 'react';
import { Container, Row, Col, ListGroup, Form, Button } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          
          <Col md={4} className="footer-section">
            <h5>Quick Links</h5>
            <ListGroup>
              <ListGroup.Item><a href="/about">About us</a></ListGroup.Item>
              <ListGroup.Item><a href="/contact-us">Contact us</a></ListGroup.Item>
              <ListGroup.Item><a href="/terms-and-conditions">Terms & Conditions</a></ListGroup.Item>
              <ListGroup.Item><a href="/copyright-notice">Copyright Notice</a></ListGroup.Item>

            </ListGroup>
                 
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-4">
            <p>&copy; {new Date().getFullYear()} Dharashiv Diaries. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
