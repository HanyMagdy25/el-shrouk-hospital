import Spinner from "../../../components/Spinner/Spinner";
import EventsNewsCard from "../../News/EventsNews/EventsNewsCard";

function RelatedNews({ language, loadingEvents, events }) {
  return (
    <>
      {loadingEvents ? (
        <Spinner />
      ) : (
        <div className="mt-20 mb-24 px-5 lg:px-0">
          <div className="container">
            <div className="flex-center mb-14">
              <div className="main__title-div">
                <h2 className="main__title">Related News</h2>
              </div>
            </div>
            <div className="flex related__div">
              {events?.news_events?.slice(0, 3)?.map((item, index) => (
                <EventsNewsCard
                  item={item}
                  key={index}
                  type="related"
                  language={language}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RelatedNews;
