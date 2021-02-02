import React, { useState } from "react";
import { useSelector } from "react-redux";
import classes from "./cart.module.css";
import { Button, Drawer } from "antd";
import {
  ShoppingCartOutlined,
  PlusOutlined,
  MinusOutlined,
} from "@ant-design/icons";

export const Cart = () => {
  const [visible, setvisible] = useState(false);
  const cart = useSelector((state) => state.CART_ITEMS);

  const showDrawer = () => {
    setvisible(true);
  };

  const onClose = () => {
    setvisible(false);
  };

  return (
    <>
      <div onClick={showDrawer} className={classes.CartContainer}>
        <div>
          <ShoppingCartOutlined /> {cart.length} items
        </div>
        <Button className={classes.cartStyle} size="large">
          $0.00
        </Button>
      </div>

      <Drawer
        width={400}
        style={{ zIndex: 9999 }}
        title={`${cart.length} Items`}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <div
            style={{
              backgroundColor: "rgb(0, 158, 127)",
              fontWeight: "600",
              fontSize: "15px",
              height: "50px",
              borderRadius: "70px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              overflow: "hidden",
              padding: "4px",
            }}
          >
            <Button
              onClick={onClose}
              size="large"
              style={{
                backgroundColor: "transparent",
                outline: "none",
                border: "none",
                borderRadius: "70px",
                color: "white",
                fontWeight: "600",
                fontSize: "15px",
              }}
            >
              Checkout
            </Button>
            <Button
              onClick={onClose}
              size="large"
              type="primary"
              style={{
                borderRadius: "70px",
                backgroundColor: "white",
                color: "rgb(0,158,127)",
                fontWeight: "600",
                fontSize: "15px",
                outline: "none",
                height: "100%",
              }}
            >
              Submit
            </Button>
          </div>
        }
      >
        {cart.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "120px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  width: "30px",
                  height: "90px",
                  fontWeight: "700",
                }}
              >
                <div>
                  <PlusOutlined />
                </div>
                <div>{item.quantity}</div>
                <div>
                  <MinusOutlined />
                </div>
              </div>
              <img src={item.imgSrc} alt="" width="60px" height="60px" />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  width: "70px",
                  height: "85px",
                  textAlign: "left",
                }}
              >
                <div style={{ fontWeight: "700", fontSize: "15px" }}>
                  {item.itemName}
                </div>
                <div
                  style={{
                    fontWeight: "600",
                    color: "rgb(0, 158, 127)",
                    fontSize: "15px",
                  }}
                >{`$${item.amount}`}</div>
                <div>{`${item.quantity} X ${item.qty}`}</div>
              </div>
              <div
                style={{
                  fontWeight: "600",
                  fontSize: "15px",
                }}
              >{`$${(item.quantity * item.amount).toFixed(2)}`}
              </div>
            </div>
          );
        })}
      </Drawer>
    </>
  );
};
