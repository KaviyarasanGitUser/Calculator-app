import React from "react";
import "./ConversionInput.css";
import { calculatorStore } from "../../store/CalculatorStore";
import { observer } from "mobx-react-lite";
import { handleConvert } from "../../pages/mass/MassFunction";

const ConversionInput = observer(() => {
  const { fromLabel, toLabel, fromValue, toValue, setFromValue, setToValue } =
    calculatorStore;

  return (
    <div className="input-container">
      <div className="single-input">
        <label htmlFor={fromLabel}>{fromLabel}</label>
        <input
          className="input-field"
          type="number"
          name={fromLabel}
          id={fromLabel}
          value={fromValue}
          placeholder={fromLabel}
          onChange={(e) => {
            const value: number = Number(e.target.value);
            setFromValue(value);
            handleConvert();
          }}
          readOnly={fromLabel === "Select" || toLabel === "Select"}
        />
      </div>
      <div className="single-input">
        <label htmlFor={toLabel}>{toLabel}</label>
        <input
          className="input-field"
          type="number"
          name={toLabel}
          id={toLabel}
          value={toValue}
          placeholder={toLabel}
          readOnly
        />
      </div>
    </div>
  );
});

export default ConversionInput;
