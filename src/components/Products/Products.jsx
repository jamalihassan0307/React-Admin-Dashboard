import React from "react";
import "./Products.css";
import { productsData } from "../../Data/Data";
import { UilEdit, UilTrashAlt } from "@iconscout/react-unicons";

const Products = () => {
  return (
    <div className="Products">
      <h1>Products</h1>
      <div className="ProductsHeader">
        <button className="AddProductBtn">+ Add Product</button>
      </div>
      <div className="ProductsTable">
        <table>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {productsData.map((product, index) => (
              <tr key={index}>
                <td>#{product.id}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>
                  <span
                    className={`status ${
                      product.stock === 0
                        ? "outStock"
                        : product.stock <= 20
                        ? "lowStock"
                        : "inStock"
                    }`}
                  >
                    {product.stock === 0
                      ? "Out of Stock"
                      : product.stock <= 20
                      ? "Low Stock"
                      : "In Stock"}
                  </span>
                </td>
                <td className="Actions">
                  <UilEdit />
                  <UilTrashAlt />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
