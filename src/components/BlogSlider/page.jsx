import SwiperComp from "./SwiperComp";
import DefaultImg from "./DefaultImg";
import styles from "./styles.module.css";
import Advertise from "../Advertise";

const images = [
  {
    img: "/images/1.jfif",
    title: "Tehran",
  },
  {
    img: "/images/2.jfif",
    title: "Esfehan",
  },
  {
    img: "/images/3.jfif",
    title: "Kordestan",
  },
  {
    img: "/images/4.webp",
    title: "Shahrekord",
  },
  {
    img: "/images/5.png",
    title: "Esfaria=en",
  },
  {
    img: "/images/6.jpg",
    title: "Tehran",
  },
  {
    img: "/images/7.jpg",
    title: "Tehran",
  },
  {
    img: "/images/8.jfif",
    title: "Tehran",
  },
  {
    img: "/images/9.jpg",
    title: "Tehran",
  },
  {
    img: "/images/10.jpg",
    title: "Tehran",
  },
  {
    img: "/images/11.jpg",
    title: "Tehran",
  },
  {
    img: "/images/12.jpg",
    title: "Tehran",
  },
  {
    img: "/images/13.jpg",
    title: "Tehran",
  },
  {
    img: "/images/14.webp",
    title: "Tehran",
  },
  {
    img: "/images/15.webp",
    title: "Tehran",
  },
  {
    img: "/images/16.jpg",
    title: "Tehran",
  },
  {
    img: "/images/17.jpg",
    title: "Tehran",
  },
  {
    img: "/images/18.webp",
    title: "Tehran",
  },
  {
    img: "/images/19.png",
    title: "Tehran",
  },
  {
    img: "/images/20.jpg",
    title: "Tehran",
  },
  {
    img: "/images/21.jfif",
    title: "Tehran",
  },
  {
    img: "/images/22.jpg",
    title: "Mashhad",
  },
];

const BlogSlider = () => {
  return (
    <div className="flex flex-col mt-10 gap-6">
      
      <h1 className="text-black text-2xl font-semibold">
        Discover your new favorite blog
      </h1>

      {/* Image slider */}
      <SwiperComp data={images} />

      <Advertise imgPath="/images/ads/ad11.jfif" />

      {/* default image */}
      <figure className={styles.default_image}>
        <DefaultImg />
      </figure>
    </div>
  );
};

export default BlogSlider;
