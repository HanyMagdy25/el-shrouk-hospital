import { useParams } from "react-router-dom";
import ContactUs from "../../components/ContactUs/ContactUs";
import { newsData } from "../../utils/data";
import HeroNewsInside from "./HeroNewsInside/HeroNewsInside";
import NewsInsideMainContent from "./HeroNewsInside/NewsInsideMainContent";
import RelatedNews from "./HeroNewsInside/RelatedNews";
import "./NewsInside.css";
function NewsInside({setLanguage,language}) {
  const param = useParams();
  const oneNews = newsData.find((a) => a.id === parseInt(param.id));
  console.log("5", oneNews);
  console.log("param", param);
  return (
    <div>
      <HeroNewsInside oneNews={oneNews}  setLanguage={setLanguage}/>
      <NewsInsideMainContent oneNews={oneNews} />
      <RelatedNews language={language}/>
      <ContactUs/>
    </div>
  );
}

export default NewsInside;
