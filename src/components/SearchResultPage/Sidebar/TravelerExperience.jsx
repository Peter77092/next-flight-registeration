import CheckboxComp from "./CheckboxComp";
import SeeMoreLess from "./SeeMoreLess";

const filters = [
  "Eco-certified",
  "LGBTQ welcoming",
  "Business friendly",
  "Family friendly",
  "Adults only",
  "Wedding",
  "Luxury Property",
  "Budget Property",
  "Romantic",
  "Beach",
];

const fetch = async () => {
  await fetch('https://amirseraj.com')
}

const TravelerExperience = ({className}) => {
  return (
    <div className="flex flex-col gap-1 mt-8">
      <p className="font-semibold text-sm">Traveler experience</p>
      <SeeMoreLess filters={filters} className={className}>
        {filters.map((item, index) => (
          <CheckboxComp
            key={index}
            title={item}
            name={item}
            disabled={index === filters.length - 1 && "disabled"}
          />
        ))}
      </SeeMoreLess>
    </div>
  );
};

export default TravelerExperience;
