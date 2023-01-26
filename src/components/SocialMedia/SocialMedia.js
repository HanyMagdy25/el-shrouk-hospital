import React, { useEffect, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
// import { FaPhone } from "react-icons/fa";
const url_main = "https://el-shrouk-hospital-dashboard.technomasrsystems.com";
function SocialMedia() {
  const [whatsapp, setWhatsapp] = useState({});

  useEffect(() => {
    fetch(`${url_main}/api/settings`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        lang: "en",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setWhatsapp(data?.data[0]?.contact_data.whatsapp);
      });
  }, []);
  return (
    <div className="app__social">
      <div className="whats-icon">
        <a
          className="flex-center"
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noreferrer"
        >
          <BsWhatsapp />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
