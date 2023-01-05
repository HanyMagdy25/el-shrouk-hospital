import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

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
          src={item.image[0]}
          alt={item.title}
          className="image__mainStyle"
        />
      </div>
      <div className="eventsNewsCard__content flex-1 p-2">
        <div className="flex justify-between text-xs font-medium">
          <span>By: {item.by}</span>
          <span>{item.date}</span>
        </div>
        <h2 className=" mt-1">{truncate(item.title, 50)}</h2>
        <p className="text-xs mt-1">{truncate(item.description, 75)}</p>
        <div className="flex justify-end">
          <Link to={`/news/${item.id}`}>
            <button className="flex items-center text-xs md:text-sm font-semibold gap-1 ">
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
