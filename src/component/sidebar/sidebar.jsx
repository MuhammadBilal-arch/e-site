import React, { useEffect, useState } from "react";
import classes from "./sidebar.module.css";
import { Layout, Menu } from "antd";
const { Sider } = Layout;

export const Sidebar = () => {
  const [sidebar, setsidebarState] = useState();
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 1100) {
        setsidebarState(true);
      } else {
        setsidebarState(false);
      }
    });
  }, []);

  return (
    <Sider className={sidebar ? classes.fixedbar : classes.Normalsidebar}>
      <Menu mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">Fruits & Vegetables</Menu.Item>
        <Menu.Item key="2">Meet & Fish</Menu.Item>
        <Menu.Item key="3">Snack</Menu.Item>
        <Menu.Item key="4">Pet Care</Menu.Item>
        <Menu.Item key="5">Home & Cleaning</Menu.Item>
        <Menu.Item key="6">Dairy</Menu.Item>
        <Menu.Item key="7">Cooking</Menu.Item>
        <Menu.Item key="8">Breakfast</Menu.Item>
        <Menu.Item key="9">Beverage</Menu.Item>
        <Menu.Item key="10">Beauty & Health</Menu.Item>
      </Menu>
    </Sider>
  );
};
