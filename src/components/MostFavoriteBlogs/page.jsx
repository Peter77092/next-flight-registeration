import CustomCardComponent from "../CustomCardComponent";

const MostFavoriteBlogs = () => {
  const data = [
    {
      id: 1,
      img: "/images/1.jfif",
      title: "title1",
      content:
        "Column 1 Column 1 Column 1 Column 1 Column 1Column 1 Column 1 Column 1 Column 1 Column 1",
    },
    {
      id: 2,
      img: "/images/2.jfif",
      title: "title2",
      content:
        "Column 2 Column 2 Column 2Column 2 Column 2 Column 2 Column 2Column 2Column 2 Column 2 Column 2 Column 2",
    },
    {
      id: 3,
      img: "/images/3.jfif",
      title: "title3",
      content:
        "Column 3 Column 3 Column 3 Column 3 Column 3 v  Column 3 Column 3 Column 3Column 3 vColumn 3 Column 3 Column 3",
    },
    { id: 4, img: "/images/4.webp", title: "title4", content: "Column 4" },
    { id: 5, img: "/images/5.png", title: "title5", content: "Column 5" },
  ];
  const slicedData = data.slice(0, 3);

  return <CustomCardComponent data={slicedData} className='md:grid-cols-3' />;
};

export default MostFavoriteBlogs;
