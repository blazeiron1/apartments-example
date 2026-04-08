import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ApartmentsPage from "./pages/ApartmentsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="bmitreski-watermark" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apartments" element={<ApartmentsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
