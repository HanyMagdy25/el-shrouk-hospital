import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import ScrollToTop from "react-scroll-to-top";
import Footer from "./components/Footer/Footer";
import About from "./pages/about/About";
import Home from "./pages/Home/Home";
import MedicalServices from "./pages/MedicalServices/MedicalServices";
import News from "./pages/News/News";
import NewsInside from "./pages/NewsInside/NewsInside";

function App() {
  function ScrollToTopAfterChangePage() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTopAfterChangePage />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<MedicalServices />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsInside />} />
        </Routes>
        <ScrollToTop smooth color="white" width="32" height="50"/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
