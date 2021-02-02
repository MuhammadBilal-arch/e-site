import React from "react";
import classes from "./book.module.css";
import { Searcharea } from "../../../component/searcharea/searcharea";
import { Carousel } from "../../../component/carousel/caroursel";

export const Book = () => {
  return (
    <div style={{display:"flex" , flexDirection:"column"}}>
    <div className={classes.bg_container}>
      <Searcharea
        heading="Your own books store"
        heading2="Ready to wear dresses tailored for you from online. Hurry up while stock lasts."
        ItemName="Book"
      />
    </div>
    <Carousel />
    </div>
  );
};
