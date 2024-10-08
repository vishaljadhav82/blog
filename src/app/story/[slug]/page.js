import { db } from "../../../firebase-config";
import { collection, query, where, getDocs } from 'firebase/firestore';
import Script from 'next/script'
import Head from 'next/head';


export async function generateMetadata({ params }) {
    const y = 0;
    const { slug } = params;
  
  
    try {
      const postsRef = collection(db, 'webstory');
      const q = query(postsRef, where('slug', '==', slug));
      const querySnapshot = await getDocs(q);
  
      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        const post = { id: doc.id, ...doc.data() };
  
        return {
          title: post.title || "Blog",
          description: post.description,
          openGraph: {
            title: post.title || "Blog",
            description: post.description,
            images: [...post.images],
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
      const postsRef = collection(db, 'webstory');
      const q = query(postsRef, where('slug', '==', slug));
      const querySnapshot = await getDocs(q);
  
      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        post = { id: doc.id, ...doc.data() }; // Extract all post data including images
      } else {
        console.log('No such document!');
      }
    } catch (error) {
      console.error('Error fetching blog post:', error);
    }
  
    // Check if post exists and has an "images" array
    if (post && post.images && post.images.length > 0) {
      return (
        <>
          <Head>
            <title>{post.title} - Your Web Story</title>  {/* Use post title */}
            <link
              rel="stylesheet"
              href="https://cdn.ampproject.org/v0/amp-story-1.0.css"
            />
          </Head>
  
          <Script async src="https://cdn.ampproject.org/v0.js" />
          <Script async custom-element="amp-story" src="https://cdn.ampproject.org/v0/amp-story-1.0.js" />
  
          <amp-story standalone>
            {/* Dynamically render AMP story pages from images array */}
            {post.images.map((imageUrl, index) => (
              <amp-story-page key={index} id={`page${index + 1}`}>
                <amp-story-grid-layer template="fill">
                  <amp-img class="amp-img" src={imageUrl} layout="fill" alt="Image description" />
                </amp-story-grid-layer>
              </amp-story-page>
            ))}
          </amp-story>
        </>
      );
    } else {
      // Handle case where post doesn't exist or has no images
      return (
        <div>
          <h1>No such post or no images found!</h1>
        </div>
      );
    }
  };

  export default BlogPage;
