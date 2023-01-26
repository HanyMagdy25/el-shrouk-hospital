import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
const url_main = "https://el-shrouk-hospital-dashboard.technomasrsystems.com";
function EventsNewsCard({ item, type, language }) {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <div
      className={`eventsNewsCard mb-3 flex ${
        type === "related" ? "related__threeCards" : ""
      }`}
    >
      <div className="eventsNewsCard__image">
        <img
          src={`${url_main}/uploads/news/${item.id}/${item.images}`}
          alt={item.title}
          className="image__mainStyle"
        />
      </div>
      <div className="eventsNewsCard__content flex-1 p-2">
        <div className="flex justify-between text-xs font-medium">
          <span>By: Admin</span>
          <span>{item.created_at}</span>
        </div>
        <h2 className=" mt-1">{truncate(item.title, 50)}</h2>
        <div
          className="text-xs mt-1"
          dangerouslySetInnerHTML={{ __html: truncate(item.description, 75) }}
        />
        <div className="flex justify-end">
          <Link to={`/news/${item.id}`}>
            <button className="flex items-center btn-read-more md:text-sm font-semibold gap-1 ">
              {language === "en" ? "Read More" : "اقرأ المزيد"}
              {language === "en" ? (
                <HiArrowNarrowRight className="text-lg" />
              ) : (
                <HiArrowNarrowLeft className="text-lg" />
              )}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventsNewsCard;
