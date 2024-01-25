import React from "react";
import "./Option.css";
import { CalculatorCard } from "../../util/Home";

const Option = (props: { project: CalculatorCard }) => {
  const IconComponent = props.project.icon;
  return (
    <>
      <div className="option">
        <span className="icon">
          <IconComponent />
        </span>
        <p style={{textAlign:"center", fontWeight:"500", color:"black"}}>{props.project.name}</p>
      </div>
    </>
  );
};

export default Option;
