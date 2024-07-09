import Logo from "./Logo";
import MobileView from "./MobileView";
import Right from "./Right";
import ShopTravel from "./ShopTravel/ShopTravel";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="xl:px-80 sm:px-10 px-4 flex items-center justify-between h-full">
        <div className="flex gap-7">
          <Logo />
          <ShopTravel />
        </div>
        <Right />

        {/* MobileView */}
        <MobileView />
      </div>
    </header>
  );
};

export default Header;
