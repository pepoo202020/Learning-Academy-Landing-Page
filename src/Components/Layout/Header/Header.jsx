import { Link } from "react-router-dom";
import logo from "../../../Assets/Logo.png";
import { motion } from "framer-motion";
import NavigationBar from "./NavBar";
import Actions from "./Actions";
import { useState } from "react";
import DrawbleMenu from "./DrawbleMenu";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [drawerState, setDrawerState] = useState(false);

  const toggleDrawer = () => {
    setDrawerState((pre) => !pre);
  };

  return (
    <header
      className="
      lg:px-[144px]
      md:px-[120px]
      px-10
      h-[84px]
      flex
      items-center
      justify-between
      bg-[#F5F7FA]
  "
    >
      {/* Logo Display */}
      <div
        className="
        lg:w-auto
        w-28
      "
      >
        <Link to="/">
          <motion.img src={logo} alt="Logo" whileHover={{ scale: 1.05 }} />
        </Link>
      </div>

      {/*LINK - NavLinks  */}
      <NavigationBar />

      {/*ANCHOR - Action Buttons */}
      <Actions />

      {/*ANCHOR - Mobile Menu Bar  */}
      <button
        className="
        lg:hidden
      "
        onClick={toggleDrawer}
      >
        <MenuIcon />
      </button>
      {drawerState && (
        <DrawbleMenu drawerState={drawerState} toggleDrawer={toggleDrawer} />
      )}
    </header>
  );
};

export default Header;
