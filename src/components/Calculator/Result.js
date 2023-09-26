import classes from "./Result.module.css";

const Result = ({ value, imperialValue, choiceState }) => {
  const { ft, inch, st, lbs } = imperialValue;
  const totalInches = +ft * 12 + inch;
  const totalLbs = +st * 14 + lbs;

  const matrixHeight = +value.height / 100;
  const matrixWeight = +value.weight;

  let ideaWeightMin;
  let ideaWeightMax;
  let bmi;

  if (
    choiceState === "metric" &&
    matrixHeight > 0.1 &&
    matrixHeight < 3 &&
    matrixHeight > 0 &&
    matrixHeight < 300
  ) {
    bmi = (matrixWeight / matrixHeight ** 2).toFixed(1);

    ideaWeightMin = (18.5 * matrixHeight ** 2).toFixed(1);
    ideaWeightMax = (24.9 * matrixHeight ** 2).toFixed(1);
  }
  if (
    choiceState === "imperial" &&
    totalInches > 3 &&
    totalInches < 120 &&
    totalLbs > 0 &&
    totalLbs < 1000
  ) {
    bmi = ((totalLbs / totalInches ** 2) * 703).toFixed(1);

    ideaWeightMin = ((18.5 * totalInches ** 2) / 703).toFixed(1);
    ideaWeightMax = ((24.9 * totalInches ** 2) / 703).toFixed(1);
  }

  let desc;
  if (bmi > 1) {
    if (bmi < 18.5) {
      desc = "Underweight";
    }
    if (bmi < 24.9 && bmi > 18.5) {
      desc = "Healthy weight";
    }
    if (bmi < 29.9 && bmi > 25) {
      desc = "Overweight";
    }
    if (bmi >= 30) {
      desc = "Obese";
    }
  } else {
    desc = "Put valid values...";
  }

  if (bmi > 1) {
    return (
      <div className={classes["result-part"]}>
        <div className={classes["box-1"]}>
          <p className={classes.title}>Your BMI is..</p>

          <p className={classes.result}>{bmi}</p>
        </div>
        <div className={classes["box-2"]}>
          <p className={classes["result-desc"]}>
            Your BMI suggests you’re a {desc}. Your ideal weight is between
            <span>
              {" "}
              {ideaWeightMin}kgs - {ideaWeightMax}kgs.
            </span>
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className={classes["result-part"]}>
        <p className={classes.title}>{desc}</p>
      </div>
    );
  }
};
export default Result;
