import Image from "next/image";

const CustomCardComponent = ({ data, className }) => {
  return (
    <div
      className={`${className} grid grid-cols-1 gap-5 md:mt-4 mt-8`}
    >
      {data.map((item, index) => (
        <div className="flex flex-col w-full" key={index}>
          <div key={index} className="relative w-full aspect-[3/2] rounded-lg">
            <Image
              src={item.img}
              alt={item.content}
              fill
              objectFit="cover"
              objectPosition="center"
              className="rounded-xl w-full"
              layout="fill"
              priority
            />
          </div>
          <div className="flex flex-col gap-1 mt-2 px-1">
            <h1 className="text-xl font-bold">{item.title}</h1>
            <p className="text-sm">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomCardComponent;
