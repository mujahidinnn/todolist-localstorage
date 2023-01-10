import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Add from "./components/Add";
// import Edit from "./components/Edit";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/add" element={<Add />} /> */}
          {/* <Route path="/edit" element={<Edit />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
