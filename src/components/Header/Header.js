import logo from "../../assets/images/logo.svg";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes["header-bg"]}></div>
      <div className={classes['screen']}>
        <img src={logo} alt="logo" className={classes.logo} />
      <div className={classes['text-container']}>
        <h1>Body Mass <span className={classes.break}></span>Index Calculator</h1>
        <p>
          Better understand your weight in relation to your height using our
          body mass index (BM) calculator. While BMI is not the sole determinant
          of a healthy weight, it offers a valuable starting point to evaluate
          your overall health and well-being.
        </p>
      </div>
      </div>
    </header>
  );
};

export default Header;
