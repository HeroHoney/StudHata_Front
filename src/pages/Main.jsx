// Main.js
import React, { useState } from 'react';
import NavBar from '../components/UI/NavBar/NavBar';
import Button from '../components/button/Button';
import "../styles/Main.css"
import Hero from '../components/UI/Hero/Hero';
import Feature from '../components/UI/Feature/Feature.jsx';
import BlogSection from '../components/UI/BlogSection/BlogSection';
import ContactSales from '../components/UI/Contact/ContactSales';
import Footer from '../components/UI/Footer/Footer';

const Main = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gradient">
      <NavBar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} isRegistering />
      <Hero/>
      <Feature/>
      <BlogSection/>
      <ContactSales/>
      <Footer/>
    </div>
  );
}

export default Main;
