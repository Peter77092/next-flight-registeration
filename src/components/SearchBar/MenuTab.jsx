"use client";
import { ActiveBorder } from "./Borders";
import styles from "./styles.module.css";

const MenuTab = ({ setSelectedTab, selectedTab }) => {
  return (
    <div className="flex justify-center items-center border-b border-slate-300 h-12">
      <ul className="flex justify-center items-center gap-2 p-0 my-0 h-full">
        <li
          onClick={() => setSelectedTab("tab1")}
          className={`${styles.item__class} ${selectedTab === 'tab1' && styles.active}`}
        >
          Stays
          {selectedTab === "tab1" && <ActiveBorder />}
        </li>
        <li
          onClick={() => setSelectedTab("tab2")}
          className={`${styles.item__class} ${selectedTab === 'tab2' && styles.active}`}
        >
          Flights
          {selectedTab === "tab2" && <ActiveBorder />}
        </li>
        {/* <li
          onClick={() => setSelectedTab("tab3")}
          className={`${styles.item__class} ${selectedTab === 'tab3' && styles.active}`}
        >
          Packages
          {selectedTab === "tab3" && <ActiveBorder />}
        </li>
        <li
          onClick={() => setSelectedTab("tab4")}
          className={`${styles.item__class} ${selectedTab === 'tab4' && styles.active}`}
        >
          Things to do
          {selectedTab === "tab4" && <ActiveBorder />}
        </li> */}
      </ul>
    </div>
  );
};

export default MenuTab;
