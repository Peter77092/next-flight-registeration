"use client";
import { getCookie, setCookie } from "cookies-next";
import { v4 as uuidv4 } from "uuid";

const AdvertiseLayout = ({ children }) => {
  const urlAds =
    "https://www.visitmaryland.org/history?utm_source=expediaplus&utm_medium=paid_display&utm_campaign=springsummer_2024&utm_content=core_youre-welcome_history-you-can-feel_plan-your-trip_160x600";

  const handleClickOnce = () => {
    const visitorId = getCookie("visitor_id");
    if (visitorId === undefined) {
      setCookie("visitor_id", uuidv4());
      window.open(urlAds, "_blank");
    }
  };

  return (
    <div
      onClick={handleClickOnce}
      className="min-h-screen flex flex-col bg-[#eff3f7]"
    >
      {children}
    </div>
  );
};

export default AdvertiseLayout;
