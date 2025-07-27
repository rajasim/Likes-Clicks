import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import WebDev from "./pages/WebDev";
import MobileApp from "./pages/MobileApp";
import CyberSecurity from "./pages/CyberSecurity";
import MarketingAutomation from "./pages/MarketingAutomation";
import AIDevelopment from "./pages/AIDevelopment";
import ScrollToTop from "../ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/webdev" element={<WebDev />} />
        <Route path="/mobileapp" element={<MobileApp />} />
        <Route path="/CyberSecurity" element={<CyberSecurity />} />
        <Route path="/MarketingAutomation" element={<MarketingAutomation />} />
        <Route path="/AIDevelopment" element={<AIDevelopment />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
