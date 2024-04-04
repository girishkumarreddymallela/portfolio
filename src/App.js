// App.js
import React, { useEffect, useState, createRef } from "react";
import axios from "axios";
import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";
import Services from "./components/services/services";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Timeline from "./components/timeline/timeline";
import Testimonials from "./components/testimonials/testimonials";
import Contacts from "./components/contacts/contacts";
import "./App.css";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedSection = ({ children, index }) => {
  const isEven = index % 2 === 0;
  const initialX = isEven ? -1 : 1;
  const variants = {
    hidden: { opacity: 0, x: initialX },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.5, delay: index * 0.2 },
    },
  };

  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};
const App = () => {
  const [aboutData, setAboutData] = useState({});
  const [servicesData, setServicesData] = useState([]);
  const [skillsData, setSkillsData] = useState([]);
  const [projectsData, setProjectsData] = useState([]);
  const [timelineData, setTimelineData] = useState([]);
  const [testimonialsData, setTestimonialsData] = useState([]);
  const [social_handlesData, setsocial_handlesData] = useState([]);

  const homeRef = createRef();
  const servicesRef = createRef();
  const skillsRef = createRef();
  const projectsRef = createRef();
  const timelineRef = createRef();
  const testimonialsRef = createRef();
  const contactsRef = createRef();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
      );
      setAboutData(result.data.user.about);
      setServicesData(result.data.user.services);
      setSkillsData(result.data.user.skills);
      setProjectsData(result.data.user.projects);
      setTimelineData(result.data.user.timeline);
      setTestimonialsData(result.data.user.testimonials);
      setsocial_handlesData(result.data.user.social_handles);
    };
    fetchData();
  }, []);

  return (
    <div className="app-container">
      <Navbar
        homeRef={homeRef}
        servicesRef={servicesRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        timelineRef={timelineRef}
        testimonialsRef={testimonialsRef}
        contactsRef={contactsRef}
      />
      <div className="app-container">
        <AnimatedSection index={0}>
          <div ref={homeRef}>
            <h1 className="heading">Know about me -Have a look</h1>
            <Home aboutData={aboutData} />
          </div>
        </AnimatedSection>
        <AnimatedSection index={1}>
          <div ref={servicesRef}>
            <h1 className="heading">Services</h1>
            <Services servicesData={servicesData} />
          </div>
        </AnimatedSection>
        <AnimatedSection index={2}>
          <div ref={skillsRef}>
            <h1 className="heading">Skills</h1>
            <Skills skillsData={skillsData} />
          </div>
        </AnimatedSection>
        <AnimatedSection index={3}>
          <div ref={projectsRef}>
            <h1 className="heading">Projects</h1>
            <Projects projectsData={projectsData} />
          </div>
        </AnimatedSection>
        <AnimatedSection index={4}>
          <div ref={timelineRef}>
            <h1 className="heading">Timeline</h1>
            <Timeline timelineData={timelineData} />
          </div>
        </AnimatedSection>
        <AnimatedSection index={5}>
          <div ref={testimonialsRef}>
            <h1 className="heading">Testimonials</h1>
            <Testimonials testimonialsData={testimonialsData} />
          </div>
        </AnimatedSection>
        <AnimatedSection index={6}>
          <div ref={contactsRef}>
            <h1 className="heading">Contacts</h1>
            <Contacts
              aboutData={aboutData}
              social_handlesData={social_handlesData}
            />
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default App;
