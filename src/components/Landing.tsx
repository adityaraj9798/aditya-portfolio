import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { portfolioData } from "../data/portfolioData";

const Landing = ({ children }: PropsWithChildren) => {
  const { greeting, firstName, lastName, roles, roleSuffixes } = portfolioData.hero;

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>{greeting}</h2>
            <h1>
              {firstName}
              <br />
              <span>{lastName}</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>A {roles[0]}</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">{roleSuffixes[0]}</div>
              <div className="landing-h2-2">{roleSuffixes[1]}</div>
            </h2>
            <h2>
              <div className="landing-h2-info">{roleSuffixes[1]}</div>
              <div className="landing-h2-info-1">{roleSuffixes[0]}</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
