import React, { useState } from "react";
import MenuTab2 from "./MenuTab2";
import Tab2_1 from "./Tab2_1";
import Tab2_2 from "./Tab2_2";
import Tab2_3 from "./Tab2_3";

const Tab2 = () => {
  const [selectedTab, setSelectedTab] = useState("tab1");
  return (
    <div className="flex flex-col gap-3">
      <MenuTab2 selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div className="py-3 px-1">
        {selectedTab === "tab1" && <Tab2_1 />}
        {selectedTab === "tab2" && <Tab2_2 />}
        {selectedTab === "tab3" && <Tab2_3 />}
      </div>
    </div>
  );
};

export default Tab2;
