import React, { useState } from "react";
import RentalFilter from "/Users/batyrbekasel/Desktop/StudHata_front/studhata_front/studhata/src/components/filter/RentalFilter.jsx"; 
import Footer from "../components/UI/Footer/Footer";
import NavBar from "../components/UI/NavBar/NavBar";
import '/Users/batyrbekasel/Desktop/StudHata_front/studhata_front/studhata/src/styles/Houses.css';
import { useLoaderData } from "react-router-dom";
import products from '/Users/batyrbekasel/Desktop/StudHata_front/studhata_front/studhata/src/data/houses.jsx';


const Houses = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const [filterParams, setFilterParams] = useState({
    minPrice: "", 
    maxPrice: "", 
    petsAllowed: false, 
    propertyType: "", 
    region: "", 
  });
  

  const handleFilter = (newFilterParams) => {
    setFilterParams(newFilterParams);
  };

  const filteredProducts = products.filter((product) => {
    if (filterParams.minPrice && parseInt(product.price) < filterParams.minPrice) {
      return false;
    }
    if (filterParams.maxPrice && parseInt(product.price) > filterParams.maxPrice) {
      return false;
    }

    if (filterParams.petsAllowed && !product.petsAllowed) {
      return false;
    }

    if (filterParams.propertyType && product.type !== filterParams.propertyType) {
      return false;
    }

    if (filterParams.region && product.region !== filterParams.region) {
      return false;
    }
    return true;
  });
  

  return (
    <div>
      <NavBar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <RentalFilter onFilter={handleFilter}/> 
      <div className="mx-auto mt-12 max-w-2xl sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8 shadow-lg houses">
        <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full shadow-lg w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={`/houses/${product.type}/${product.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.region}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.type}</p>
                  <p className="mt-1 text-sm text-gray-500">{product.price}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.publishDate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Houses;
