import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Layout() {
  return (
    <>
      <Header />
      <main className="max-w-wrapper m-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
