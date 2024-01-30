import React from "react";
import "./Option.css";
import { calculatorCard } from "../../util/Type";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

const Option = observer((props: { project: calculatorCard }) => {
  const nav = useNavigate();
  const IconComponent = props.project.icon;
  return (
      <div
        className="option"
        onClick={() => {
          nav(`/${props.project.name}`);
        }}
      >
        <span className="icon">
          <IconComponent />
        </span>
        <p style={{ textAlign: "center", fontWeight: "500", color: "black" }}>
          {props.project.name}
        </p>
      </div>
  );
});

export default Option;
