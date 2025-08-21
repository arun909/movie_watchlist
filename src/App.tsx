import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Watchlist from "./pages/Watchlist";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Watchlist />} />   {/* default */}
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
