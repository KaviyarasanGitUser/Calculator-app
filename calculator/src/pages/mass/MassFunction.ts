import { calculatorStore } from "../../store/CalculatorStore"

export const handleConvert = () => {
    const {fromValue, fromLabel, toLabel, setToValue} = calculatorStore
    const result = convertMass(fromValue, fromLabel, toLabel)
    setToValue(result)
}
export const convertMass = (value: number, from: string, to: string) => {
    if(from === "Kilogram"){
        if(to === "Gram")
            value *= 1000
        else if(to === "Milligram")
            value *= 1000000
    }
    else if(from === "Gram"){
        if(to === "Kilogram")
            value *= 0.001
        else if(to === "Milligram")
            value *= 1000
    }
    else if(from === "Milligram"){
        if(to === "Kilogram")
            value *= 0.000001
        else if(to === "Gram")
            value *= 0.001
    }
    return value;
}