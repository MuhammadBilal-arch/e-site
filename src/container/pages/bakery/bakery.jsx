import React from "react";
import classes from "./bakery.module.css";
import { Searcharea } from "../../../component/searcharea/searcharea";
import { Carousel } from "../../../component/carousel/caroursel";

export const Bakery = () => {
  return (
    <div style={{display:"flex" , flexDirection:"column"}}>
      <div className={classes.bg_container}>
        <Searcharea
          heading="Get Your Bakery Items Delivered"
          heading2="Get your favorite bakery items baked and delivered to your doorsteps at any time"
          ItemName="Bakery"
        />
      </div>
      <Carousel />
    </div>
  );
};
