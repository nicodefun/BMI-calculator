import classes from "./Calculator.module.css";
import ChoiceSection from "./ChoiceSection";
import InputValue from "./InputValue/InputValue";
import Result from "./Result";
import { useState } from "react";
const Calculator = () => {
  const [choice, setChoice] = useState("metric");
  const [value, setValue] = useState({
    height: "",
    weight: "",
  });
  const [imperialValue, setImperialValue] = useState({
    ft: 0,
    inch: 0,
    st: 0,
    lbs: 0,
  });

  const choiceChangeHandler = (id) => {
    setChoice(id);
  };

  const getMatrixHandler = (data) => {
    if (data.id === "height") {
      setValue((value) => ({
        ...value,
        height: data.value,
      }));
    }
    if (data.id === "weight") {
      setValue((value) => ({
        ...value,
        weight: data.value,
      }));
    }
  };

  const getImperialHandler = (id, value) => {
    setImperialValue((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <section className={classes["caculator-container"]}>
      <h2>Enter your details below</h2>
      <ChoiceSection choiceState={choice} changeChoice={choiceChangeHandler} />
      <InputValue
        getValues={getMatrixHandler}
        choiceState={choice}
        value={value}
        getImperialValues={getImperialHandler}
      />
      <Result
        value={value}
        choiceState={choice}
        imperialValue={imperialValue}
      />
    </section>
  );
};

export default Calculator;
