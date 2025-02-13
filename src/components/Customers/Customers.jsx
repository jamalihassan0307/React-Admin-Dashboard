import React from "react";
import "./Customers.css";
import { customersData } from "../../Data/Data";

const Customers = () => {
  return (
    <div className="Customers">
      <h1>Customers</h1>
      <div className="CustomersTable">
        <table>
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Total Spending</th>
              <th>Total Orders</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {customersData.map((customer, index) => (
              <tr key={index}>
                <td>#{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.spending}</td>
                <td>{customer.orders}</td>
                <td>
                  <span
                    className={`status ${
                      customer.orders > 10
                        ? "vip"
                        : customer.orders > 5
                        ? "active"
                        : "new"
                    }`}
                  >
                    {customer.orders > 10
                      ? "VIP"
                      : customer.orders > 5
                      ? "Active"
                      : "New"}
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

export default Customers;
