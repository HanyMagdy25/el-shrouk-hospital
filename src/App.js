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
import MeetOurTeam from "./pages/MeetOurTeam/MeetOurTeam";
import AppWrap from "./wrapper/AppWrap";

const url_main = "https://el-shrouk-hospital-dashboard.technomasrsystems.com";

function App() {
  const [loadingSettings, setLoadingSettings] = useState(true);
  const [loadingServices, setLoadingServices] = useState(true);
  const [servicesData, setServicesData] = useState([]);
  const [mainPageHero, setMainPageHero] = useState({});
  const [contact_data, setContact_data] = useState({});
  const [siteName, setSiteName] = useState({});
  const [logo, setLogo] = useState("");
  const [social, setSocial] = useState({});
  const [loadingLogo, setLoadingLogo] = useState(true);
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
        setLoadingLogo(false);
        setMainPageHero(data?.data[0]?.mainPage);
        setContact_data(data?.data[0]?.contact_data);
        setSocial(data?.data[0]?.social);
        setSiteName(data?.data[0]?.general_Settings);
        setLogo(data?.data[0]?.siteLogo);

        console.log(data);
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
      });
  }, [language]);

  // To Fetch News
  const [loadingEvents, setLoadingEvents] = useState(true);
  const [events, setEvents] = useState([]);
  const [galleryContent, setGalleryContent] = useState({});
  useEffect(() => {
    fetch(`${url_main}/api/newsEvents`, {
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
        setLoadingEvents(false);
        setEvents(data);
        setGalleryContent(data?.staticMediaTitles);
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
                loadingEvents={loadingEvents}
                events={events}
                logo={logo}
                siteName={siteName}
                loadingLogo={loadingLogo}
              />
            }
          />
          <Route
            path="/about"
            element={
              <About
                language={language}
                setLanguage={setLanguage}
                logo={logo}
                siteName={siteName}
                loadingLogo={loadingLogo}
              />
            }
          />
          <Route
            path="/services"
            element={
              <MedicalServices
                language={language}
                setLanguage={setLanguage}
                servicesData={servicesData}
                loadingServices={loadingServices}
                logo={logo}
                siteName={siteName}
                loadingLogo={loadingLogo}
              />
            }
          />
          <Route
            path="/news"
            element={
              <News
                language={language}
                setLanguage={setLanguage}
                loadingEvents={loadingEvents}
                events={events}
                galleryContent={galleryContent}
                logo={logo}
                siteName={siteName}
                loadingLogo={loadingLogo}
              />
            }
          />
          <Route
            path="/news/:id"
            element={
              <NewsInside
                language={language}
                setLanguage={setLanguage}
                loadingEvents={loadingEvents}
                events={events}
                logo={logo}
                siteName={siteName}
                loadingLogo={loadingLogo}
              />
            }
          />
          {/* <Route
            path="/contact"
            element={
              <ContactUsPage
                language={language}
                setLanguage={setLanguage}
                logo={logo}
                siteName={siteName}
                loadingLogo={loadingLogo}
              />
            }
          /> */}
          <Route
            path="/team"
            element={
              <MeetOurTeam
                language={language}
                setLanguage={setLanguage}
                logo={logo}
                siteName={siteName}
                loadingLogo={loadingLogo}
              />
            }
          />
        </Routes>
        <ScrollToTop smooth color="white" width="32" height="50" />
        <ContactUs
          contact_data={contact_data}
          social={social}
          language={language}
          loadingSettings={loadingSettings}
        />
        <Footer
          contact_data={contact_data}
          social={social}
          language={language}
          siteName={siteName}
          logo={logo}
        />
      </BrowserRouter>
    </div>
  );
}

export default AppWrap(App);
