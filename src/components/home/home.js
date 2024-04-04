// About.js
import React from "react";
import "./home.css";
import logo from "./bannerL.svg";
const Home = ({ aboutData }) => {
  return (
    <div className="home-container">
      <div className="green-logo">
        <img
          src={logo}
          alt="logo"
          style={{ width: "15%", height: "", position: "absolute" }}
        ></img>
      </div>
      <div className="green-logo">
        <img
          src={logo}
          alt="logo"
          style={{
            width: "15%",
            height: "",
            position: "absolute",
            transform: "rotate(180deg) rotateX(180deg)",
            right: "0px",
          }}
        ></img>
      </div>
      <div className="about-container">
        <h1>{aboutData.name}</h1>
        <h2>{aboutData.title}</h2>
        <h3>{aboutData.subTitle}</h3>
        <p>{aboutData.description}</p>
        {aboutData.avatar ? (
          <img src={aboutData.avatar.url} alt="avatar" />
        ) : (
          aboutData.alternateAvatars &&
          aboutData.alternateAvatars[0] &&
          aboutData.alternateAvatars[0].url && (
            <img
              src={aboutData.alternateAvatars[0].url}
              alt="alternate avatar"
            />
          )
        )}
        <blockquote>"{aboutData.quote}"</blockquote>
        <p>{aboutData.exp_year} years of experience</p>
        <p>{aboutData.some_total} projects completed</p>
        <p>Address: {aboutData.address}</p>
        <p>
          Contact: {aboutData.phoneNumber}, {aboutData.contactEmail}
        </p>
      </div>
    </div>
  );
};

export default Home;
