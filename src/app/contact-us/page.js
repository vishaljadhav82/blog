"use client"
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ContactPage() {
  return (
    <div>
        <Header />
      {/* About Me Section */}
      <section className="card mb-5">
        <h2 className='card-title'>Contact Us</h2>
        <p className='card-body'>
       If you have any queries regarding Site, Advertisement, and any other issue, please feel free to contact me at vishalvp9014@gmail.com

</p>
        
      </section>
      <Footer />
   </div>
  );
}