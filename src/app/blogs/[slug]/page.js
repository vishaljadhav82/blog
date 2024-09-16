import { db } from "../../../firebase-config";
import { collection, query, where, getDocs } from 'firebase/firestore';
import Head from 'next/head';

export async function generateMetadata({ params }) {
  const { slug } = params; // Get slug from params

  // Fetch post data from Firestore
  try {
    const postsRef = collection(db, 'posts');
    const q = query(postsRef, where('slug', '==', slug));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      const post = { id: doc.id, ...doc.data() };

      // Generate dynamic metadata based on post data
      return {
        title: post.title || "Blog", // Use post.title or a custom title generation logic
        description: post.description,  
        keywords: post.keywords,
        openGraph: {
          title: post.title || "Nlog",
          description: post.description,  
          images: [post.img],
        },
    
       };
    } else {
      // Handle "No post found" scenario for metadata (optional)
      console.log('No such document!'); // Or return a default metadata object
      return {
        title: 'Blog Post Not Found',
        description: 'The requested blog post could not be found.'
      };
    }
  } catch (error) {
    console.error('Error fetching blog post:', error);
    // Handle errors gracefully (optional)
    return {
      title: 'Error fetching blog post',
      description: 'An error occurred while retrieving the blog post.'
    };
  }
}   

const BlogPage = async ({ params }) => {
  const { slug } = params; // Get slug from params
  console.log("Requesting slug:", slug);
  console.log("Fetching slug:", slug);
  let post;


  try {
    const postsRef = collection(db, 'posts'); // Reference to the 'posts' collection
    const q = query(postsRef, where('slug', '==', slug)); // Create a query to filter by 'slug'
    const querySnapshot = await getDocs(q); // Get documents based on the query

    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0]; // Get the first document from the query
       post = { id: doc.id, ...doc.data() };
      console.log("Fetched post data:", post);

     
    } else {
      console.log('No such document!');
    }
  } catch (error) {
    console.error('Error fetching blog post:', error);
  }
  return (
    <>
      <main>
        <div
          dangerouslySetInnerHTML={{ __html: post ? post.content : "Content not available" }}
        />
      </main>
    </>
  );
};


export default BlogPage;
