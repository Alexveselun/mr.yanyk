import React from "react";
import MotionWrapper from "../../components/layouts/animations/MotionWrapper";
import { greeting } from "../../portfolio";
import Button from "../../components/layouts/button/Button";
import "./Greeting.css";

const Greeting = (props) => {
  const theme = props.theme;
  return (
    <MotionWrapper>
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {greeting.nickname !== null && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  {greeting.nickname}
                </h2>
              )}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <div className="portfolio-repo-btn-div">
                <Button
                  text="⭐ Contact me"
                  newTab={true}
                  href={greeting.portfolio_repository}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <img
              alt="main-photo"
              src={require("../../assets/images/main-photo-home.png")}
              className="greeting-image"
            />
          </div>
        </div>
      </div>
    </MotionWrapper>
  );
};

export default Greeting;
