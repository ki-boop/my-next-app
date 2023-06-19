import React, { FC, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { ProductModel } from "@/models/product.model";
import { ProductsAPI } from "./api/products";
import Button from "@/components/StyledButton";

const Home: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data } = useQuery<{ products: ProductModel[] }>(
    ["products", currentPage],
    () => ProductsAPI.getProducts(currentPage, 10)
  );

  const handleNextPage = async () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="wrapper">
      <div className="product-wrapper">
        {data?.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="btns-wrapper">
        <Button onClick={handlePrevPage}>Prev</Button>
        <Button onClick={handleNextPage}>Next</Button>
      </div>
    </div>
  );
};

export default Home;
