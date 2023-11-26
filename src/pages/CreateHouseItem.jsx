import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/UI/NavBar/NavBar';
import Footer from '../components/UI/Footer/Footer';

const CreateHouseItem = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    type: '',
    region: '',
    price: '',
    description: '',
    highlights: [],
    details: [],
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleHighlightsChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      highlights: value.split(',').map((highlight) => highlight.trim()),
    });
  };

  const handleDetailsChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      details: value.split(',').map((detail) => detail.trim()),
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь вы можете выполнить отправку данных на сервер или другую логику обработки формы
    console.log('Form data submitted:', formData);
    // После успешной отправки перенаправьте пользователя на страницу с созданным объявлением
    navigate('/created-house-item');
  };

  return (
    <div>
     <NavBar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <div className="container mx-auto mt-24">
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          {/* Выбор типа */}
          <div className="mb-4">
            <label htmlFor="type" className="block text-sm font-medium text-gray-700">
              Тип:
            </label>
            <select
              name="type"
              id="type"
              className="mt-1 p-2 border rounded-md w-full"
              value={formData.type}
              onChange={handleInputChange}
            >
              <option value="">-</option>
              <option value="Квартира">Квартира</option>
              <option value="Хостел">Хостел</option>
              <option value="Общежитие">Общежитие</option>
            </select>
          </div>

          {/* Выбор региона */}
          <div className="mb-4">
            <label htmlFor="region" className="block text-sm font-medium text-gray-700">
              Регион:
            </label>
            <select
              name="region"
              id="region"
              className="mt-1 p-2 border rounded-md w-full"
              value={formData.region}
              onChange={handleInputChange}
            >
              <option value="">-</option>
              <option value="Астана">Астана</option>
              <option value="Алматы">Алматы</option>
              <option value="Алматы">Шымкент</option>
            </select>
          </div>

          {/* Поле для цены */}
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

          {/* Поле для описания */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Описание:
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

          {/* Поле для удобств (comma-separated) */}
          <div className="mb-4">
            <label htmlFor="highlights" className="block text-sm font-medium text-gray-700">
            Удобства (разделенные запятой):
            </label>
            <input
              type="text"
              name="highlights"
              id="highlights"
              className="mt-1 p-2 border rounded-md w-full"
              value={formData.highlights.join(',')}
              onChange={handleHighlightsChange}
            />
          </div>

          {/* Поле для дополнительных данных (comma-separated) */}
          <div className="mb-4">
            <label htmlFor="details" className="block text-sm font-medium text-gray-700">
            Поблизости находятся (разделенные запятой):
            </label>
            <input
              type="text"
              name="details"
              id="details"
              className="mt-1 p-2 border rounded-md w-full"
              value={formData.details.join(',')}
              onChange={handleDetailsChange}
            />
          </div>

          {/* Поле для изображения */}
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Фото:
            </label>
            <input
              type="file"
              accept="image/*"
              name="image"
              id="image"
              className="mt-1 p-2 border rounded-md w-full"
              onChange={handleImageChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600 transition duration-300"
          >
            Создать
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CreateHouseItem;
