import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Cover from "./Components/Cover";
import LoginSuccess from "./Components/LogInSuccess";
import Auth from "./Page/Auth";
import Billing from "./Page/Billing";
import Order from "./Page/Order";
import Payment from "./Page/Payment";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cover />} />
          <Route path="/login/*" element={<Auth />} />
          <Route path="/login-success" element={<LoginSuccess />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/Billing" element={<Billing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
