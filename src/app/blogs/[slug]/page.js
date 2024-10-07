import { db } from "../../../firebase-config";
import { collection, query, where, getDocs } from 'firebase/firestore';
import 'bootstrap/dist/css/bootstrap.min.css'; // Already imported in your case
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faClipboardList, faBookOpen, faPen, faCalculator, faTrophy, faBell, faComments, faUser, faCogs, faChartLine, faEnvelope, faFileAlt, faSignInAlt, faUserPlus, faHome } from '@fortawesome/free-solid-svg-icons';

export async function generateMetadata({ params }) {
  const y = 0;
  const { slug } = params;


  try {
    const postsRef = collection(db, 'posts');
    const q = query(postsRef, where('slug', '==', slug));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      const post = { id: doc.id, ...doc.data() };

      return {
        title: post.title || "Blog",
        description: post.description,
        keywords: post.keywords,
        openGraph: {
          title: post.title || "Blog",
          description: post.description,
          images: [post.img],
          favicon: "../../icon.png", // Replace with the URL of your favicon

        },
      };
    } else {
      return {
        title: 'Blog Post Not Found',
        description: 'The requested blog post could not be found.',
      };
    }
  } catch (error) {
    return {
      title: 'Error fetching blog post',
      description: 'An error occurred while retrieving the blog post.',
    };
  }
}

const BlogPage = async ({ params }) => {

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

  const { slug } = params;
  const blocks = Array.from({ length: 30 }, (_, idx) => `Block ${idx + 1}`);
  let post = null;

  try {
    const postsRef = collection(db, 'posts');
    const q = query(postsRef, where('slug', '==', slug));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      post = { id: doc.id, ...doc.data() };
    } else {
      console.log('No such document!');
    }
  } catch (error) {
    console.error('Error fetching blog post:', error);
  }

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
            <li><a href="/education">Education</a></li>
            <li><a href="/jobs">Jobs</a></li>
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
        <div class="announcement-runner">
          🚨 Important Announcement: Website maintenance will occur tonight from 12 AM to 2 AM. Please save your work! 🚨
          📢 New Feature: We have added dark mode support! Check it out in your settings. 📢
          ⚠️ Security Reminder: Please do not share your login credentials with anyone. Stay safe! ⚠️

        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-20 ">
            <div className="card">
              <div className="card-body">
                <div className="card-text" dangerouslySetInnerHTML={{ __html: post ? post.content : "Content not available" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="updates-section">
        <h2>Important Updates</h2>
        <div class="scrolling-container fixed">
          <div class="scrolling-content">
            <div class="message-item">
              🚨 <strong>Maintenance Alert:</strong> The website will undergo maintenance from 12 AM to 2 AM tonight. Please save your work! 🚨
            </div>
            <div class="message-item">
              📢 <strong>New Feature:</strong> Dark mode is now available! Switch in your settings to check it out. 📢
            </div>
            <div class="message-item">
              ⚠️ <strong>Security Reminder:</strong> Keep your login credentials safe. Do not share them with anyone! ⚠️
            </div>
            <div class="message-item">
              💡 <strong>Tip:</strong> You can customize your dashboard using the settings menu. Try it today! 💡
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
              <p>&copy; {new Date().getFullYear()} Dharashiv Diaries. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default BlogPage;
