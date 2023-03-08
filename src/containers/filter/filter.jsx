import React from "react";
import Drawer from "../../components/drawer/drawer";
import styles from "./filter.module.scss";

const Filter = ({ visible, setVisible }) => {
  return <Drawer state={visible} setState={setVisible}></Drawer>;
};

export default Filter;
