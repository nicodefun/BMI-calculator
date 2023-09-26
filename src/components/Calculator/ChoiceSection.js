import { Fragment } from "react";
import classes from "./Choice.module.css";

const choices = [
  { choice: "metric", defaultChecked: true },
  { choice: "imperial", defaultChecked: false },
];

const ChoiceSection = ({ changeChoice }) => {
  const capitalized = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const onClickHandler = (e) => {
    if (e.target.id === "metric") {
      changeChoice("metric");
    }
    if (e.target.id === "imperial") {
      changeChoice("imperial");
    }
  };

  return (
    <Fragment>
      <div className={classes.group}>
        {choices.map((item) => (
          <div key={item.choice} className={classes["radio-group"]}>
            <input
              id={item.choice}
              type="radio"
              className={classes["radio-input"]}
              name="number"
              value=""
              defaultChecked={item.defaultChecked}
              onClick={onClickHandler}
            />
            <label htmlFor={item.choice} className={classes["radio-label"]}>
              <span className={classes["radio-button"]}></span>
              {capitalized(item.choice)}
            </label>
          </div>
        ))}
      </div>
    </Fragment>
  );
};
export default ChoiceSection;
