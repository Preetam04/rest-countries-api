import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountryDetail from "./Pages/CountryDetail";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countrydetail" element={<CountryDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
