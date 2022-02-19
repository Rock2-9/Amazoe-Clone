import React from "react";
import "./checkOut.css";
import Subtotal from "./Subtotal";
function CheckOut() {
  return (
    <div className="checkOut">
      <div className="checkOut__left">
        <img
          className="checkOut__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/PrimeRewards/LP_Revamp/PC_Header_Banner._CB468631809_.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout__title"> shopping Basket</h2>

          {/* Basket */}
          {/* Basket */}
          {/* Basket */}
          {/* Basket */}
          {/* Basket */}
        </div>
      </div>
      <div className="checkOut__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default CheckOut;
