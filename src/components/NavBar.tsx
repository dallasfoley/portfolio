import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const links = ["", "About", "Projects", "Contact"];

const NavBar = () => {
  return (
    <nav
      className="flex fixed justify-center md:justify-between items-center w-full h-10 
    bg-gradient-to-l from-slate-200 to-blue-300 z-10"
    >
      <span className="w-2/3 h-10 hidden md:flex md:justify-start md:items-center">
        <FontAwesomeIcon
          icon={faCode}
          color="blue"
          height={30}
          width={30}
          className="ml-5 text-4xl"
        />
        <h1 className="text-3xl font-bold text-blue-600 m-5">Dallas Foley</h1>
      </span>
      <div className="w-full md:w-1/3 flex justify-end">
        {links.map((link, key) => (
          <NavLink
            to={`/${link.toLowerCase()}`}
            key={key}
            className={({ isActive }) =>
              `text-blue-400 font-bold text-md md:text-xl m-3 md:m-5 transition duration-300 
        ease-in-out hover:text-red-500 hover:scale-110 ${
          isActive ? "text-red-500" : ""
        }`
            }
          >
            {link === "" ? "Home" : link}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
