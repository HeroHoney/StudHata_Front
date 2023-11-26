import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="text-white py-6 footer">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h2 className="text-2xl font-semibold">О нас</h2>
          <p className="mt-2 text-gray-100">
            Мы предоставляем вам широкий выбор вариантов жилья, включая комнаты в квартирах, квартиры целиком, дома и общежития.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Наши контакты</h2>
          <p className="mt-2 text-gray-100">Email: studhata@gmail.com</p>
          <p className="text-gray-100">Телефон: +7 778 833 86 40</p>
          <p className="text-gray-100">Адрес: Толе би 59,г. Алматы</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Социальные сети</h2>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
