import eatingSvg from "../../assets/images/icon-eating.svg";
import exerciseSvg from "../../assets/images/icon-exercise.svg";
import sleepSvg from "../../assets/images/icon-sleep.svg";
import classes from "./BMIList.module.css";

const BMIListData = [
  {
    id: 1,
    svg: `${eatingSvg}`,
    title: "Healthy eating",
    desc: "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.",
  },
  {
    id: 2,
    svg: `${exerciseSvg}`,
    title: "Regular exercise",
    desc: "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.",
  },
  {
    id: 3,
    svg: `${sleepSvg}`,
    title: "Adequate sleep",
    desc: "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.",
  },
];

const BMIList = () => {
  return (
    <ul className={classes["BMI-List"]}>
      {BMIListData.map((item) => (
        <li key={item.id}>
          <div className={classes["list-img"]}>
            <img src={item.svg} alt={item.title} />
          </div>
          <div className={classes.right}>
            <h3>{item.title}</h3>
            <p className="desc-p">{item.desc}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BMIList;
