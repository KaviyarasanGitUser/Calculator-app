import { action, makeObservable, observable } from "mobx";
import { calculatorCard } from "../util/Type";

class CalculatorStore{
    
    fromOption: string = "kg"
    toOption: string = "g"
    fromLabel: string = "Kilogram"
    toLabel: string = "Gram"
    fromValue: number = 0
    toValue: number = 0
    
    constructor(){
        makeObservable(this, {
            fromOption: observable,
            fromLabel: observable,
            fromValue: observable,
            toOption: observable,
            toLabel: observable,
            toValue: observable,
            setFromOption: action,
            setFromValue: action,
            setToOption: action,
            setToValue: action,
            setDefaultOption: action,
            swapOption: action
        })
    }

    setFromOption = (value:string) => {
        const temp = value.split(" ");
        this.fromLabel = temp[0];
        this.fromOption = temp[1];
    }

    setToOption = (value: string) => {
        const temp = value.split(" ");
        this.toLabel = temp[0]
        this.toOption = temp[1];
    }

    setFromValue = (value: number) => {
        this.fromValue=  value
    }

    setToValue = (value: number) => {
        this.toValue = value
    }

    swapOption = () => {
        let temp  = this.fromOption
        this.fromOption = this.toOption
        this.toOption = temp
        temp = this.fromLabel
        this.fromLabel = this.toLabel
        this.toLabel = temp
    }
    
    setDefaultOption = () => {
        this.fromOption = "kg"
        this.toOption = "g"
        this.fromLabel = "Kilogram"
        this.toLabel = "Gram"
    }
}

export const calculatorStore = new CalculatorStore();