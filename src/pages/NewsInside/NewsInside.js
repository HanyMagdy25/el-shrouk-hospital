import { useParams } from "react-router-dom";
import { newsData } from "../../utils/data";
import HeroNewsInside from "./HeroNewsInside/HeroNewsInside";
import NewsInsideMainContent from "./HeroNewsInside/NewsInsideMainContent";
import RelatedNews from "./HeroNewsInside/RelatedNews";
import "./NewsInside.css";
function NewsInside({ setLanguage, language }) {
  const param = useParams();
  const oneNews = newsData.find((a) => a.id === parseInt(param.id));
  console.log("5", oneNews);
  console.log("param", param);
  return (
    <div>
      <HeroNewsInside
        oneNews={oneNews}
        language={language}
        setLanguage={setLanguage}
      />
      <NewsInsideMainContent oneNews={oneNews} />
      <RelatedNews language={language} />
    </div>
  );
}

export default NewsInside;
