import React, { Component } from "react";
import MotionWrapper from "../../components/animations/MotionWrapper";
import { skills } from "../../portfolio";
import FullStackImg from "./FullStackImg";
import TerminalImg from "./TerminalImg";
import DesignImg from "./DesignImg";
import AppDevelopImg from "./AppDevelopImg";
import CloudInfraImg from "./CloudInfraImg";
import DataScienceImg from "./DataScienceImg";
import SoftwareSkills from "../../components/softwareSkills/SoftwareSkills";
import "./Skills.css";

function GetSkillSvg(props) {
  if (props.imageName === "TerminalImg")
    return <TerminalImg theme={props.theme} />;
  else if (props.imageName === "FullStackImg")
    return <FullStackImg theme={props.theme} />;
  else if (props.imageName === "AppDevelopImg")
    return <AppDevelopImg theme={props.theme} />;
  else if (props.imageName === "CloudInfraImg")
    return <CloudInfraImg theme={props.theme} />;
  else if (props.imageName === "DataScienceImg")
    return <DataScienceImg theme={props.theme} />;
  return <DesignImg theme={props.theme} />;
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill) => {
          return (
            <div className="skills-main-div" key={skill.title}>
              <MotionWrapper>
                <div className="skills-image-div">
                  {/* <img
                    alt="Ashutosh is Analysing Data"
                    src={require(`../../assests/images/${skill.imagePath}`)}
                  ></img> */}
                  <GetSkillSvg imageName={skill.imageName} theme={theme} />
                </div>
              </MotionWrapper>

              <div className="skills-text-div">
                <MotionWrapper>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </MotionWrapper>
                <MotionWrapper>
                  <SoftwareSkills logos={skill.softwareSkills} />
                </MotionWrapper>
                <MotionWrapper>
                  <div>
                    {skill.skills.map((skillSentence) => {
                      return (
                        <p
                          key={skillSentence}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </MotionWrapper>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
