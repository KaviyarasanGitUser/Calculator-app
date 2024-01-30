import React, { useState } from "react";
import { calculatorStore } from "../../store/CalculatorStore";
import SelectModal from "../selectModal/SelectModal";
import { GoArrowSwitch } from "react-icons/go";
import { observer } from "mobx-react-lite";
import { convertMass } from "../../pages/mass/MassFunction";
import { handleConvert } from "../../pages/mass/MassFunction";
import "./Conversion.css";

const Conversion = observer(({ optionValue }: any) => {
  const [open, setOpen] = useState(false);
  const [isFrom, setIsFrom] = useState(false);

  const { fromOption, toOption, fromLabel, toLabel, swapOption } =
    calculatorStore;

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="conversion-div">
        <div className="unit-div">
          <div
            onClick={() => {
              setIsFrom(true);
              handleOpen();
            }}
            className="unit"
          >
            {fromOption}
          </div>
          <GoArrowSwitch
            onClick={() => {
              swapOption();
              handleConvert();
            }}
          />
          <div
            onClick={() => {
              setIsFrom(false);
              handleOpen();
            }}
            className="unit"
          >
            {toOption}
          </div>
        </div>
      </div>
      <SelectModal
        isOpen={open}
        onClose={handleOpen}
        isFrom={isFrom}
        optionValue={optionValue}
      />
    </>
  );
});

export default Conversion;
