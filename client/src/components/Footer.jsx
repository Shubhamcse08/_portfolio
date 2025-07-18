import "./footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Shubham Singh</h3>
        <p>Building web experiences one project at a time.</p>

        <div className="socials">
          <a href="https://github.com/Shubhamcse08" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/shubham-singh-a4409a303/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="contact">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Shubham Singh. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
