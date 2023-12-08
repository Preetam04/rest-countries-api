import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountryDetail from "./Pages/CountryDetail";
import { useStateContext } from "./ContextProvider";

function App() {
  const { darkmode } = useStateContext();

  return (
    <div className={`${darkmode ? "dark" : ""}`}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countrydetail/:name" element={<CountryDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
