import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Points from "./components/Puntos/Points";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Contribute from "./components/Contribute/ContributeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Auth0ProviderWithHistory from "./auth0";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (

      <Router>
        <Auth0ProviderWithHistory>
          <Preloader load={load} />
            <div className="App" id={load ? "no-scroll" : "scroll"}>
              <Navbar />
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project" element={<Projects />} />
                <Route path="/points" element={<Points />} />
                <Route path="/contribute" element={<Contribute />} />
                <Route path="*" element={<Navigate to="/"/>} />
              </Routes>
              <Footer />
            </div>
        </Auth0ProviderWithHistory>
      </Router>

  );
}

export default App;
