import React from "react";
import { useDispatch } from "react-redux";
import classes from "./searcharea.module.css";
import { Input } from "antd";
import { getItems } from "../../Redux/Actions/itemActions";
const { Search } = Input;
export const Searcharea = (props) => {
  const dispatch = useDispatch();
  const onSearch = (value) => {
    dispatch(getItems(value));
  };

  return (
    <div className={classes.Searchcont}>
      <h1>{props.heading}</h1>
      <h2>{props.heading2}</h2>
      <div>
        <Search
          style={{ maxWidth: "580px", minWidth: "250px" }}
          placeholder="Search your products from here"
          enterButton="Search"
          size="large"
          addonBefore={
            <div
              style={{
                color: "rgb(0,158,127)",
                fontWeight: "600",
                fontSize: "15px",
              }}
            >
              {props.ItemName}
            </div>
          }
          onSearch={onSearch}
        />
      </div>
    </div>
  );
};
