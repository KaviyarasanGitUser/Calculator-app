import React, { useState } from "react";
import "./SelectModal.css";
import { IoCloseCircleOutline } from "react-icons/io5";
import { optionType } from "../../util/Type";
import { calculatorStore } from "../../store/CalculatorStore";
import { observer } from "mobx-react-lite";
import { handleConvert } from "../../pages/mass/MassFunction";

const SelectModal = observer(
  ({ isOpen, onClose, optionValue, isFrom }: any) => {
    const { fromOption, toOption, setFromOption, setToOption } =
      calculatorStore;

    if (!isOpen) return null;

    return (
      <div className="modal-div">
        <div className="modal-content">
          <IoCloseCircleOutline
            onClick={onClose}
            style={{
              color: "red",
              fontSize: "24",
              float: "right",
              margin: "-10 -10 0 0",
            }}
          />
          <div className="option-modal">
            {optionValue?.map((option: optionType) => {
              return (
                <label
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <input
                    type="radio"
                    value={option.value}
                    checked={
                      isFrom
                        ? fromOption === option.value
                        : toOption === option.value
                    }
                    onChange={(e) => {
                      isFrom
                        ? setFromOption(option.label)
                        : setToOption(option.label);
                      handleConvert();
                    }}
                  />
                  {option.label}
                </label>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
);

export default SelectModal;
