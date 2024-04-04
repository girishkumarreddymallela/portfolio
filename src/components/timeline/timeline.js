import React, { useState } from "react";
import Carousel from "react-multi-carousel";
//import logo from "./education.png";
//import logo2 from "./experience.png";
import img from "./svg-path (3).svg";
import Switch from "react-switch";
import "./timeline.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    partialVisibilityGutter: 10,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    partialVisibilityGutter: 10,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 0,
  },
};

const Timeline = ({ timelineData }) => {
  const [showEducation, setShowEducation] = useState(true);
  const educationData = timelineData.filter((item) => item.forEducation);
  const experienceData = timelineData.filter((item) => !item.forEducation);

  const renderTimelineItems = (items) =>
    items.map(
      (item, index) =>
        item.enabled && (
          <div
            key={index}
            className="timeline-item"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div>
              <h2>{item.company_name}</h2>
              <p>{item.jobTitle}</p>
              <p>{item.jobLocation}</p>
              <p>
                {item.startDate} - {item.endDate}
              </p>
              <p>{item.summary}</p>
              <ul>
                {item.bulletPoints.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
            {item.forEducation ? (
              <span className="timeline-image">
                <div
                  className="svg-txt"
                  style={{
                    position: "relative",
                    bottom: "-200px",
                    right: "-200px",
                  }}
                >
                  <h1>Experience</h1>
                </div>
                <img
                  src={img}
                  alt="education-logo"
                  style={{ marginLeft: "20px", width: "500px" }}
                ></img>
              </span>
            ) : (
              <span className="timeline-image">
                <div
                  className="svg-txt"
                  style={{
                    position: "relative",
                    bottom: "-200px",
                    right: "-200px",
                  }}
                >
                  <h1>Education</h1>
                </div>

                <img
                  src={img}
                  alt="experience-logo"
                  style={{ marginLeft: "20px", width: "500px" }}
                ></img>
              </span>
            )}
          </div>
        )
    );

  return (
    <div className="timeline-container">
      <div className="toggle-container">
        <span style={{ fontSize: "20px" }}>Education</span>
        <Switch
          onChange={() => setShowEducation(!showEducation)}
          checked={showEducation}
          offColor="#fff"
          onColor="#fff"
          uncheckedIcon={false}
          checkedIcon={false}
          height={24}
          width={52}
          handleDiameter={12}
          offHandleColor="#FF7F50"
          onHandleColor="#FF7F50"
        />

        <span style={{ fontSize: "20px" }}>Experience</span>
      </div>
      {showEducation ? (
        <>
          <Carousel
            ssr
            partialVisible
            itemClass="image-item"
            responsive={responsive}
          >
            {renderTimelineItems(educationData)}
          </Carousel>
        </>
      ) : (
        <>
          <Carousel
            ssr
            partialVisible
            itemClass="image-item"
            responsive={responsive}
          >
            {renderTimelineItems(experienceData)}
          </Carousel>
        </>
      )}
    </div>
  );
};

export default Timeline;
