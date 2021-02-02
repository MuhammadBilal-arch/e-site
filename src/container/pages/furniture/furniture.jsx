import React from "react";
import classes from "./furniture.module.css";
import { Searcharea } from "../../../component/searcharea/searcharea";
import { Carousel } from "../../../component/carousel/caroursel";

export const Furniture = () => {
  return (
    <div style={{display:"flex" , flexDirection:"column"}}>
    <div className={classes.bg_container}>
      <Searcharea
        heading="Exclusive furniture on cheap price"
        heading2="Make your house a home with our wide collection of beautiful furniture"
        ItemName="Furniture"
      />
    </div>
    <Carousel />
    </div>
  );
};
