import CheckboxComp from "./CheckboxComp";
import SeeMoreLess from "./SeeMoreLess";

const filters = [
  "Breakfast included",
  "Lunch included",
  "Dinner included",
  "All inclusive",
];

const MealPlan = ({className}) => {
  return (
    <div className="flex flex-col gap-1 mt-8">
      <p className="font-semibold text-sm">Meal plans available</p>
      <SeeMoreLess filters={filters} className={className}>
        {filters.map((item, index) => (
          <CheckboxComp
            key={index}
            title={item}
            name={item}
            disabled={index === 3 && "disabled"}
          />
        ))}
      </SeeMoreLess>
    </div>
  );
};

export default MealPlan;
