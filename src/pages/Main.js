import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Main = () => {
  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    let url = "http://localhost:3004/products";
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="main">
      <div className="main_wrap">
        {product?.map((item) => (
          <ProductCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default Main;
