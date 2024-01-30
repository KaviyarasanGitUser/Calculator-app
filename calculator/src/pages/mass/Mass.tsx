import React, { useEffect, useState } from "react";
import "../home/Home.css";
import { observer } from "mobx-react-lite";
import { home } from "../../util/Home";
import Option from "../../components/option/Option";
import Conversion from "../../components/conversion/Conversion";
import ConversionInput from "../../components/conversion-input/ConversionInput";
import { massOption } from "../../util/Mass";
import "./Mass.css";
import { calculatorStore } from "../../store/CalculatorStore";

const Mass = observer(() => {
  useEffect(() => {
    calculatorStore.setDefaultOption();
  }, []);

  const option = home.find((e) => e.name === "Mass");

  return (
    <>
      <div className="conversion-container">
        {option && <Option project={option} />}
      </div>
      <Conversion optionValue={massOption} />
      <ConversionInput />
    </>
  );
});

export default Mass;
