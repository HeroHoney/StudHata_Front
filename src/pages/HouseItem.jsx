import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/UI/Footer/Footer';
import NavBar from '../components/UI/NavBar/NavBar';

import { StarIcon } from '@heroicons/react/20/solid'
import products from '../data/houses.jsx';
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function HouseItem() {
  const { id } = useParams();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const selectedProduct = products.find((product) => product.id === parseInt(id));

  const openWhatsAppChat = () => {
    const phoneNumber = '+77788338640';
    window.location.href = `https://wa.me/${phoneNumber}`;
  };

  return (
    <div>
       <NavBar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
       <div className="bg-white mt-12">
        <div className="pt-6">

        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={selectedProduct.imageSrc}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={selectedProduct.imageSrc}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={selectedProduct.imageSrc}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={selectedProduct.imageSrc}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* selectedProduct info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{selectedProduct.type}, {selectedProduct.region}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">selectedProduct information</h2>
            <p className="text-3xl tracking-tight text-gray-900">{selectedProduct.price}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>
            <button className="bg-indigo-500 text-white px-4 py-2 rounded-md mt-4 login-buttom" onClick={openWhatsAppChat}>
                  Написать
                </button>
                <p className="text-gray-500 text-sm mt-2">Verified by StudAgents</p>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            <div>
            <h2 className="text-lg font-bold text-gray-900">Описание</h2>
              <div className="space-y-6">
                <p className="text-base text-gray-900">{selectedProduct.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-bold text-gray-900">Удобства</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {selectedProduct.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-lg font-bold text-gray-900">Поблизости находятся:</h2>
              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {selectedProduct.details.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <Footer/>
    </div>
  );
}

export default HouseItem;
