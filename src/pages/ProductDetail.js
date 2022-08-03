import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();
  const [detail, setDetail] = useState();

  const getDetail = async () => {
    let url = `http://localhost:3004/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setDetail(data);
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <div className="detail">
      <div className="detail_wrap">
        <img width="396px" height="564px" src={detail?.img}></img>
        <div className="detail_info">
          <p className="detail_item">{detail?.title}</p>
          <p className="detail_item">₩{detail?.price}</p>
          <p className="detail_item">{detail?.new ? "신상품" : ""}</p>
          <select className="detail_item">
            {detail?.size.map((sizes) => (
              <option>{sizes}</option>
            ))}
          </select>
          <button className="detail_item">구매하기</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
