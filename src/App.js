import { Fragment } from "react";
import Header from "./components/Header/Header";
import Calculator from "./components/Calculator/Calculator";
import BMISection from "./components/BMI/BMISection";

function App() {
  return (
    <div className="main">
      <Header />
      <Calculator />
      <BMISection />
    </div>
  );
}

export default App;
