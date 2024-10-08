import { db } from "../firebase-config";
import { collection, getDocs } from 'firebase/firestore';

export default async function sitemap() {
    // Predefined static URLs
    let staticPosts = [
        { url: `https://www.digitalkatta.co.in/`, lastModified: new Date() },
        { url: `https://www.digitalkatta.co.in/blogs`, lastModified: new Date() },
        { url: `https://www.digitalkatta.co.in/about`, lastModified: new Date() },
        { url: `https://www.digitalkatta.co.in/contact-us`, lastModified: new Date() },
        { url: `https://www.digitalkatta.co.in/copyright-notice`, lastModified: new Date() },
        { url: `https://www.digitalkatta.co.in/terms-and-conditions`, lastModified: new Date() }
    ];

    try {
        const postsRef = collection(db, 'posts'); // Reference to the 'posts' collection
        const querySnapshot = await getDocs(postsRef); // Fetch all documents in the collection

        // Check if there are posts and extract the data
        if (!querySnapshot.empty) {
            const blogPosts = querySnapshot.docs.map(doc => {
                const data = doc.data();
                return {
                    url: `https://www.digitalkatta.co.in/blogs/${data.slug}`,
                    lastModified: data.updatedAt ? data.updatedAt.toDate() : new Date(), // Handle lastModified from data
                };
            });

            // Merge static posts with fetched blog posts
            return [...staticPosts, ...blogPosts];
        } else {
            console.log('No documents found in the posts collection!');
            return staticPosts; // Return static posts if no blogs are found
        }
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        return staticPosts; // Return static posts in case of error
    }
}
