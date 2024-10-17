import { NavLink } from "react-router-dom";
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";
import mopadaLogo from "/assets/MoPADA-SL-Logo.png";
import DropdownHover from "./DropdownHover";
import React, { useState } from "react";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  // Example set of dropdown items for user profile
  const AboutUs = [
    { label: "Who we are", href: "/about-us" },
    { label: "Our History", href: "/our-history" },
    { label: "Our Team", href: "/our-team" },
    { label: "Our Partners", href: "/our-sponsors" },
  ];
  // Example set of dropdown items for notifications
  const OurWork = [
    { label: "Advocacy", href: "/advocacy" },
    { label: "Gender", href: "/gender" },
    { label: "Governance & Education", href: "/governance-education" },
    { label: "Livelihood & Support", href: "/livelihood-support" },
    { label: "WASH/ Health & Nutrition", href: "/wash-health-nutrition" },
  ];

  const GetInvolved = [
    { label: "Volunteer", href: "/volunteer" },
    { label: "Job Opportunities", href: "job-opportunities" },
  ];

  const styleFunction = ({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "" || isActive ? "#163989" : "black",
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  };

  return (
    <header className="fixed top-0 w-full z-50">
      <nav className="bg-[#f0f4f8] py-4 text-primary ">
        <div className="container mx-auto flex items-center justify-around px-4">
          <div className="flex items-center space-x-4"></div>
          <div className="flex items-center space-x-4">
            <NavLink
              className="text-sm font-bold text-primary hover:text-gray-900"
              to="/blog"
            >
              Blog
            </NavLink>
            <NavLink
              className="text-sm font-bold text-primary hover:text-gray-900"
              to="/news-letter"
            >
              Newsletter
            </NavLink>
            <FiYoutube className="h-5 w-5 text-primary cursor" />
            <FiFacebook className="h-5 w-5 text-primary cursor" />
            <FiTwitter className="h-5 w-5 text-primary cursor" />
            <FiInstagram className="h-5 w-5 text-primary cursor" />
          </div>
        </div>
      </nav>

      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={mopadaLogo} className="h-12" alt="Mopada SL Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Mopada SL
            </span>
          </NavLink>
          <button
            // data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-md md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            // aria-controls="navbar-dropdown"
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`w-full md:block md:w-auto ${
              isNavOpen ? "block" : "hidden"
            }`}
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium p-0 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 text-md justify-center">
              <li className="text-center py-3 border-t border-b border-black md:border-0 mb-2 md:mb-0">
                <NavLink
                  to="/"
                  className={`block px-3 text-black rounded md:p-0 `}
                  style={styleFunction}
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li className="text-center py-3 border-t border-b border-black md:border-0 mb-2 md:mb-0">
                <DropdownHover
                  style={styleFunction}
                  label="About Us"
                  items={AboutUs}
                />
              </li>
              <li className="text-center py-3 border-t border-b border-black md:border-0 mb-2 md:mb-0">
                <DropdownHover
                  style={styleFunction}
                  label="Our Work"
                  items={OurWork}
                />
              </li>
              <li className="text-center py-3 border-t border-b border-black md:border-0 mb-2 md:mb-0">
                <NavLink
                  to="/projects"
                  // className="block py-3 px-6 mx-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  className="block px-3 text-black rounded md:p-0 "
                  aria-current="page"
                  style={styleFunction}
                >
                  Projects
                </NavLink>
              </li>
              <li className="text-center py-3 border-t border-b border-black md:border-0 mb-2 md:mb-0">
                <NavLink
                  to="/events"
                  // className="block py-3 px-6 mx-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  className="block px-3 text-black rounded md:p-0 "
                  aria-current="page"
                  style={styleFunction}
                >
                  Events
                </NavLink>
              </li>
              <li className="text-center py-3 border-t border-b border-black md:border-0 mb-2 md:mb-0">
                <DropdownHover
                  style={styleFunction}
                  className="text-md"
                  label="Get Involved"
                  items={GetInvolved}
                />
              </li>

              <li className=" ">
                <NavLink
                  to="/donation"
                  className="bg-primary mt-0 md:m-3 py-2  rounded-md outline outline-0 hover:outline-black hover:bg-white hover:outline-2 block text-center  mx-3 text-white hover:text-primary rounded  md:hover:bg-transparent md:border-0 md:p-0 "
                >
                  DONATE
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
