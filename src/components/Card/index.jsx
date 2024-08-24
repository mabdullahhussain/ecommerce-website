import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProducts } from '../../config/firebase'; // Ensure this is the correct import

const Card = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };
    fetchProducts();
  }, []);

  const goToDetail = (product) => {
    navigate('/detail/' + product.id);
  };

  return (
    <div className="container mx-auto px-4 mt-6">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((item) => (
          <div
            key={item.id}
            className="card bg-base-100 shadow-xl p-4 cursor-pointer"
            onClick={() => goToDetail(item)}
          >
            <figure className="relative">
              <img
                className="h-72 w-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                src={item.image}
                alt={item.title}
              />
            </figure>
            <div className="card-body p-4">
              <h1 className="card-title text-2xl font-bold">{item.title}</h1>
              <h2 className="text-xl font-medium mt-2">Rs{item.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
