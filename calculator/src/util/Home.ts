import React from "react";
import { LuCalculator } from "react-icons/lu";
import { LiaChartAreaSolid } from "react-icons/lia";
import { LiaWeightSolid } from "react-icons/lia";
import { MdOutlineDiscount } from "react-icons/md";
import { TbWeight } from "react-icons/tb";
import { LiaRulerHorizontalSolid } from "react-icons/lia";
import { SiSpeedtest } from "react-icons/si";
import { AiOutlineFieldBinary } from "react-icons/ai";
import { GoClock } from "react-icons/go";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { calculatorCard } from "./Type";

export const home: calculatorCard[] = [
  {
    icon: LuCalculator,
    name: "Calculator",
  },
  {
    icon: LiaChartAreaSolid,
    name: "Area",
  },
  {
    icon: LiaWeightSolid,
    name: "BMI",
  },
  {
    icon: MdOutlineDiscount,
    name: "Discount",
  },
  {
    icon: TbWeight,
    name: "Mass",
  },
  {
    icon: LiaRulerHorizontalSolid,
    name: "Length",
  },
  {
    icon: SiSpeedtest,
    name: "Speed",
  },
  {
    icon: AiOutlineFieldBinary,
    name: "Numeration",
  },
  {
    icon: GoClock,
    name: "Time",
  },
  {
    icon: FaTemperatureThreeQuarters,
    name: "Temperature",
  }
];
