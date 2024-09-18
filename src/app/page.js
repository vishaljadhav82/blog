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
               <Card>
              <CardBody>
                <CardTitle>नोकरीच्या मुलाखतीत यशस्वी कसे व्हा?</CardTitle>
                <CardText>
                <a href="https://blog-lovat-zeta.vercel.app/blogs/How-to-Succeed-in-Job-Interviews-in-Marathi">Click here</a>                </CardText>
              </CardBody>
            </Card> <Card>
              <CardBody>
                <CardTitle>तंत्रज्ञान आणि शिक्षण: एक नवीन युग (Technology and Education: A New Era)</CardTitle>
                <CardText>
                <a href="https://blog-lovat-zeta.vercel.app/blogs/Technology-and-Education-A-New-Era">Click here</a>                </CardText>
              </CardBody>
            </Card> <Card>
              <CardBody>
                <CardTitle>शिक्षणात गुणवत्ता कशी वाढवू?</CardTitle>
                <CardText>
                <a href="https://blog-lovat-zeta.vercel.app/blogs/How-to-Improve-Quality-in-Education">Click here</a>                </CardText>
              </CardBody>
            </Card> <Card>
              <CardBody>
                <CardTitle>आपल्याला मिळणार्‍या सरकारी योजना: एक संपूर्ण मार्गदर्शक</CardTitle>
                <CardText>
                <a href="https://blog-lovat-zeta.vercel.app/blogs/Government-Schemes-Available-to-You">Click here</a>                </CardText>
              </CardBody>
            </Card> <Card>
              <CardBody>
                <CardTitle>सरकारी योजनांचा आढावा: आपल्याला मिळणारे लाभ</CardTitle>
                <CardText>
                <a href="https://blog-lovat-zeta.vercel.app/blogs/overview-government-schemes">Click here</a>                </CardText>
              </CardBody>
            </Card> <Card>
              <CardBody>
                <CardTitle>शिक्षणात तंत्रज्ञानाचा वापर: एक आधुनिक दृष्टीकोन</CardTitle>
                <CardText>
                <a href="https://blog-lovat-zeta.vercel.app/blogs/Use-of-Technology-in-EducationA-Modern-Perspective">Click here</a>                </CardText>
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
