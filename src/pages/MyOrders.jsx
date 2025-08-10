import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

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

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  return (
    <div>
      <h2 className="mb-6 text-3xl font-bold text-gray-800 dark:text-gray-100">
        🛒 My Orders
      </h2>

      {orders.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No orders yet.</p>
      ) : (
        <OrderList orders={orders} />
      )}
    </div>
  );
}

function OrderList({ orders }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {orders.map((order, index) => (
        <OrderItem key={index} order={order} index={index} />
      ))}
    </div>
  );
}

function OrderItem({ order, index }) {
  return (
    <Card
      sx={{
        borderRadius: 2,
        padding: 2,
        bgcolor: "background.paper",
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#000" : "#fff",
        boxShadow: (theme) =>
          theme.palette.mode === "dark" ? "none" : theme.shadows[3],
        border: (theme) =>
          theme.palette.mode === "dark" ? "1px solid #3f3f46" : "none",
      }}
    >
      <Typography
        variant="h6"
        component="h3"
        fontWeight="bold"
        className="text-center text-blue-700"
        gutterBottom
      >
        Order #{index + 1}
      </Typography>

      <Divider sx={{ marginBottom: "10px" }} />

      <div className="space-y-2 text-gray-700 dark:text-gray-300">
        <p>
          <strong>Date:</strong> {order.date}
        </p>
        <p>
          <strong>Total Items:</strong> {order.items.length}
        </p>
        <p>
          <strong>Total Price:</strong>{" "}
          <span className="text-green-600">${order.total.toFixed(2)}</span>
        </p>
        <p>
          <strong>Status:</strong>{" "}
          <span className="font-medium text-yellow-600 dark:text-yellow-400">
            Processing
          </span>
        </p>
      </div>
    </Card>
  );
}

export default MyOrders;
