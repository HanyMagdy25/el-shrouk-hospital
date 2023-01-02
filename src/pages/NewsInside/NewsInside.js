import { useParams } from "react-router-dom";
import { newsData } from "../../utils/data";
import HeroNewsInside from "./HeroNewsInside/HeroNewsInside";
import NewsInsideMainContent from "./HeroNewsInside/NewsInsideMainContent";
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
    </div>
  );
}

export default NewsInside;
