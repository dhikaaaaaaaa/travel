import React from "react";
import "./mailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitles"> Save Time, Save Money</h1>
      <span className="mailText">
        Sign up and we'll send the best deals to you
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="your email ?" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
