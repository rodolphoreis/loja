"use client";
import React from "react";
import { useParams } from "next/navigation";

const Product = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Products: {id}</h1>
    </div>
  );
};

export default Product;
