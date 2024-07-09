import Advertise from "@/components/Advertise";
import LatestBlog from "@/components/blogs/latestBlog";
import { Pagination } from "@nextui-org/react";

const Blogs = () => {
  const latest = {
    image: "/images/blogs/01.webp",
    date: "03 Apr 2023",
    view: 64,
    title: "How to make toys from old Olarpaper",
    slug: "how-to-make",
    summary:
      "Nemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque bla...",
  };

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
  ];

  // const handleChange = (page) => {
  //   console.log(page);
  // }

  return (
    <div className="px-[15%]">
      {/* latest article */}
      <LatestBlog
        image={latest.image}
        date={latest.date}
        view={latest.view}
        title={latest.title}
        summary={latest.summary}
        slug={latest.slug}
      />

      {/* advertise */}
      <Advertise imgPath="/images/ads/ad8.jfif" className="mb-6" />

      <div className="flex md:flex-row flex-col gap-5">
        {blogs.map((item, index) => (
          <LatestBlog
            image={item.image}
            date={item.date}
            view={item.view}
            title={item.title}
            summary={item.summary}
            key={index}
            slug={item.slug}
          />
        ))}
      </div>

      <div className="flex w-full justify-center">
        <Pagination
          showShadow={true}
          color="warning"
          total={10}
          initialPage={1}
          // onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Blogs;
