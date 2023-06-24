import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header";
import Banner from "../Banner";
import Buy from "../Buy";
import Rent from "../Rent";
import Sell from "../Sell";
import Footer from "../Footer";

const MainRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route
          path="/buy"
          element={
            <>
              <Banner /> <Buy />
            </>
          }
        />
        <Route
          path="/rent"
          element={
            <>
              <Banner /> <Rent />
            </>
          }
        />
        <Route
          path="/sell"
          element={
            <>
              <Banner /> <Sell />
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default MainRouter;
