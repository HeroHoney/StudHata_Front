import React, { useState } from 'react';
import NavBar from "../components/UI/NavBar/NavBar";
import Footer from '../components/UI/Footer/Footer';
import '../styles/Roommates.css';

const CreateRoommate = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    city: '',
    uni: '',
    address: '',
    payment: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь вы можете выполнить отправку данных на сервер или другую логику обработки формы
    console.log('Form data submitted:', formData);
  };

  return (
    <div>
     <NavBar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <div className="container mx-auto mt-24">
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          {/* Поля для ввода данных */}
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              ФИО:
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              className="mt-1 p-2 border rounded-md w-full"
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
              Город:
            </label>
            <input
              type="text"
              name="city"
              id="city"
              className="mt-1 p-2 border rounded-md w-full"
              value={formData.city}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="uni" className="block text-sm font-medium text-gray-700">
              Университет:
            </label>
            <input
              type="text"
              name="uni"
              id="uni"
              className="mt-1 p-2 border rounded-md w-full"
              value={formData.uni}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Адрес:
            </label>
            <input
              type="text"
              name="address"
              id="address"
              className="mt-1 p-2 border rounded-md w-full"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="payment" className="block text-sm font-medium text-gray-700">
            Ежемесячный платеж:
            </label>
            <input
              type="text"
              name="payment"
              id="payment"
              className="mt-1 p-2 border rounded-md w-full"
              value={formData.payment}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Дополнительная информация:
            </label>
            <textarea
              name="description"
              id="description"
              rows="4"
              className="mt-1 p-2 border rounded-md w-full"
              value={formData.description}
              onChange={handleInputChange}
            ></textarea>
          </div>

          {/* Кнопка для отправки формы */}
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600 transition duration-300"
          >
            Create Listing
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CreateRoommate;
