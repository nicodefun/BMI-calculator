import classes from "./Imperial.module.css";

const Imperial = ({getImperialValues}) => {
 

  const onValueHandler = (id, e) => {
    getImperialValues(id, +e.target.value);
  };

  return (
    <>
      <div className={classes["input-part"]}>
        <label htmlFor="height">Height</label>
        <div className={classes["wrapper-container"]}>
          <div className={`${classes["input-wrapper-2"]} ${classes["first"]}`}>
            <input
              id="ft"
              type="number"
              onChange={(e) => onValueHandler("ft", e)}
            />
            <div className={classes["input-unit"]}>
              <span>ft</span>
            </div>
          </div>
          <div className={classes["input-wrapper-2"]}>
            <input
              id="in"
              type="number"
              onChange={(e) => onValueHandler("inch", e)}
            />
            <div className={classes["input-unit"]}>
              <span>in</span>
            </div>
          </div>
        </div>
      </div>
      <div className={classes["input-part"]}>
        <label htmlFor="weight">Weight</label>
        <div className={classes["wrapper-container"]}>
          <div className={`${classes["input-wrapper-2"]} ${classes["first"]}`}>
            <input
              id="st"
              type="number"
              onChange={(e) => onValueHandler("st", e)}
            />
            <div className={classes["input-unit"]}>
              <span>st</span>
            </div>
          </div>
          <div className={classes["input-wrapper-2"]}>
            <input
              id="lbs"
              type="number"
              onChange={(e) => onValueHandler("lbs", e)}
            />
            <div className={classes["input-unit"]}>
              <span>lbs</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Imperial;
