import React from "react";
import { Outlet } from "react-router-dom";
import { container } from "react-bootstrap";
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
    </>
  );
};

export default App;
