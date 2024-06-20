import React, { useContext } from "react";
import Drawer from "../../components/custom/drawer/drawer";
import SearchContext from "../../contexts/search";
import Location from "../../components/custom/address/address";
import styles from "./search.module.scss";

const locations = [
  {
    type: "home",
    name: "Home",
    address:
      "Plot no 7, 146/6/1, Vrindavan colony, near krushi nagar, dabhadi road, Vyanktesh Nagar soyagaon, Camp, Malegaon, Maharashtra 423105, India",
  },
  {
    type: "work",
    name: "Work",
    address:
      "Hotel MBC Citadel, MIDC, Satpur Colony, Nashik, Maharashtra, India",
  },
  {
    type: "other",
    name: "Hotel",
    address:
      "Hotel MBC Citadel, MIDC, Satpur Colony, Nashik, Maharashtra, India",
  },
];

const gps = [
  {
    type: "gps",
    name: "Get current location",
    address: "Using GPS",
  },
];

const Search = () => {
  const { showSearch, setShowSearch } = useContext(SearchContext);

  const closeDrawer = () => {
    setShowSearch({ visible: false });
  };

  return (
    <Drawer state={showSearch} setState={setShowSearch} direction="left">
      <div className={styles["form"]}>
        <i className="bi bi-x-lg" onClick={closeDrawer} />
        <input type="text" placeholder="Search for area, street name..." />
        <Location locations={gps} />
        <Location header="SAVED ADDRESS" locations={locations} />
      </div>
    </Drawer>
  );
};

export default Search;
