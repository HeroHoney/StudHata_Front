import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="footer-section">
          <h2 className="footer-heading">О нас</h2>
          <p className="footer-text">
            Мы предоставляем вам широкий выбор вариантов жилья, включая комнаты в квартирах, квартиры целиком, дома и общежития.
          </p>
        </div>
        <div className="footer-section">
          <h2 className="footer-heading">Наши контакты</h2>
          <p className="footer-text">Email: studhata@gmail.com</p>
          <p className="footer-text">Телефон: +7 778 833 86 40</p>
          <p className="footer-text">Адрес: Толе би 59, г. Алматы</p>
        </div>
        <div className="footer-section">
          <h2 className="footer-heading">Социальные сети</h2>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <FaFacebook />
            </a>
            <a href="#" className="social-icon">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/studhata.kz?igshid=YzVkODRmOTdmMw==" className="social-icon">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
