import CheckboxComp from "./CheckboxComp";

const filters = [
  "VIP Access properties Top-rated stays with member perks",
  "Member Prices Instant savings of 10% or more on select stays",
];

const OneKeyBenefits = () => {
  return (
    <div className="flex flex-col gap-1 mt-8">
      <p className="font-semibold text-sm">One Key Benefits</p>
      {filters.map((item, index) => (
        <CheckboxComp
          key={index}
          title={item}
          name={item}
          disabled={index === 3 && "disabled"}
        />
      ))}
    </div>
  );
};

export default OneKeyBenefits;
