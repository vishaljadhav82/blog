"use client"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

export default function TermsAndConditions() {
    return (
      <div className="container">
        <Header />
        <h1 className="text-center mt-5">Terms and Conditions</h1>
        <div className="card mt-4">
          <div className="card-body">
            <p>
              Welcome 
            </p>
            <p>
              By accessing or using this blog, you agree to be bound by these terms and conditions.
            </p>
            <p>
              Acceptable Use
            </p>
            <p>
              You agree not to use this blog for any illegal or unauthorized purpose. You are prohibited from:
            </p>
            <ul>
              <li>Engaging in any activity that could damage, disable, overburden, or impair the blog or interfere with any other person's use of the blog.</li>
              <li>Attempting to gain unauthorized access to any part of the blog or to any other systems or networks connected to the blog.</li>
              <li>Violating any applicable local, state, national, or international laws.</li>
            </ul>
            <p>
              Copyright and Intellectual Property
            </p>
            <p>
              All content on this blog, including text, images, and other materials, is the property of Vishal Jadhav and is protected by copyright laws. You may not reproduce, distribute, modify, or use this content for commercial purposes without prior written permission.
            </p>
            <p>
              Comments and User-Generated Content
            </p>
            <p>
              If you choose to leave a comment or contribute other content to this blog, you agree to be solely responsible for such content. You represent and warrant that you have the right to submit such content and that it does not violate any third-party rights.
            </p>
            <p>
              Disclaimer of Warranties
            </p>
            <p>
              This blog is provided on an "as is" and "as available" basis, without any warranties of any kind, either express or implied. We make no representations or warranties about the accuracy, completeness, or reliability of the content on this blog.
            </p>
            <p>
              Limitation of Liability
            </p>
            <p>
              In no event shall we be liable for any damages whatsoever, including, without limitation, direct, indirect, incidental, consequential, or punitive damages, arising out of or in connection with your use of this blog.
            </p>
            <p>
              Changes to the Terms
            </p>
            <p>
              We may update these terms and conditions from time to time. Your continued use of this blog after any such changes constitutes your acceptance of the modified terms.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }