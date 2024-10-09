// components/GoogleWebStory.js
import Head from 'next/head';
import Script from 'next/script';
import { db } from '../../../firebase-config';
import { collection, query, where, getDocs } from 'firebase/firestore';

export const config = { amp: true };

export async function generateMetadata({ params }) {
  const { slug } = params;

  try {
    const postsRef = collection(db, 'webstory');
    const q = query(postsRef, where('slug', '==', slug));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      const post = { id: doc.id, ...doc.data() };

      return {
        title: post.title || 'Blog',
        description: post.description,
        openGraph: {
          title: post.title || 'Blog',
          description: post.description,
          images: [...post.images],
          favicon: '../../icon.png',
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
      post = { id: doc.id, ...doc.data() };
    } else {
      console.log('No such document!');
    }
  } catch (error) {
    console.error('Error fetching blog post:', error);
  }

  if (post && post.images && post.images.length > 0) {
    return (
      <>
        <Head>
          <title>{post.title} - Your Web Story</title>
          <link
            rel="stylesheet"
            href="https://cdn.ampproject.org/v0/amp-story-1.0.css"
          />
        </Head>

        <Script async src="https://cdn.ampproject.org/v0.js" />
        <Script async custom-element="amp-story" src="https://cdn.ampproject.org/v0/amp-story-1.0.js" />

        <amp-story
          standalone
          title="Digital Katta"
          publisher="Vishal Jadhav"
          publisher-logo-src="https://firebasestorage.googleapis.com/v0/b/blog-3551c.appspot.com/o/digital_katta_1.png?alt=media&token=72ceba7c-8fb0-4269-9a11-319d5a711d55"
        >
          {post.images.map((imageUrl, index) => (
            <amp-story-page key={index} id={`page${index + 1}`}>
              <amp-story-grid-layer template="fill">
                <amp-img src={imageUrl} layout="fill" alt="Image description" />
              </amp-story-grid-layer>
              <amp-story-grid-layer template="vertical">
                <h1>{post.title}</h1>
                <p>Some content for page {index + 1}.</p>
              </amp-story-grid-layer>
            </amp-story-page>
          ))}
        </amp-story>
      </>
    );
  } else {
    return <div><h1>No such post or no images found!</h1></div>;
  }
};

export default BlogPage;
