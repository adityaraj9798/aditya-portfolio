import "./styles/Career.css";
import { portfolioData } from "../data/portfolioData";

const Career = () => {
  const { title, highlight, subtitle, items } = portfolioData.career;

  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          {title} <span>{highlight}</span>
          <br /> {subtitle}
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {items.map((item) => (
            <div className="career-info-box" key={`${item.company}-${item.period}`}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{item.role}</h4>
                  <h5>{item.company}</h5>
                </div>
                <h3>{item.period}</h3>
              </div>
              <p>{item.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
