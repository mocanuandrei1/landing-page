import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ThankYou from "./pages/ThankYou";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/landing-page" element={<Landing />} />
        <Route path="/landing-page/cerere-trimisa" element={<ThankYou />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
