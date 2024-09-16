// app/about/layout.js
"use client"
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AboutLayout({ children }) {
  return (
    <div className="container">
      <Header />
      <header className="bg-light p-3">
        <h1>About Us</h1>
      </header>
      {children}
      <Footer />
    </div>
  );
}
