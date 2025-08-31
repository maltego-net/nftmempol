import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/Home";
import MemeGenerator from "./components/meme-generator";
import Header from "./components/Header";   
import "./App.css";

function Shell() {
  return (
    <div className="retro-bg retro-bg--gif">
      <main className="page">
        <Header />           
        <Outlet />          
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Shell />}>
          <Route path="/" element={<Home />} />
          <Route path="/memegenerator" element={<MemeGenerator />} />
        </Route>
      </Routes>
    </Router>
  );
}
