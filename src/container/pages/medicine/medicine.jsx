import React from "react";
import classes from "./medicine.module.css";
import { Searcharea } from "../../../component/searcharea/searcharea";
import { Carousel } from "../../../component/carousel/caroursel";

export const Medicine = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className={classes.bg_container}>
        <Searcharea
          heading="Your medication, delivered"
          heading2="Say goodbye to all your healthcare worries with us"
          ItemName="Medicine"
        />
      </div>
      <Carousel />
    </div>
  );
};
