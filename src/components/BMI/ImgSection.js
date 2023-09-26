import manImg from "../../assets/images/image-man-eating.webp";
import classes from "./ImgSection.module.css";
const ImgSection = () => {
  return (
    <section className={classes["bmi-img-section"]}>
      <div className={classes["img-container"]}>
        <img src={manImg} alt="man-img" />
      </div>
      <div className={classes["text-container"]}>
        <h2 className="title-h2">What your BMI result means</h2>
        <p className="desc-p">
          A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
          Maintaining a healthy weight may lower your chances of experiencing
          health issues later on, such as obesity and type 2 diabetes. Aim for a
          nutritious diet with reduced fat and sugar content, incorporating
          ample fruits and vegetables. Additionally, strive for regular physical
          activity, ideally about 30 minutes daily for five days a week.
        </p>
      </div>
    </section>
  );
};

export default ImgSection;
