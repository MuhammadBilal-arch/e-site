import React from "react";
import classes from "./grocery.module.css";
import { Searcharea } from "../../../component/searcharea/searcharea";
import { Carousel } from "../../../component/carousel/caroursel";
import { GroceryApi } from "./groceryApi";
import { Sidebar } from "../../../component/sidebar/sidebar";
import { Cart } from "../../../component/cart/cart";
export const Grocery = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Cart/>
      <div className={classes.bg_container}>
        <Searcharea
          heading="Groceries Delivered in 90 Minute"
          heading2="Get your healthy foods & snacks delivered at your doorsteps all day everyday"
          ItemName="Grocery"
        />
      </div>
      <Carousel />
      <div
        style={{
          position: "relative",
          left: "0",
          top: "800px",
          width: "100%",
          height: "200vh",
        }}
      >
        <Sidebar />
        <GroceryApi />
      </div>
    </div>
  );
};
