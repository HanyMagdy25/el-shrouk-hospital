import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeroNewsInside from "./HeroNewsInside/HeroNewsInside";
import NewsInsideMainContent from "./HeroNewsInside/NewsInsideMainContent";
import RelatedNews from "./HeroNewsInside/RelatedNews";
import "./NewsInside.css";
const url_main = "https://el-shrouk-hospital-dashboard.technomasrsystems.com";
function NewsInside({ setLanguage, language, loadingEvents, events }) {
  const param = useParams();
  const [articleInside, setarticleInside] = useState({});
  const [loadingArticle, setLoadingArticle] = useState(true);
  useEffect(() => {
    fetch(`${url_main}/api/newsEvents/${parseInt(param.id)}`, {
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
        setLoadingArticle(false);
        setarticleInside(data);
        console.log("articleInside", data);
      });
  }, [language, param.id]);
  return (
    <div>
      <HeroNewsInside
        language={language}
        setLanguage={setLanguage}
        articleInside={articleInside}
      />
      <NewsInsideMainContent
        articleInside={articleInside}
        loadingArticle={loadingArticle}
      />
      <RelatedNews
        language={language}
        loadingEvents={loadingEvents}
        events={events}
      />
    </div>
  );
}

export default NewsInside;
