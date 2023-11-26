import React, { useState } from "react";
import "./Filter.css";

const RentalFilter = ({ onFilter }) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [petsAllowed, setPetsAllowed] = useState(false);
  const [propertyType, setPropertyType] = useState(""); 
  const [region, setRegion] = useState("");

  const handleFilter = () => {
    onFilter({
      minPrice,
      maxPrice,
      petsAllowed,
      propertyType, 
      region, 
    });
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex flex-wrap justify-between items-center filter">
      <div className="flex items-center mb-4 w-full sm:w-auto">
        <label className="mr-2 text-sm font-medium text-gray-700">Минимальная цена</label>
        <input
          type="number"
          className="py-2 px-3 border rounded"
          placeholder="Минимальная цена"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
      </div>
      <div className="flex items-center mb-4 w-full sm:w-auto">
        <label className="mr-2 text-sm font-medium text-gray-700">Максимальная цена</label>
        <input
          type="number"
          className="py-2 px-3 border rounded"
          placeholder="Максимальная цена"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
      <div className="flex items-center mb-4 w-full sm:w-auto">
        <input
          type="checkbox"
          className="mr-2 text-blue-500"
          checked={petsAllowed}
          onChange={() => setPetsAllowed(!petsAllowed)}
        />
        <label className="text-sm font-medium text-gray-700">Разрешены домашние животные</label>
      </div>
      <div className="flex items-center mb-4 w-full sm:w-auto">
        <label className="mr-2 text-sm font-medium text-gray-700">Тип жилья</label>
        <select
          className="py-2 px-3 border rounded"
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
        >
          <option value="">Все</option>
          <option value="Комната">Комната</option>
          <option value="Квартира">Квартира</option>
          <option value="Хостел">Хостел</option>
          <option value="Общежитие">Общежитие</option>
        </select>
      </div>
      <div className="flex items-center mb-4 w-full sm:w-auto">
        <label className="mr-2 text-sm font-medium text-gray-700">Регион</label>
        <select
          className="py-2 px-3 border rounded"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          <option value="">Выберите регион</option>
          <option value="Алматы">г. Алматы</option>
          <option value="Астана">г. Астана</option>
          <option value="Шымкент">г. Шымкент</option>
        </select>
      </div>
      <button
        className="text-white py-2 px-4 rounded hover:bg-blue-600 w-full sm:w-auto login-buttom"
        onClick={handleFilter}
      >
        Применить фильтр
      </button>
    </div>
  );
};

export default RentalFilter;
