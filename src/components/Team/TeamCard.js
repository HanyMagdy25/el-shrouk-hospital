import teamIcon1 from "../../assets/teamIcon1.png";
import teamIcon2 from "../../assets/teamIcon2.png";

const url_main = "https://el-shrouk-hospital-dashboard.technomasrsystems.com";

function TeamCard({ item ,language}) {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <div className="teamCard h-56 relative px-2 pt-2">
      <img
        src={`${url_main}/uploads/ourTeam/${item.id}/${item.image}`}
        alt={item.name}
        className="image__mainStyle"
      />
      <div className={`teamCard__content absolute bottom-2 ${language === "ar" && "text-right"}`}>
        <h6>{item.name}</h6>
        <p>{truncate(item.title, 60)}</p>
      </div>
      <img
        src={teamIcon1}
        alt="icon"
        className="teamCard__icon-red absolute top-0 left-0"
      />
      <img
        src={teamIcon2}
        alt="icon"
        className="teamCard__icon-blue absolute top-16 -right-2"
      />
    </div>
  );
}

export default TeamCard;
