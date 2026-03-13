import { portfolioData } from "../data/portfolioData";
import "./styles/Achievements.css";

const Achievements = () => {
  const { title, items } = portfolioData.achievements;

  return (
    <section className="achievements-section section-container" id="achievements">
      <div className="achievements-header">
        <h2 className="title">{title}</h2>
        <p className="para">
          Competitions and recognitions that reflect applied problem solving beyond coursework.
        </p>
      </div>
      <div className="achievements-grid">
        {items.map((item) => (
          <article className="achievement-card" key={`${item.title}-${item.period}`}>
            <div className="achievement-period">{item.period}</div>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
