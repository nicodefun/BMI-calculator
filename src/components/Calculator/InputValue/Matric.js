import classes from "./InputValue.module.css";

const Matric = ({ getValues, value }) => {
  const INITIAL_DATA = [
    {
      name: "height",
      unit: "cm",
      type: "number",
      min: "0",
      max: "300",
    },
    {
      name: "weight",
      unit: "kg",
      type: "number",
      min: "0",
      max: "500",
    },
  ];

  const capitalized = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  let input_data = {
    id: "",
    value: "",
  };

  const onValueHandler = (option, e) => {
    if (e.target.id === option) {
      input_data = {
        id: option,
        value: e.target.value,
      };
      getValues(input_data);
    }
  };

  return (
    <div className={classes['matric-container']}>
      {INITIAL_DATA.map((item) => (
        <div
          key={item.name}
          className={
            item.name === "height"
              ? `${classes["input-part"]} ${classes['input-part-height']}`
              : classes["input-part"]
          }
        >
          <label htmlFor={item.name}>{capitalized(item.name)}</label>
          <div className={classes["input-wrapper"]}>
            <input
              id={item.name}
              type={item.type}
              onChange={(e) => onValueHandler(item.name, e)}
              min={item.min}
              max={item.max}
              value={value[item.name]}
            />
            <div className={classes["input-unit"]}>
              <span>{item.unit}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Matric;
