import Image from "next/image";

const Advertise = ({ imgPath, className }) => {
  return (
    <div className={`${className} w-full h-[160px] relative`}>
      <Image src={imgPath} objectFit="cover" alt="ads" fill />
    </div>
  );
};

export default Advertise;
