import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { container } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <container>
          <Outlet />
        </container>
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
