import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import User from "./pages/User";
const App = () => {
  return (
    // <div style={{ marginTop: "80px" }}>
    <div>
      {/* <Header /> */}
      <Header />
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route path="/user" Component={User} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
