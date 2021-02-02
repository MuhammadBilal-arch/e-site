import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Button } from "antd";
import lime from "./imagesApi/lime.jpg";
import lemon from "./imagesApi/Lemon.jpg";
import Cherry from "./imagesApi/Cherry.jpg";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { getcartItems } from "../../../Redux/Actions/itemActions";
import classes from "./grocery.module.css";
export const GroceryApi = () => {
  const Cartitems = useSelector((state) => state.Cartitems);
  const dispatch = useDispatch();
  const [cart, setcart] = useState([]);
  const [GroceryItems] = useState([
    {
      itemName: "lime",
      qty: "12pc(s)",
      exp:
        "The lemon/lime, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      ctgry: { ctg1: "Fruits & Vegetables", ctg2: "vegetables" },
      amount: 1.5,
      imgSrc: "/img/lime.jpg",
      quantity: 1,
    },
    {
      itemName: "lemon",
      qty: "12pc(s)",
      exp:
        "The lemon/lime, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      ctgry: { ctg1: "Fruits & Vegetables", ctg2: "vegetables" },
      amount: 1.5,
      imgSrc: "/img/Lemon.jpg",
      quantity: 1,
    },
    {
      itemName: "Cherry",
      qty: "0.5lb",
      exp:
        "A cherry is the fruit of many plants of the genus Prunus, and is a fleshy drupe. Commercial cherries are obtained from cultivars of several species, such as the sweet Prunus avium and the sour Prunus cerasus.",
      ctgry: { ctg1: "Fruits & Vegetables", ctg2: "vegetables" },
      amount: 2,
      imgSrc: "/img/cherry.jpg",
      quantity: 1,
    },
    {
      itemName: "Pepper",
      qty: "12pc(s)",
      exp:
        "The lemon/lime, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      ctgry: { ctg1: "Fruits & Vegetables", ctg2: "vegetables" },
      amount: 1.2,
      imgSrc: "/img/Pepper.jpg",
      quantity: 1,
    },
    {
      itemName: "amrood",
      qty: "12pc(s)",
      exp:
        "The lemon/lime, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      ctgry: { ctg1: "Fruits & Vegetables", ctg2: "vegetables" },
      amount: 1.2,
      imgSrc: lime,
      quantity: 1,
    },
    {
      itemName: "lime",
      qty: "12pc(s)",
      exp:
        "The lemon/lime, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      ctgry: { ctg1: "Fruits & Vegetables", ctg2: "vegetables" },
      amount: 1.5,
      imgSrc: lime,
      quantity: 1,
    },
    {
      itemName: "lemon",
      qty: "12pc(s)",
      exp:
        "The lemon/lime, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      ctgry: { ctg1: "Fruits & Vegetables", ctg2: "vegetables" },
      amount: 1.5,
      imgSrc: lemon,
      quantity: 1,
    },
    {
      itemName: "Cherry",
      qty: "0.5lb",
      exp:
        "A cherry is the fruit of many plants of the genus Prunus, and is a fleshy drupe. Commercial cherries are obtained from cultivars of several species, such as the sweet Prunus avium and the sour Prunus cerasus.",
      ctgry: { ctg1: "Fruits & Vegetables", ctg2: "vegetables" },
      amount: 2,
      imgSrc: Cherry,
      quantity: 1,
    },
    {
      itemName: "papita",
      qty: "12pc(s)",
      exp:
        "The lemon/lime, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      ctgry: { ctg1: "Fruits & Vegetables", ctg2: "vegetables" },
      amount: 1.2,
      imgSrc: lime,
      quantity: 1,
    },
    {
      itemName: "amrood",
      qty: "12pc(s)",
      exp:
        "The lemon/lime, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      ctgry: { ctg1: "Fruits & Vegetables", ctg2: "vegetables" },
      amount: 1.2,
      imgSrc: lime,
      quantity: 1,
    },
  ]);
  const OnAddToCart = (itemInCart) => {
    cart.length === 0 && setcart([...cart, { ...itemInCart }]);
    let clone = [...cart];
    let itemMatched = false;
    cart.map((item, index) => {
      return item.itemName
        .toLowerCase()
        .includes(itemInCart.itemName.toLowerCase())
        && ((clone[index] = {
            ...clone[index],
            quantity: item.quantity + 1,
          },
          itemMatched = true
          ),
          setcart(clone))
    });

    if(!itemMatched && cart.length !== 0)
    {
      setcart([...cart, { ...itemInCart }]);
    }
  };

  useEffect(() => {
    dispatch(getcartItems(cart));
  }, [cart, dispatch]);

  // const onRemoveFromCart = (item) => {
  //   setcart(cart.filter((product) => product !== item));
  // };

  return (
    <div className={classes.groceryContainer}>
      <Row
        justify="start"
        gutter={[24, 32]}
        style={{ margin: "0", padding: "0 50px" }}
      >
        {GroceryItems.map((item, index) => {
          return (
            item.itemName.toLowerCase().includes(Cartitems.toLowerCase()) && (
              <Col
                key={index}
                className="gutter-row"
                xs={{ span: 24 }}
                sm={{ span: 12 }}
                md={{ span: 12 }}
                lg={{ span: 6 }}
              >
                <div style={{ borderRadius: "15px", overflow: "hidden" }}>
                  <img src={item.imgSrc} alt="" width="100%" height="auto" />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "15px",
                      backgroundColor: "white",
                    }}
                  >
                    <span
                      style={{
                        textAlign: "left",
                        fontWeight: "700",
                      }}
                    >
                      {item.itemName}
                    </span>
                    <span style={{ textAlign: "left" }}>{item.qty}</span>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontWeight: "600",
                        color: "rgb(0, 158, 127)",
                        fontSize: "15px",
                        border: "none",
                        outline: "none",
                      }}
                    >
                      <div>${item.amount}</div>
                      <Button
                        type="default"
                        style={{
                          fontSize: "15px",
                          border: "none",
                          fontWeight: "600",
                          color: "rgb(0, 158, 127)",
                        }}
                        onClick={() => OnAddToCart(item)}
                      >
                        <ShoppingCartOutlined /> Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            )
          );
        })}
      </Row>
    </div>
  );
};
