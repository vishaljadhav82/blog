import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import './header.css';
import logo from '../../app/logo.png'; // Adjust the path if necessary

const Header = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('home');

  // Example routes (adjust as needed)
  const routes = [
    { path: '/', label: 'Home' },
    { path: '/blogs', label: 'Blogs' },
    { path: '/news', label: 'News' },
    { path: '/schemes', label: 'Government Schemes' },
    { path: '/jobs', label: 'Jobs/Recruitment' },
    { path: '/education', label: 'Education' },
  ];

  const handleTabClick = (path) => {
    setActiveTab(path);
    router.push(path);
  };

  return (
    <header className="header-style-1">
      <Navbar expand="lg" className="main-header">
        <Container>
          <Navbar.Brand>
            <h1>Dharashiv Diaries</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {routes.map((route) => (
                <button
                  key={route.path}
                  className={`navfont ${activeTab === route.path ? 'active' : ''}`}
                  onClick={() => handleTabClick(route.path)}
                >
                  {route.label}
                </button>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;