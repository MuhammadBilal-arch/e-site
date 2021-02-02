import React from "react";
import classes from "./clothing.module.css";
import { Searcharea } from "../../../component/searcharea/searcharea";
import { Carousel } from "../../../component/carousel/caroursel";

export const Clothing = () => {
  return (
    <div style={{display:"flex" , flexDirection:"column"}}>
    <div className={classes.bg_container}>
      <Searcharea
        heading="Shop your designer dresses"
        heading2="Ready to wear dresses tailored for you from online. Hurry up while stock lasts."
        ItemName="Clothing"
      />
    </div>
    <Carousel />
    </div>
  );
};
