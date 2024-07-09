import React from "react";
import { Notification } from "../Icons";
import Link from "next/link";
import styles from "./styles.module.css";

const Right = () => {
  return (
    <div className="justify-center items-center gap-5 sm:flex hidden">
      <Link href="/blogs" className="hover:text-[#1668e3]">Blogs</Link>
      <Link href="https://www.expedia.com/helpcenter/" className="hover:text-[#1668e3]">Support</Link>
      <Link href="/notification" className="">
        <Notification className={styles.notification_svg} />
      </Link>
    </div>
  );
};

export default Right;
