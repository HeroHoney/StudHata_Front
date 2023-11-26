// Roommates.jsx
import React, { useState } from 'react';
import NavBar from '../components/UI/NavBar/NavBar';
import Footer from '../components/UI/Footer/Footer';
import '../styles/Roommates.css';
import roommates from '../data/roommates';
import RentalFilter from '../components/filter/RentalFilter.jsx';

const Roommates = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [filterParams, setFilterParams] = useState({
    minPrice: '',
    maxPrice: '',
    petsAllowed: false,
    propertyType: '',
    region: '',
  });

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState(null);

  const handleFilter = (newFilterParams) => {
    setFilterParams(newFilterParams);
    setCurrentCardIndex(0);
  };

  const filteredRoommates = roommates.filter((roommate) => {
    if (filterParams.minPrice && parseInt(roommate.payment) < filterParams.minPrice) {
      return false;
    }
    if (filterParams.maxPrice && parseInt(roommate.payment) > filterParams.maxPrice) {
      return false;
    }
    if (filterParams.propertyType && roommate.type !== filterParams.propertyType) {
      return false;
    }
    if (filterParams.region && roommate.city !== filterParams.region) {
      return false;
    }
    return true;
  });

  const handleSwipeLeft = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % filteredRoommates.length);
    setSwipeDirection('swipe-left');
    setTimeout(() => setSwipeDirection(null), 300);
  };

  const handleSwipeRight = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + filteredRoommates.length) % filteredRoommates.length);
    setSwipeDirection('swipe-right');
    setTimeout(() => setSwipeDirection(null), 300);
  };

  return (
    <div>
      <NavBar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <RentalFilter onFilter={handleFilter} />
      {filteredRoommates.length > 0 && (
        <div className="mx-auto shadow-lg roommates-card mt-12">
          <div className={`swipe-container ${swipeDirection}`}>
            <div className={`swipe-card ${swipeDirection}`} key={filteredRoommates[currentCardIndex].fullName}>
              <div className="mt-6 border-t border-gray-100">
                <div className="px-4 sm:px-0">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">Ищу сожителя</h3>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">ФИО</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {filteredRoommates[currentCardIndex].fullName}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Город проживания</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        {filteredRoommates[currentCardIndex].city}
                    </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Университет</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        {filteredRoommates[currentCardIndex].uni}
                    </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Адрес квартиры</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        {filteredRoommates[currentCardIndex].address}
                    </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Ежемесячный платеж</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        {filteredRoommates[currentCardIndex].payment}
                    </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Дополнительная информация</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        {filteredRoommates[currentCardIndex].description}
                    </dd>
                </div>
              </div>
              <div className="swipe-actions">
                <button className="swipe-action" onClick={handleSwipeLeft}>
                ✖️
                </button>
                <button className="swipe-action" onClick={handleSwipeRight}>
                ❤️
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Roommates;
