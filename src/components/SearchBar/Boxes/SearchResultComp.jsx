import { motion } from "framer-motion";
import MenuItem from "./MenuItem";

const SearchResultComp = ({setOpen, setSearchVal}) => {
  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const itemIds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
  <motion.ul variants={variants} className="h-full overflow-y-scroll overflow-x-hidden">
    {itemIds.map(i => (
        <MenuItem i={i} key={i} setOpen={setOpen} setSearchVal={setSearchVal} />
    ))}
  </motion.ul>);
};

export default SearchResultComp;