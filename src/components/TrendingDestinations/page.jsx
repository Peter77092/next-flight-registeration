import SwiperComp from "./SwiperComp";

const data = [
  {
    id: 0,
    image: "/images/8.jfif",
    stayName: "Niagara Falls",
    country: "Canada",
  },
  {
    id: 1,
    image: "/images/21.jfif",
    stayName: "Honolulu",
    country: "United States of America",
  },
  {
    id: 2,
    image: "/images/1.jfif",
    stayName: "Niagara Falls",
    country: "Canada",
  },
  {
    id: 3,
    image: "/images/2.jfif",
    stayName: "Honolulu",
    country: "Canada",
  },
  {
    id: 4,
    image: "/images/3.jfif",
    stayName: "Honolulu",
    country: "Canada",
  },
  {
    id: 5,
    image: "/images/9.jpg",
    stayName: "Niagara Falls",
    country: "Canada",
  },
  {
    id: 6,
    image: "/images/10.jpg",
    stayName: "Honolulu",
    country: "Canada",
  },
  {
    id: 7,
    image: "/images/11.jpg",
    stayName: "Honolulu",
    country: "United States of America",
  },
  {
    id: 8,
    image: "/images/12.jpg",
    stayName: "Niagara Falls",
    country: "Canada",
  },
  {
    id: 9,
    image: "/images/13.jpg",
    stayName: "United States of America",
    country: "Canada",
  },
  {
    id: 0,
    image: "/images/16.jpg",
    stayName: "Niagara Falls",
    country: "Canada",
  },
];

const TrendingDestinations = () => {
  return (
    <div className="my-10">
      <h1 className="text-[#191e3b] font-bold sm:text-3xl text-xl mb-5">Explore stays in trending destinations</h1>
      <SwiperComp data={data} />
    </div>
  );
};

export default TrendingDestinations;
