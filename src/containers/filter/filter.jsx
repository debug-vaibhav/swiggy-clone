import React from "react";
import Drawer from "../../components/drawer/drawer";

const Filter = ({ visible, setVisible }) => {
  return <Drawer state={visible} setState={setVisible}></Drawer>;
};

export default Filter;
