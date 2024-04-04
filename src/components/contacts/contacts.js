import React from "react";
import { motion } from "framer-motion";
import { AiOutlineMail, AiOutlinePhone, AiOutlineHome } from "react-icons/ai";
import "./contacts.css";
//import logo_C from "./svg-path (3).svg";

const Contact = ({ aboutData, social_handlesData }) => {
  return (
    aboutData && (
      <div className="contact-container">
        <h1>Contact Information</h1>
        <p>
          <AiOutlineHome style={{ fontSize: "24px" }} /> Address:
          {aboutData.address}
        </p>
        <p>
          <AiOutlineMail style={{ fontSize: "24px" }} /> Email:
          {aboutData.contactEmail}
        </p>
        <p>
          <AiOutlinePhone style={{ fontSize: "24px" }} /> Phone:
          {aboutData.phoneNumber}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {social_handlesData.map((handle) => {
            if (handle.enabled) {
              return (
                <div className="social_handles">
                  <a href={handle.url} key={handle._id}>
                    <img src={handle.image.url} alt={handle.platform} />
                  </a>
                </div>
              );
            }
            return null;
          })}
        </div>
        <h1>Contact Form</h1>
        <div>
          <form className="contact-form">
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <label>
              Email:
              <input type="email" name="email" />
            </label>
            <label>
              Message:
              <textarea name="message" />
            </label>
            <motion.input
              type="submit"
              value="Submit"
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </form>
        </div>
      </div>
    )
  );
};

export default Contact;
