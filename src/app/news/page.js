import React from 'react';
import './header.css';
import { db } from "../../firebase-config";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faClipboardList, faBookOpen, faPen, faCalculator, faTrophy, faBell, faComments, faUser, faCogs, faChartLine, faEnvelope, faFileAlt, faSignInAlt, faUserPlus, faHome } from '@fortawesome/free-solid-svg-icons';


const Header = async () => {
  const icons = [
    { icon: faClipboardList, label: 'Recruitment' },
    { icon: faBookOpen, label: 'Syllabus' },
    { icon: faPen, label: 'Practice' },
    { icon: faCalculator, label: 'Admit Card Calculator' },
    { icon: faTrophy, label: 'Winner' },
    { icon: faBell, label: 'Updates' },
    { icon: faComments, label: 'Feedback' },
    { icon: faUser, label: 'Profile' },
    { icon: faCogs, label: 'Settings' },
    { icon: faChartLine, label: 'Analytics' },
    { icon: faEnvelope, label: 'Contact Us' },
    { icon: faFileAlt, label: 'Documents' },
    { icon: faSignInAlt, label: 'Login' },
    { icon: faUserPlus, label: 'Register' },
    { icon: faHome, label: 'Home' },
];

  let posts = []; // Initialize posts as an empty array

  try {
    const postsRef = collection(db, 'posts'); // Reference to the 'posts' collection
    const educationQuery = query(postsRef, where('category', '==', 'news'));

    // Execute the query and get the documents
    const querySnapshot = await getDocs(educationQuery); // Use getDocs to fetch the query result

    // Check if the collection is not empty
    if (!querySnapshot.empty) {
      posts = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      //console.log('Posts fetched:', posts);
    } else {
      console.log('No documents found in the posts collection!');
    }
  } catch (error) {
    console.error('Error fetching blog posts:', error);
  }

  const sortedPosts = posts.sort((a, b) => {
  
    return  b.createdAt - a.createdAt;
  }).slice(0, 20);
  
  function calculateRelativeTime(date) {
    const now = new Date();
    const diff = now - date;
  
    if (diff < 60000) { // Less than 1 minute
      return "just now";
    } else if (diff < 3600000) { // Less than 1 hour
      return `${Math.floor(diff / 60000)} minutes ago`;
    } else if (diff < 86400000) { // Less than 1 day
      return `${Math.floor(diff / 3600000)} hours ago`;
    } else {
      return date.toDateString();
    }
  }
  

  return (
    <>
      <div className="header">
        <nav className="navbar">
          <div className="logo">&#394;&#314;gital कट्टा</div>

          <input type="checkbox" id="nav-toggle" className="nav-toggle" />
          <label htmlFor="nav-toggle" className="nav-toggle-label">
            <span className="bar bar1"></span>
            <span className="bar bar2"></span>
            <span className="bar bar3"></span>
          </label>

          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/education">Education</a></li>
            <li><a href="/schemes">Schemes</a></li>
            <li className="close-menu"><label htmlFor="nav-toggle">✖</label></li>
          </ul>
        </nav>
      </div>



      {/* Scroll container */}
      <div className="scroll-container div2">
      {icons.map((item, idx) => (
        <div key={idx} className="scroll-block">
      <FontAwesomeIcon className='mobile-icon'
        icon={item.icon} 
        size="2x" 
        style={{ color: '#4CAF50', marginBottom: '5px' }} // Inline styling here
      />
      <div className='icon-label' style={{ 
        fontSize: '14px', 
        fontWeight: 'bold', 
        color: '#555' 
      }}>
        {item.label}
      </div>
        </div>
      ))}
    </div>


      <div class="announcement-container fixed">
      <div class="announcement-runner">"🧠 Threads of Thought, Flow of Knowledge | ✍️ Bind Your Ideas to Pen | 💪 Power of Pen, Revolution of Thought | 🔦 Walk in the Light of Knowledge | 🌟 Create Inspiration through Writing"</div>

      </div>


      {/* Posts List */}
      <div className="posts-list">
        {sortedPosts.map((post) => (
          <a key={post.id} href={`/blogs/${post.slug}`} className="post">
            <div className="post-content">
              <p className="post-title">{post.title}</p>
              <p className="post-date">{calculateRelativeTime(new Date(post.createdAt.seconds * 1000))}</p>
              <img  src={post.img} alt={`Post`} className="post-image" />
            </div>
          </a>
        ))}
      </div>

      <div class="updates-section">
        <h2>Important Updates</h2>
        <div class="scrolling-container fixed">
          <div class="scrolling-content">
          <div class="message-item">
            🛠️ <strong>Need assistance?</strong> We're here to help! Visit our support blog for guidance.🛠️
            </div>
            <div class="message-item">
            ❓ <strong>Have a question or issue?</strong> Check out our support blog for quick solutions.❓ 
            </div>
            <div class="message-item">
            💬 <strong> For all support-related queries, head over to our dedicated support blog.</strong>💬 
            </div>
          </div>
        </div>
      </div>



      <footer className="footer bg-light py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2 footer-section">
              <h5>Quick Links</h5>
              <ul className="list-group">
                <li className="list-group-item">
                  <a href="/about">About us</a>
                </li>
                <li className="list-group-item">
                  <a href="/contact-us">Contact us</a>
                </li>
                <li className="list-group-item">
                  <a href="/terms-and-conditions">Terms & Conditions</a>
                </li>
                <li className="list-group-item">
                  <a href="/copyright-notice">Copyright Notice</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col text-center mt-4">
              <p>&copy; {new Date().getFullYear()} Digital कट्टा. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Header;
