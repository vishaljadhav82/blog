import { db } from "../../../firebase-config";
import { collection, query, where, getDocs } from 'firebase/firestore';
import 'bootstrap/dist/css/bootstrap.min.css'; // Already imported in your case
import '@/components/header/header.css'

export async function generateMetadata({ params }) {
  const { slug } = params;
<<<<<<< HEAD
  const blocks = Array.from({ length: 30 }, (_, idx) => `Block ${idx + 1}`);
=======
>>>>>>> d9b682b51b86d6f815814c83383304a84814a02a

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
  const { slug } = params;
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
<<<<<<< HEAD
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
        {blocks.map((block, idx) => (
          <div key={idx} className="scroll-block">
            {block}
          </div>
        ))}
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-20 ">
=======
<header className="header-style-1">
    <nav className="navbar navbar-expand-lg main-header">
      <div className="container">
        <div className="row w-100">
          <div className="col-12 col-lg-auto text-center text-lg-left">
            <a className="navbar-brand" href="/">
              <h1>Dharashiv Diaries</h1>
            </a>
          </div>
          <div className="col-12 col-lg d-block d-lg-flex justify-content-lg-end mt-3 mt-lg-0">
            <ul className="navbar-nav me-auto w-100 d-lg-flex justify-content-lg-between">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/blogs">Blogs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/news">News</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/schemes">Government Schemes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/jobs">Jobs/Recruitment</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/education">Education</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-20">
>>>>>>> d9b682b51b86d6f815814c83383304a84814a02a
            <div className="card">
              <div className="card-body">
                <div className="card-text" dangerouslySetInnerHTML={{ __html: post ? post.content : "Content not available" }} />
              </div>
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
