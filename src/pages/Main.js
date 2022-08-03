import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Main = () => {
  const [product, setProduct] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProduct = async () => {
    let searchQuery = query.get("q") || "";
    let url = `http://localhost:3004/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };
  useEffect(() => {
    getProduct();
  }, [query]);
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
