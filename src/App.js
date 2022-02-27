import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Orders from "./components/Orders";
import CheckOut from "./components/CheckOut";
import LoginPage from "./components/LoginPage";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51KWlGqSF2Kauk40NJ5k6TvjjETOXyEIP7Gy4L17LK9kYXZAw46nKUex379fNAzf9TsmhXtOZSrpYC1VfK8jxwYfb00mOkX9Q4d"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is >>,", authUser);

      if (authUser) {
        //the user just logged in /the user was logged in
        dispatch({ type: "SET_USER", user: authUser });
      } else {
        //user is logged out
        dispatch({ type: "SET_USER", user: null });
      }
    });
  }, []);
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/checkOut" element={<CheckOut />} />

        <Route
          path="/payment"
          element={
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          }
        />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
}

export default App;
