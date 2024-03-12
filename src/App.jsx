import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ThankYou from "./pages/ThankYou";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/landing-page" element={<Landing />} />
        <Route path="/cerere-trimisa" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
