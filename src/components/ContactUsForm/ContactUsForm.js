import React, { useState } from "react";
import "./ContactUsForm.css";

const url_main = "";
function ContactUsForm({ language }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");
  const [done, setDone] = useState("");
  const handleContact = (e) => {
    e.preventDefault();
    const blog = { name, phone, content: text, email };
    fetch(`${url_main}/sendContactMessage`, {
      method: "POST",
      // credentials: "include",
      headers: {
        "Content-Type": "application/json",
        lang: "en",
      },
      body: JSON.stringify(blog),
    })
      .then((data) => data.json())
      .then((res) => {
        setDone(res.status);

        console.log("res", res);
        if (res.status === "success") {
          setName("");
          setText("");
          setPhone("");
          setEmail("");
        }
      });
  };
  return (
    <div className="ContactUsForm ">
      <div className="contactUs__container py-10 flex flex-col items-center">
        <div className="flex-center mb-14">
          <div className="main__title-div">
            <h2 className="main__title">
              {language === "en" ? "Keep In Touch" : "ابقى على اتصال"}
            </h2>
          </div>
        </div>
        <form
          className="contactUs__form rounded-xl flex flex-col items-center"
          onSubmit={handleContact}
        >
          <input
            type="text"
            placeholder={language === "en" ? "Name" : "الأسم"}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder={language === "en" ? "Email" : "البريد الالكترونى"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            placeholder={language === "en" ? "Phone" : "رقم الهاتف"}
            onChange={(e) => setPhone(e.target.value)}
          />
          <textarea
            placeholder={language === "en" ? "Message" : "رسالتك"}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit" className="btn-fill mt-2">
            SUBMIT
          </button>
          {done === "success" && <p className="contact__done">Sent</p>}
          {done === "faild" && <p className="contact__done">Failed to send</p>}
        </form>
      </div>
    </div>
  );
}

export default ContactUsForm;
