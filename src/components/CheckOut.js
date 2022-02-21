import React from "react";
import "./checkOut.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../StateProvider";

function CheckOut() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkOut">
      <div className="checkOut__left">
        <img
          className="checkOut__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/PrimeRewards/LP_Revamp/PC_Header_Banner._CB468631809_.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkOut__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default CheckOut;
