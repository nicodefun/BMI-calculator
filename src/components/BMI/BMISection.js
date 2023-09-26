import { Fragment } from "react";
import ImgSection from "./ImgSection";
import BMIList from './BMIList';
import Limitation from "./Limitation";
const BMISection =()=>{
    return(
        <Fragment>
            <ImgSection />
            <BMIList />
            <Limitation />
        </Fragment>
    )


}
export default BMISection;