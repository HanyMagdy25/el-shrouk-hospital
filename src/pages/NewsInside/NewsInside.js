import { useParams } from "react-router-dom";
import ContactUs from "../../components/ContactUs/ContactUs";
import { newsData } from "../../utils/data";
import HeroNewsInside from "./HeroNewsInside/HeroNewsInside";
import NewsInsideMainContent from "./HeroNewsInside/NewsInsideMainContent";
import RelatedNews from "./HeroNewsInside/RelatedNews";
import "./NewsInside.css";
function NewsInside() {
  const param = useParams();
  const oneNews = newsData.find((a) => a.id === parseInt(param.id));
  console.log("5", oneNews);
  console.log("param", param);
  return (
    <div>
      <HeroNewsInside oneNews={oneNews} />
      <NewsInsideMainContent oneNews={oneNews} />
      <RelatedNews/>
      <ContactUs/>
    </div>
  );
}

export default NewsInside;
