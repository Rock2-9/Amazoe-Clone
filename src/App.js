import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import CheckOut from "./components/CheckOut";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/checkOut" element={<CheckOut />} />
      </Routes>
    </div>
  );
}

export default App;
