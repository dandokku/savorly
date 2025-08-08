import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";

function SharedLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default SharedLayout;
