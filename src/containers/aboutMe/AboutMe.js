import React from "react";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactPageData } from "../../portfolio";
import MotionWrapper from "../../components/animations/MotionWrapper";
import UserData from "../../shared/opensource/user.json";
import "./AboutMe.css";

const AboutMe = ({ theme }) => { // Destructure theme from props

  // Consolidate UserData checks
  if (!UserData?.data || Object.keys(UserData.data).length === 0) {
    return null;
  }

  const { avatarUrl, name, bio, location } = UserData.data; 
  const isHireable = UserData.data.isHireable ? "Yes" : "No";

  return (
    <div className="about-main">
      <MotionWrapper>
        <div className="main" id="contact" align="center">
          <h1 className="prof-title" style={{ color: theme.text }}>
            Reach Out to Me!
          </h1>
          <div className="row" align="center">
            <div className="main-content-profile">
              <div className="blog-header">
                <MotionWrapper>
                  <p
                    className="subTitle blog-sub"
                    style={{ color: theme.secondaryText }}
                  >
                    {contactPageData.contactSection.description}
                  </p>
                </MotionWrapper>
              </div>
              {avatarUrl && (
                <div className="image-content-profile" style={{ padding: "20px" }}>
                  <MotionWrapper>
                    <img
                      src={avatarUrl}
                      alt={name}
                      className="profile-image"
                    />
                  </MotionWrapper>
                </div>
              )}
              {bio && (
                <MotionWrapper>
                  <h2 className="bio-text" style={{ color: theme.imageHighlight }}>
                    "{bio}"
                  </h2>
                </MotionWrapper>
              )}
              {location && (
                <div className="location-div" style={{ color: theme.secondaryText }}>
                  <div className="desc-prof">
                    <svg
                      className="loc-im"
                      viewBox="-0.5 -2 20 19"
                      version="1.1"
                      aria-hidden="true"
                      stroke="currentColor"
                      role="img"
                      aria-label="Location Icon" 
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
                      ></path>
                    </svg>
                    {location}
                  </div>
                </div>
              )}
              <div className="opp-div">
                <MotionWrapper>
                  <span className="desc-prof" style={{ color: theme.text }}>
                    Open for opportunities: {isHireable} {/* Display hireable status */}
                  </span>
                </MotionWrapper>
              </div>
              <SocialMedia theme={theme} />
            </div>
          </div>
        </div>
      </MotionWrapper>
    </div>
  );
};

export default AboutMe;
