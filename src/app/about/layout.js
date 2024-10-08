// app/about/layout.js
"use client"
import Footer from '@/components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'

export default function AboutLayout({ children }) {
  const blocks = Array.from({ length: 30 }, (_, idx) => `Block ${idx + 1}`);

  return (
    <>    
    <div className="header">
        <nav className="navbar">
          <div className="logo">Digital कट्टा</div>

          <input type="checkbox" id="nav-toggle" className="nav-toggle" />
          <label htmlFor="nav-toggle" className="nav-toggle-label">
            <span className="bar bar1"></span>
            <span className="bar bar2"></span>
            <span className="bar bar3"></span>
          </label>

          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/news" rel="nofollow">News</a></li>
            <li><a href="/education">Education</a></li>
            <li><a href="/schemes">Schemes</a></li>
            <li className="close-menu"><label htmlFor="nav-toggle">✖</label></li>
          </ul>
        </nav>
      </div>

      
    <div className="container">
      <header className="bg-light p-3">
        <h1>About Us</h1>
      </header>
      {children}
      <Footer />
    </div>
    </>
  );
}
