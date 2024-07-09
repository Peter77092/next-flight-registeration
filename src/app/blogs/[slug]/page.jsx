import {
  FacebookIcon,
  LinkDinIcon,
  PinterestIcon,
  TwitterIcon,
} from "@/components/Icons";
import Image from "next/image";
import Link from "next/link";
import styles from "./slug.module.css";
import LatestBlog from "@/components/blogs/latestBlog";
import Advertise from "@/components/Advertise";

const SingleBlog = ({ params }) => {
  console.log(params.slug);
  const categories = [
    {
      id: 1,
      category: "Toy",
    },
    {
      id: 2,
      category: "Diy",
    },
    {
      id: 3,
      category: "Toy 24",
    },
    {
      id: 4,
      category: "Day 78",
    },
  ];

  const blogs = [
    {
      image: "/images/blogs/03.webp",
      date: "03 Aug 2024",
      slug: "how-to-make",
      view: 14,
      title: "How to make toys from old Olarpaper",
      summary:
        "Nemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque bla...",
    },
    {
      image: "/images/blogs/05.webp",
      date: "05 Dec 2023",
      view: 78,
      slug: "humans-from-old",
      title: "How to make humans from old Olarpaper",
      summary:
        "Nemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque bla...",
    },
    {
      image: "/images/blogs/01.webp",
      date: "05 Dec 2023",
      view: 78,
      slug: "humans-from-old",
      title: "How to make humans from old Olarpaper",
      summary:
        "Nemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque bla...",
    },
  ];

  return (
    <div className="sm:px-[15%] px-[3%] sm:mt-5 mt-2">
      <h1 className="text-center font-bold md:text-5xl sm:text-2xl text-lg mb-6">
        DIY Paper Diamond Tutorial with HUNGRY HEART
      </h1>
      <Image
        width={925}
        height={475}
        className="rounded-xl shadow-xl m-auto"
        src="/images/blogs/05.webp"
        alt="blog"
      />
      <p className="md:text-xl sm:text-base text-sm mt-7">
        Nemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna.
        Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus
        vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit
        euismod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
        vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi
        repellendus consequatur quibusdam optio expedita praesentium est
        adipisci dolorem ut eius! Creative Design Nam ut rutrum ex, venenatis
        sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut
        bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis
        neque blandit euismod.
      </p>

      {/* Advertise */}
      <Advertise imgPath="/images/ads/ad2.jpg" className="mt-5" />

      <p className="md:text-xl sm:text-base text-sm mt-7">
        Nemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna.
        Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus
        vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit
        euismod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
        vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi
        repellendus consequatur quibusdam optio expedita praesentium est
        adipisci dolorem ut eius! Creative Design Nam ut rutrum ex, venenatis
        sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut
        bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis
        neque blandit euismod.
      </p>

      {/* tags & social media */}
      <div className="mt-20 flex justify-between pb-16">
        {/* categories */}
        <div className="flex sm:gap-2 gap-1 items-center flex-wrap">
          {categories.map((category) => (
            <div
              className="p-2 bg-[#eaeaea] text-sm rounded-lg flex justify-center items-center cursor-pointer hover:scale-110 shadow-lg hover:shadow-2xl hover:text-green-500"
              key={category.id}
            >
              #{category.category}
            </div>
          ))}
        </div>
        {/* social media */}
        <ul className="flex gap-3 items-center">
          <li>
            <Link
              href="https://facebook.com/sharer/sharer.php?u=//post-7"
              aria-label="facebook share button"
              target="_blank"
              rel="noreferrer noopener"
              className={styles.socialIcon}
            >
              <FacebookIcon />
            </Link>
          </li>
          <li>
            <Link
              aria-label="twitter share button"
              href="https://twitter.com/intent/tweet/?text=DIY Paper Diamond Tutorial with HUNGRY HEART&amp;url=//post-7"
              target="_blank"
              rel="noreferrer noopener"
              className={styles.socialIcon}
            >
              <TwitterIcon />
            </Link>
          </li>
          <li>
            <Link
              href="https://pinterest.com/pin/create/button/?url=//post-7&media=&description=meta description"
              aria-label="linkedin share button"
              target="_blank"
              rel="noreferrer noopener"
              className={styles.socialIcon}
            >
              <LinkDinIcon />
            </Link>
          </li>
          <li>
            <Link
              href="https://pinterest.com/pin/create/button/?url=//post-7&media=&description=meta description"
              aria-label="pinterest share button"
              target="_blank"
              rel="noreferrer noopener"
              className={styles.socialIcon}
            >
              <PinterestIcon />
            </Link>
          </li>
        </ul>
      </div>

      <div className="pt-16">
        <h2 className="mb-8 text-center md:text-5xl sm:text-4xl text-3xl font-bold">
          Similar Posts
        </h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 items-start">
          {blogs.map((item, index) => (
            <LatestBlog
              image={item.image}
              date={item.date}
              view={item.view}
              title={item.title}
              summary={item.summary}
              key={index}
              slug={item.slug}
              className="lg:text-2xl md:text-xl sm:text-lg text-base"
              className2="md:text-[0.85rem] md:leading-[1.25rem] text-[0.775rem] leading-[1rem]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
