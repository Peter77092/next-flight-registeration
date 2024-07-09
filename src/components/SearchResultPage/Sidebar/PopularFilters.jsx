import CheckboxComp from "./CheckboxComp";
import SeeMoreLess from "./SeeMoreLess";

const filters = [
  "All inclusive",
  "Hotel resort",
  "Pool",
  "House boat",
  "Ocean view",
];

const PopularFilters = ({ className }) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-semibold text-sm">Popular filters</p>
      <SeeMoreLess filters={filters} className={className}>
        {filters.map((item, index) => (
          <CheckboxComp key={index} title={item} name={item} />
        ))}
      </SeeMoreLess>
    </div>
  );
};

export default PopularFilters;
