import { ProductModel } from "@/models/product.model";
import React, { FC } from "react";

const ProductCard: FC<{ product: ProductModel }> = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="product-details">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-brand">Brand: {product.brand}</p>
        <p className="product-category">Category: {product.category}</p>
        <p className="product-price">
          Price: ${product.price}{" "}
          {product.discountPercentage > 0 && (
            <span className="product-discount">
              (-{product.discountPercentage}%)
            </span>
          )}
        </p>
        <p className="product-stock">Stock: {product.stock}</p>
        <p className="product-rating">Rating: {product.rating}</p>
      </div>
    </div>
  );
};

export default ProductCard;
