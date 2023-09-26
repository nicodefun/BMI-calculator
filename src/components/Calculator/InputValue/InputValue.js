import { Fragment } from "react";
import Matric from "./Matric";
import Imperial from "./Imperial";

const InputValue = ({ choiceState, getValues,value,getImperialValues }) => {

  return (
    <Fragment>
      {choiceState === "metric" && (
        <Matric getValues={getValues} value={value} />
      )}
      {choiceState === "imperial" && <Imperial getImperialValues={getImperialValues}/>}
    </Fragment>
  );
};

export default InputValue;
