import { Box, Divider, Drawer, List, ListItem } from "@mui/material";
import logo from "../../../Assets/Logo.png";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
const links = [
  {
    displayName: "Home",
    link: "/",
  },
  {
    displayName: "Services",
    link: "/services",
  },
  {
    displayName: "Feature",
    link: "/feature",
  },
  {
    displayName: "Product",
    link: "/product",
  },
  {
    displayName: "Testimonial",
    link: "/testimonial",
  },
  {
    displayName: "FAQ",
    link: "/faq",
  },
];

const DrawbleMenu = ({ drawerState, toggleDrawer }) => {
  return (
    <Drawer anchor="right" open={drawerState} onClose={toggleDrawer}>
      <Box role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
        <div className="mt-10 mx-5 mb-10">
          <Link to="/">
            <motion.img src={logo} alt="Logo" whileHover={{ scale: 1.05 }} />
          </Link>
        </div>
        <Divider />
        <List>
          {links.map((linkItem, index) => (
            <ListItem key={index} disablePadding>
              <NavLink
                className={`p-2 hover:bg-[#F5F7FA] w-full ${({ isActive }) =>
                  isActive ? "font-bold" : ""}`}
                to={linkItem.link}
              >
                {linkItem.displayName}
              </NavLink>
            </ListItem>
          ))}
        </List>
        <Divider />

        <List>
          <ListItem disablePadding>
            <button
              className="
            w-full
            transition-all
            px-[20px]
            py-[10px]
            text-[14px]
            text-[#4CAF4F]
            font-medium
            hover:text-white
            hover:bg-[#4CAF4F]
            mx-4
            rounded
        "
            >
              Login
            </button>
          </ListItem>
          <ListItem>
            <button
              className="
          transition-all
          w-full
          px-[20px]
          py-[10px]
          text-[14px]
          text-white
          font-medium
          bg-[#4CAF4F]
          rounded
          hover:bg-transparent
          hover:text-[#4CAF4F]
          
      "
            >
              Signup
            </button>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default DrawbleMenu;
