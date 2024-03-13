import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ThankYou from "./pages/ThankYou";
import Header from "./components/Header";
import { useMediaQuery } from "react-responsive";
import MobileFooter from "./components/MobileFooter";

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/landing-page" element={<Landing />} />
        <Route path="/cerere-trimisa" element={<ThankYou />} />
      </Routes>
      {isMobile && <MobileFooter />}
    </BrowserRouter>
  );
}

export default App;
