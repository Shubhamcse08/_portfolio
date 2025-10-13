import React from "react";
import BasicForm from "./BasicForm";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Left side - contact info */}
      <div className="contact-info">
        <h2>Contact Info</h2>
        <p>Email: <a href="">shubhamcse.eng@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/shubham-singh-a4409a303/" target="_blank">shubham-singh-a4409a303c</a></p>
        <p>GitHub: <a href="https://github.com/Shubhamcse08" target="_blank">Shubhamcse08</a></p>
        <p>LeetCode: <a href="https://leetcode.com/u/uZ3YYLH89C/" target="_blank">ShubhamSingh</a></p>
        {/* Add more social links as needed */}
      </div>

      {/* Right side - send message form */}
      <div className="contact-form-wrapper">
        <h2>Send Message</h2>
        <BasicForm />
      </div>
    </div>
  );
};

export default Contact;
