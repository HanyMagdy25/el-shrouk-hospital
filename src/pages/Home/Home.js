import Hero from "../../components/Hero/Hero";
import News from "../../components/News/News";
import ServecisSection from "../../components/ServecisSection/ServecisSection";
import WeCare from "../../components/WeCare/WeCare";
import godownIcon from "../../assets/godown.png";
import Team from "../../components/Team/Team";

function Home({
  language,
  setLanguage,
  mainPageHero,
  loadingSettings,
  loadingServices,
  servicesData,
  loadingEvents,
  events,
  logo,
  siteName,
  loadingLogo
}) {
  return (
    <div>
      <Hero
        setLanguage={setLanguage}
        language={language}
        mainPageHero={mainPageHero}
        loadingSettings={loadingSettings}
        logo={logo}
        siteName={siteName}
        loadingLogo={loadingLogo}
      />
      <div className="container flex justify-center items-center mt-10  lg:mt-16">
        <a href="#services">
          {" "}
          <img src={godownIcon} alt="icon" loading="lazy" />
        </a>
      </div>
      <ServecisSection
        language={language}
        servicesData={servicesData}
        loadingServices={loadingServices}
      />
      <WeCare language={language} />
      <News language={language} loadingEvents={loadingEvents} events={events} />
      <Team language={language} />
    </div>
  );
}

export default Home;
