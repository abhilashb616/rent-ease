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
      <Banner />
      <Routes>
        <Route
          path="/rent-ease/buy"
          element={
            <>
               <Buy />
            </>
          }
        />
        <Route
          path="/rent-ease/rent"
          element={
            <>
               <Rent />
            </>
          }
        />
        <Route
          path="/rent-ease/sell"
          element={
            <>
               <Sell />
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default MainRouter;
