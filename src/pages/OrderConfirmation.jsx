import { useEffect, useState } from "react";

function OrderConfirmation() {
  const [checkoutData, setCheckoutData] = useState(() => {
    const stored = localStorage.getItem("checkoutData");
    return stored ? JSON.parse(stored) : [];
  });

  console.log(checkoutData);
  return (
    <div>
      <h2>Order Confirmation</h2>
      <p>Thanks for placing an order</p>
    </div>
  );
}

export default OrderConfirmation;
