"use client";
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Alert, Spinner } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import Link from 'next/link';
import { db } from '../../firebase-config';
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';
import { useRouter } from 'next/navigation';

const Blogs = () => {
  const router = useRouter();
  const { query: routerQuery } = router;

  const [currentPage, setCurrentPage] = useState(0);
  const [blogsPerPage] = useState(6);
  const [pageCount, setPageCount] = useState(0);
  const [currentBlogs, setCurrentBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      console.log('Fetching blogs...');

      try {
        console.log('Fetching from Firestore...');
        const postsRef = collection(db, 'posts');
        const q = query(
          postsRef,
          where('category', '==', 'schems') );
        const querySnapshot = await getDocs(q);
        const blogs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        setPageCount(Math.ceil(blogs.length / blogsPerPage));
        const offset = currentPage * blogsPerPage;
        setCurrentBlogs(blogs.slice(offset, offset + blogsPerPage));
      } catch (err) {
        console.error('Error fetching blogs:', err);
        setError('Failed to fetch blogs.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [currentPage]);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };

  if (loading) {
    return (<>
          <Header />
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Spinner animation="border" variant="primary" />
      </div>
      </>
    );
  }

  if (error) {
    return (<>
          <Header />
      <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Alert variant="danger">
          <Alert.Heading>Something went wrong!</Alert.Heading>
          <p>{error}</p>
        </Alert>
      </Container>
      </>
    );
  }

  if (currentBlogs.length === 0) return (<>
        <Header />
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Alert variant="danger">
        <Alert.Heading>Posts not found</Alert.Heading>
        <p>No posts available for the selected category.</p>
      </Alert>
    </Container>
    </>
  );

  return (
    <>
      <Head>
        <title>All Blogs</title>
        <meta name="description" content="Explore a wide variety of blogs." />
      </Head>
      <Header />
      <Container className="blogs-container">
        <h2 className="section-title">All Blogs</h2>
        <Row>
          {currentBlogs.map((blog) => (
            <Col md={4} className="blog-card" key={blog.id}>
              <Card>
                <Card.Img variant="top" src={blog.img} />
                <Card.Body>
                  <Card.Title>{blog.slug}</Card.Title>
                  <Card.Text>{blog.content.slice(0, 300)}...</Card.Text>
                  <Link href={`/blogs/${blog.slug}`} className="btn btn-primary">
                    Read More
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="pagination-container">
          <ReactPaginate
            previousLabel={'Previous'}
            nextLabel={'Next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            activeClassName={'active'}
          />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Blogs;
