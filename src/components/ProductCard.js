import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/product/${item?.id}`);
  };

  return (
    <div className="card" onClick={goDetail}>
      <img width="264px" height="396px" src={item.img} />
      <div className="card_info">
        <p className="new product">{item.new ? "신상품" : <br />}</p>
        <p>{item.title}</p>
        <p>₩{item.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
