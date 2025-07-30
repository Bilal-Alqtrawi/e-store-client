import { useEffect } from "react";
import { Link } from "react-router-dom";

function OrderConfirmation() {
  useEffect(function () {
    localStorage.removeItem("checkoutData");
    localStorage.removeItem("cartItems");
  }, []);
  return (
    <div className="p-8 text-center">
      <h1>🎉 Thank You for Your Purchase!</h1>
      <p>Your order has been successfully received and is being processed.</p>
      <img
        src="https://cdn-icons-png.flaticon.com/512/3159/3159066.png"
        alt="Success"
        width={150}
        className="my-8"
      />
      <Link to="/products">
        <button className="px-[20px] py-[10px] text-base">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
}

export default OrderConfirmation;