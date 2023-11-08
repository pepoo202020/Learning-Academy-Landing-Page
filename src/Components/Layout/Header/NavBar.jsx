import { NavLink } from "react-router-dom";
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

const NavigationBar = () => {
  return (
    <div
      className="
            lg:flex
            items-center
            text-[#18191F]
            gap-[50px]
            font-medium
            hidden
        "
    >
      {links.map((linkItem, id) => (
        <NavLink
          to={linkItem.link}
          className={({ isActive }) => (isActive ? "font-bold" : "")}
          key={id}
        >
          {linkItem.displayName}
        </NavLink>
      ))}
    </div>
  );
};

export default NavigationBar;
