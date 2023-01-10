import React, { lazy, useState } from "react";
import styles from "./css/styles.module.css";
import { useMediaQuery } from "react-responsive";
const Sidebar = lazy(() => import("../SideBar"));
const Header = lazy(() => import("../Header"));
type Props = {
  children: React.ReactNode;
};

const Index: React.FC<Props> = ({ children }) => {
  const [mobileNav, setmobileNav] = useState<boolean>(false);
  const isMobile: boolean = useMediaQuery({ query: `(max-width: 768px)` });
  const handleMobileNav = () => {
    if (isMobile) {
      setmobileNav(!mobileNav);
    }
  };
  return (
    <div className="">
      <Header mobileNav={mobileNav} handleMobileNav={handleMobileNav} />
      <div className={styles.dashboard__}>
        {" "}
        <Sidebar mobileNav={mobileNav} />
        <div className={`${styles.con__} mx-auto max-w-[1240px]`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Index;
