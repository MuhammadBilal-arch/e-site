import React from "react";
import classes from "./makeup.module.css";
import { Searcharea } from "../../../component/searcharea/searcharea";
import { Carousel } from "../../../component/carousel/caroursel";

export const Makeup = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className={classes.bg_container}>
        <Searcharea
          heading="Branded & imported makeups"
          heading2="Easiest and cheapest way to get your branded & imported makeups"
          ItemName="Makeup"
        />
      </div>
      <Carousel />
    </div>
  );
};
