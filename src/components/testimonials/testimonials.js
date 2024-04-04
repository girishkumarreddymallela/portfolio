import React, { useState, useEffect, useRef } from "react";
import "./testimonials.css";

const Testimonials = ({ testimonialsData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((activeIndex + 1) % testimonialsData.length);
    }, 3000);
    return () => clearInterval(intervalRef.current);
  }, [activeIndex, testimonialsData.length]);

  const handleMouseEnter = () => {
    clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((activeIndex + 1) % testimonialsData.length);
    }, 1000);
  };

  return (
    <div className="testimonials-container">
      {testimonialsData.map(
        (testimonial, index) =>
          testimonial.enabled && (
            <div
              key={index}
              className={`testimonial-card ${
                index === activeIndex ? "active" : ""
              }`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={testimonial.image.url} alt={testimonial.name} />
              <h2>{testimonial.name}</h2>
              <p>{testimonial.position}</p>
              <p>"{testimonial.review}"</p>
            </div>
          )
      )}
    </div>
  );
};

export default Testimonials;
