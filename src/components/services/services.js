import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./services.css";
//import logo3 from "./svg-path (3).svg";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 10,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 10,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 0,
  },
};

const Services = ({ servicesData }) => {
  return (
    <div>
      <Carousel
        ssr
        partialVisible
        itemClass="image-item"
        responsive={responsive}
      >
        {servicesData.map(
          (service, index) =>
            service.enabled && (
              <div key={index} className="service-card">
                <img src={service.image.url} alt={service.name} />
                <h2>{service.name}</h2>
                <p>{service.desc}</p>
                <p>Charge: {service.charge}</p>
              </div>
            )
        )}
      </Carousel>
    </div>
  );
};

export default Services;
