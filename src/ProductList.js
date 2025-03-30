// ProductList.js
import React, { useState } from 'react';

const ProductList = ({ products, addToCart, removeFromCart }) => {
  return (
    <div className="product-list">
      <h2>Product List</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <div className="product-info">
              <img src={product.image} alt={product.name} />
              <div>
                <strong>{product.name}</strong>
                <p className="product-description">{product.description}</p>
              </div>
            </div>
            <div className="product-actions">
              <div>${product.price}</div>
              <div>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
                <button onClick={() => removeFromCart(product)}>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
