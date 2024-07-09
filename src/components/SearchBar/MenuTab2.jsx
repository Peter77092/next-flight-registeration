import React from "react";
import { ActiveBorder, Line } from "./Borders";
import Selector from "./Selector";
import styles from "./styles.module.css";

const MenuTab2 = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className="flex md:flex-row flex-col justify-start md:items-center items-start h-12 gap-4 relative mb-2">
      <ul className="flex justify-center items-center gap-2 p-0 my-0 h-full">
        <li
          onClick={() => setSelectedTab("tab1")}
          className={`${styles.item__class} ${
            selectedTab === "tab1" && styles.active
          }`}
        >
          Roundtrip
          {selectedTab === "tab1" && <ActiveBorder />}
        </li>
        <li
          onClick={() => setSelectedTab("tab2")}
          className={`${styles.item__class} ${
            selectedTab === "tab2" && styles.active
          }`}
        >
          One-way
          {selectedTab === "tab2" && <ActiveBorder />}
        </li>
        <li
          onClick={() => setSelectedTab("tab3")}
          className={`${styles.item__class} ${
            selectedTab === "tab3" && styles.active
          }`}
        >
          Multi-city
          {selectedTab === "tab3" && <ActiveBorder />}
        </li>
      </ul>

      <Selector />
      <Line width='400px' />
    </div>
  );
};

export default MenuTab2;
