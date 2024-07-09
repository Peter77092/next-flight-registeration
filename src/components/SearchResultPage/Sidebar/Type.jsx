import CheckboxComp from "./CheckboxComp";
import SeeMoreLess from "./SeeMoreLess";

const filters = [
  "Vacation rentals",
  "Bed & breakfast",
  "Hotel resort",
  "Cottage",
  "Villa",
  "Apartment",
  "Condo",
  "Private vacation home",
];

const Type = ({className}) => {
  return (
    <div className="flex flex-col gap-1 mt-8">
      <p className="font-semibold text-sm">Property type</p>
      <SeeMoreLess filters={filters} className={className}> 
        {filters.map((item, index) => (
          <CheckboxComp key={index} title={item} name={item} />
        ))}
      </SeeMoreLess>
    </div>
  );
};

export default Type;
