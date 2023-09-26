import classes from "./Limitation.module.css";
import genderSvg from "../../assets/images/icon-gender.svg";
import ageSvg from "../../assets/images/icon-age.svg";
import muscleSvg from "../../assets/images/icon-muscle.svg";
import pregnancySvg from "../../assets/images/icon-pregnancy.svg";
import raceSvg from '../../assets/images/icon-race.svg';
import Card from "../UI/Card";

const Limitation_Data = [
  {
    id: 1,
    svg: `${genderSvg}`,
    title: "Gender",
    desc: "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
  },
  {
    id: 2,
    svg: `${ageSvg}`,
    title: "Age",
    desc: "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.",
  },
  {
    id: 3,
    svg: `${muscleSvg}`,
    title: "Muscle",
    desc: "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.",
  },
  {
    id: 4,
    svg: `${pregnancySvg}`,
    title: "Pregnancy",
    desc: "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.",
  },
  {
    id: 5,
    svg: `${raceSvg}`,
    title: "Race",
    desc: "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.",
  },

];

const Limitation = () => {
  return (
    <section className={classes.main}>
      <div className={classes["limitation-text"]}>
      <h2 className="title-h2">Limitations of BMI</h2>
      <p className="desc-p">
        Although BMI is often a practical indicator of healthy weight, it is not
        suited for every person. Specific groups should carefully consider their
        BMI outcomes, and in certain cases, the measurement may not be
        beneficial to use.
      </p>
      </div>
      
      <ul className={classes["limitation-container"]}>
        {Limitation_Data.map((item) => (
          <Card key={item.id} className={classes.card}>
            <li>
              <div className={classes["title-div"]}>
                <img src={item.svg} alt={item.title} />
                <h3>{item.title}</h3>
              </div>
              <p className="desc-p">{item.desc}</p>
            </li>
          </Card>
        ))}
      </ul>
    </section>
  );
};

export default Limitation;
