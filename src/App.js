import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import CheckOut from "./components/CheckOut";
import LoginPage from "./components/LoginPage";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./components/Payment";

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
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
}

export default App;
