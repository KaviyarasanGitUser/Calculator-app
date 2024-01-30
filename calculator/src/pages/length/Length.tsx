import React, { useEffect } from "react";
import Option from "../../components/option/Option";
import Conversion from "../../components/conversion/Conversion";
import { home } from "../../util/Home";
import { optionType } from "../../util/Type";
import { observer } from "mobx-react-lite";
import { calculatorStore } from "../../store/CalculatorStore";

const Length = observer(() => {
  const option = home.find((e) => e.name === "Length");

  useEffect(() => {
    calculatorStore.setDefaultOption();
  }, []);

  const lengthOption: optionType[] = [
    {
      label: "Kilometer km",
      value: "km",
    },
    {
      label: "Meter m",
      value: "m",
    },
    {
      label: "Centimeter cm",
      value: "cm",
    },
  ];

  return (
    <>
      <div className="conversion-container">
        {option && <Option project={option} />}
      </div>
      <Conversion optionValue={lengthOption} />
    </>
  );
});

export default Length;
