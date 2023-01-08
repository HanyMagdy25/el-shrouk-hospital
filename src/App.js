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
import ContactUs from "./components/ContactUs/ContactUs";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";

const url_main = "https://el-shrouk-hospital-dashboard.technomasrsystems.com";

function App() {
  const [loadingSettings, setLoadingSettings] = useState(true);
  const [loadingServices, setLoadingServices] = useState(true);
  const [servicesData, setServicesData] = useState([]);
  const [settings, setSettings] = useState([]);
  const [mainPageHero, setMainPageHero] = useState({});
  const [contact_data, setContact_data] = useState({});
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
      document.getElementsByTagName("body")[0].style.fontFamily =
        "'Noto Kufi Arabic', sans-serif";
    } else {
      document.getElementsByTagName("body")[0].style.direction = "ltr";
      document.getElementsByTagName("body")[0].style.fontFamily =
        "'Montserrat', sans-serif";
    }
  }, [language]);

  useEffect(() => {
    fetch(`${url_main}/api/settings`, {
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
        setLoadingSettings(false);
        setSettings(data);
        setMainPageHero(data?.data[0]?.mainPage);
        setContact_data(data?.data[0]?.contact_data);
        // console.log("data.mainPage", data?.data[0]?.mainPage);
      });
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
        setLoadingServices(false);
        setServicesData(data);
        // console.log("setServicesData",data)
      });
  }, [language]);

  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTopAfterChangePage />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                language={language}
                setLanguage={setLanguage}
                mainPageHero={mainPageHero}
                loadingSettings={loadingSettings}
                servicesData={servicesData}
                loadingServices={loadingServices}
              />
            }
          />
          <Route
            path="/about"
            element={<About language={language} setLanguage={setLanguage} />}
          />
          <Route
            path="/services"
            element={
              <MedicalServices
                language={language}
                setLanguage={setLanguage}
                servicesData={servicesData}
                loadingServices={loadingServices}
              />
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
          <Route
            path="/contact"
            element={
              <ContactUsPage language={language} setLanguage={setLanguage} />
            }
          />
        </Routes>
        <ScrollToTop smooth color="white" width="32" height="50" />
        <ContactUs contact_data={contact_data} language={language} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
