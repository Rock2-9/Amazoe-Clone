import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import "./orders.css";
import { useStateValue } from "../StateProvider";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    db.collection("user")
      .doc(user?.uid)
      .collection("orders")
      .orderBy("created", "desc")
      .onSnapshot((snapshot) => {
        setOrders(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders?.map((order) => {
          <Order order={order} />;
        })}
      </div>
    </div>
  );
}

export default Orders;
