import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./skills.css";

const Skills = ({ skillsData }) => {
  const sortedskillsData = [...skillsData].sort(
    (b, a) => b.sequence - a.sequence
  );
  return (
    <div className="skills-container">
      {sortedskillsData.map(
        (skill, index) =>
          skill.enabled && (
            <Tilt tiltMaxAngleX={30} tiltMaxAngleY={30} key={index}>
              <div className="skill-card">
                <img
                  src={skill.image.url}
                  alt={skill.name}
                  className="skill-image"
                />
                <h2 className="skill-name">{skill.name}</h2>
                <p className="skill-percentage">
                  <AnimatedProgressbar value={skill.percentage} />
                </p>
              </div>
            </Tilt>
          )
      )}
    </div>
  );
};

const AnimatedProgressbar = ({ value }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentValue((oldValue) => {
        if (oldValue < value) {
          return oldValue + 1;
        } else {
          clearInterval(intervalId);
          return oldValue;
        }
      });
    }, 20);

    return () => clearInterval(intervalId);
  }, [value]);

  return <CircularProgressbar value={currentValue} text={`${currentValue}%`} />;
};

export default Skills;
