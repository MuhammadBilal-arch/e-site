import React from "react";
import classes from "./bags.module.css";
import { Searcharea } from "../../../component/searcharea/searcharea";
import { Carousel } from "../../../component/carousel/caroursel";
export const Bags = () => {
  return (
    <div style={{display:"flex" , flexDirection:"column"}}>
      <div className={classes.bg_container}>
        <Searcharea
          heading="Exclusive Branded bags"
          heading2="Get your exclusive & branded bags delivered to you in no time"
          ItemName="Bags"
        />
      </div>
      <Carousel />
    </div>
  );
};
