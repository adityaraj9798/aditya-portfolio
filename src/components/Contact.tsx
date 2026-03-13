import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { portfolioData } from "../data/portfolioData";

const Contact = () => {
  const currentYear = new Date().getFullYear();
  const { title, email, education, footerName } = portfolioData.contact;

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>{title}</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href={`mailto:${email}`} data-cursor="disable">
                {email}
              </a>
            </p>
            <h4>Education</h4>
            <p>{education}</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            {portfolioData.socialLinks.map((link) => (
              <a
                href={link.href}
                target="_blank"
                data-cursor="disable"
                className="contact-social"
                key={link.label}
              >
                {link.label} <MdArrowOutward />
              </a>
            ))}
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>{footerName}</span>
            </h2>
            <h5>
              <MdCopyright /> {currentYear}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
