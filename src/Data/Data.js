// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";

// Recent Card Imports
import img1 from "../imgs/img1.jpg";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.jpg";
import img4 from "../imgs/img4.jpeg";
import img5 from "../imgs/img5.jpg";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Orders",
  },
  {
    icon: UilUsersAlt,
    heading: "Customers",
  },
  {
    icon: UilPackage,
    heading: "Products",
  },
  {
    icon: UilChart,
    heading: "Analytics",
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Sales",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];

// Add this to your existing Data.js
export const ordersData = [
  {
    orderId: "#123456",
    customer: "John Doe",
    product: "Laptop Pro",
    amount: 999,
    status: "completed",
  },
  {
    orderId: "#123457",
    customer: "Jane Smith",
    product: "Smartphone X",
    amount: 699,
    status: "pending",
  },
  {
    orderId: "#123458",
    customer: "Bob Johnson",
    product: "Tablet Mini",
    amount: 449,
    status: "processing",
  },
  {
    orderId: "#123459",
    customer: "Alice Brown",
    product: "Smart Watch",
    amount: 299,
    status: "completed",
  },
  {
    orderId: "#123460",
    customer: "Charlie Wilson",
    product: "Wireless Earbuds",
    amount: 159,
    status: "pending",
  },
];

// Add more customers data
export const customersData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    spending: "$1,200",
    orders: 12,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    spending: "$850",
    orders: 8,
  },
  {
    id: 3,
    name: "Bob Wilson",
    email: "bob@example.com",
    spending: "$350",
    orders: 3,
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice@example.com",
    spending: "$2,500",
    orders: 15,
  },
  {
    id: 5,
    name: "Charlie Davis",
    email: "charlie@example.com",
    spending: "$630",
    orders: 6,
  },
];

export const productsData = [
  {
    id: 1,
    name: "Laptop Pro",
    category: "Electronics",
    price: "$999",
    stock: 50,
    status: "In Stock",
  },
  {
    id: 2,
    name: "Smartphone X",
    category: "Electronics",
    price: "$699",
    stock: 30,
    status: "Low Stock",
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    category: "Accessories",
    price: "$159",
    stock: 100,
    status: "In Stock",
  },
  {
    id: 4,
    name: "Smart Watch",
    category: "Wearables",
    price: "$299",
    stock: 0,
    status: "Out of Stock",
  },
  {
    id: 5,
    name: "Tablet Mini",
    category: "Electronics",
    price: "$449",
    stock: 15,
    status: "Low Stock",
  },
];
