import React from "react";
import "./Orders.css";
import { ordersData } from "../../Data/Data";

const Orders = () => {
  return (
    <div className="Orders">
      <h1>Orders</h1>
      <div className="OrdersTable">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {ordersData.map((order, index) => (
              <tr key={index}>
                <td>{order.orderId}</td>
                <td>{order.customer}</td>
                <td>{order.product}</td>
                <td>${order.amount}</td>
                <td>
                  <span className={`status ${order.status}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
