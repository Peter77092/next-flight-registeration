import React from "react";
import FooterList from "./FooterList";

const Middle_container = () => {
  const company = {
    title: "Company",
    items: [
      "About",
      "Jobs",
      "list your property",
      "partnership",
      "newsroom",
      "investor relations",
      "advertising",
      "affiliate marketing",
      "feedback",
    ],
  };
  const explore = {
    title: "Explore",
    items: [
      "United States of America travel guide",
      "Hotels in United States of America",
      "Vacation rentals in United States of America",
      "Vacation packages in United States of America",
      "Domestic flights",
      "investor Car rentals in United States of America",
      "All accommodation types"
    ],
  };
  const policies = {
    title: "Policies",
    items: [
      "Privacy",
      "Terms of use",
      "Vrbo terms and conditions",
      "Get started with One Key™",
      "Accessibility",
      "Your privacy choices",
      "All accommodation types"
    ],
  };
  const help = {
    title: "Help",
    items: [
      "Support",
      "Cancel your hotel or vacation rental booking",
      "Cancel your flight",
      "Refund timelines, policies & processes",
      "Use an Expedia coupon",
      "International travel documents",
    ],
  };
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2">
      <FooterList title={company.title} data={company.items} />
      <FooterList title={explore.title} data={company.items} />
      <FooterList title={policies.title} data={company.items} />
      <FooterList title={help.title} data={company.items} />
    </div>
  );
};

export default Middle_container;
