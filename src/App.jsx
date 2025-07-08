import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import WebDev from "./pages/WebDev";
import AiSolution from "./pages/AiSolution";
import MobileApp from "./pages/MobileApp";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<SoftwareDevelopment />} />
        <Route path="/webdev" element={<WebDev />} />
        <Route path="/ai" element={<AiSolution />} />
        <Route path="/mobileapp" element={<MobileApp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
