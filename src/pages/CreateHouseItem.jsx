import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/UI/NavBar/NavBar';
import Footer from '../components/UI/Footer/Footer';
import { createHousing } from '../store/features/housing/housingSlice.js'; 

const CreateHouseItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isLoading = useSelector((state) => state.housing.isLoading);

  const generateUniqueId = () => {
    return 'realtor_' + Math.random().toString(36).substr(2, 9);
  };

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    deliveryPeriod: '',
    typeOfHousing: '',
    price: '',
    city: '',
    area: '',
    address: '',
    realtorId: generateUniqueId()
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
    dispatch(createHousing(formData));
  };

  return (
    <div>
      <NavBar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <div className="container mx-auto mt-24 mb-20">
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Название:
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="mt-1 p-2 border rounded-md w-full"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Дополнительная информация:
            </label>
            <input
              type="text"
              name="description"
              id="description"
              className="mt-1 p-2 border rounded-md w-full"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="deliveryPeriod" className="block text-sm font-medium text-gray-700">
              Период аренды:
            </label>
            <input
              type="text"
              name="deliveryPeriod"
              id="deliveryPeriod"
              className="mt-1 p-2 border rounded-md w-full"
              value={formData.deliveryPeriod}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="typeOfHousing" className="block text-sm font-medium text-gray-700">
              Тип:
            </label>
            <select
              name="typeOfHousing"
              id="typeOfHousing"
              className="mt-1 p-2 border rounded-md w-full"
              value={formData.typeOfHousing}
              onChange={handleInputChange}
            >
              <option value="">-</option>
              <option value="Квартира">Квартира</option>
              <option value="Хостел">Хостел</option>
              <option value="Общежитие">Общежитие</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              Цена:
            </label>
            <input
              type="text"
              name="price"
              id="price"
              className="mt-1 p-2 border rounded-md w-full"
              value={formData.price}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
              Город:
            </label>
            <select
              name="city"
              id="city"
              className="mt-1 p-2 border rounded-md w-full"
              value={formData.city}
              onChange={handleInputChange}
            >
              <option value="">-</option>
              <option value="Астана">Астана</option>
              <option value="Алматы">Алматы</option>
              <option value="Алматы">Шымкент</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="area" className="block text-sm font-medium text-gray-700">
              Микрорайон:
            </label>
            <input
              type="text"
              name="area"
              id="area"
              className="mt-1 p-2 border rounded-md w-full"
              value={formData.area}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Улица,дом/квартира:
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

          <button
            type="submit"
            className="w-full text-white p-2 rounded-md transition duration-300 login-buttom"
            disabled={isLoading} 
          >
            {isLoading ? 'Creating...' : 'Create'}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CreateHouseItem;
