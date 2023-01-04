import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import ScrollToTop from "react-scroll-to-top";
import Footer from "./components/Footer/Footer";
import About from "./pages/about/About";
import Home from "./pages/Home/Home";
import MedicalServices from "./pages/MedicalServices/MedicalServices";
import News from "./pages/News/News";
import NewsInside from "./pages/NewsInside/NewsInside";

const url_main = "https://el-shrouk-hospital-dashboard.technomasrsystems.com"

function App() {
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState("en");
  function ScrollToTopAfterChangePage() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }

  // To Change Direction In Body html and css
  useEffect(() => {
    document.documentElement.setAttribute("lang", language);
    if (language === "ar") {
      document.getElementsByTagName("body")[0].style.direction = "rtl";
    } else {
      document.getElementsByTagName("body")[0].style.direction = "ltr";
    }
  }, [language]);

  useEffect(() => {
    fetch(`${url_main}/api/services`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        lang: language,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        console.log("33",data)
        // setSettings(data.data);
    
      });
  }, [language]);

  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTopAfterChangePage />
        <Routes>
          <Route
            path="/"
            element={<Home language={language} setLanguage={setLanguage} />}
          />
          <Route path="/about" element={<About setLanguage={setLanguage} />} />
          <Route
            path="/services"
            element={
              <MedicalServices language={language} setLanguage={setLanguage} />
            }
          />
          <Route
            path="/news"
            element={<News language={language} setLanguage={setLanguage} />}
          />
          <Route
            path="/news/:id"
            element={
              <NewsInside language={language} setLanguage={setLanguage} />
            }
          />
        </Routes>
        <ScrollToTop smooth color="white" width="32" height="50" />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
