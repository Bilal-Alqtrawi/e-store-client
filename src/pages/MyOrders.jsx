import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

localStorage.setItem(
  "orders",
  JSON.stringify([
    {
      date: "2025-08-01",
      items: [
        { title: "Essentials Undercounter Fridge", price: 169, qty: 1 },
        { title: 'Samsung 55" 4K Smart TV', price: 799, qty: 1 },
      ],
      total: 968,
    },
    {
      date: "2025-07-25",
      items: [{ title: "Dell XPS 13 Laptop", price: 1099, qty: 1 }],
      total: 1099,
    },
    {
      date: "2025-07-15",
      items: [
        { title: "Logitech MX Master 3 Mouse", price: 99.99, qty: 2 },
        { title: "Mechanical Keyboard", price: 149.99, qty: 1 },
      ],
      total: 349.97,
    },
  ]),
);

function MyOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(function () {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  return (
    <div className="p-4">
      <h2 className="mb-4 text-2xl font-semibold">My Orders</h2>

      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <OrderList orders={orders} />
      )}
    </div>
  );
}

function OrderList({ orders }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {orders.map((order, index) => (
        <OrderItem key={index} order={order} index={index} />
      ))}
    </div>
  );
}

function OrderItem({ order, index }) {
  return (
    <Card className="p-5">
      <Typography
        fontWeight="bold"
        textAlign="center"
        fontSize={22}
        letterSpacing={0.8}
      >
        Order #{index + 1}
      </Typography>
      <Typography>Date: {order.date}</Typography>
      <Typography>Total Items: {order.items.length}</Typography>
      <Typography>Total Price: ${order.total.toFixed(2)}</Typography>
      <Typography>
        Status: <span className="text-green-600">Processing</span>
      </Typography>
    </Card>
    // <div className="rounded-lg border bg-white p-4 shadow-sm">
    //   <p className="font-bold">Order #{index + 1}</p>
    //   <p>Date: {order.date}</p>
    //   <p>Total Items: {order.items.length}</p>
    //   <p>Total Price: ${order.total.toFixed(2)}</p>
    //   <p>
    //     Status: <span className="text-green-600">Processing</span>
    //   </p>
    // </div>
  );
}

export default MyOrders;
