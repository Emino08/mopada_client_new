// import React from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import { useMediaQuery } from "react-responsive";
//
// function DropdownHover({ label, items, className, style }) {
//   const location = useLocation();
//   const isActive = items.some((item) => item.href === location.pathname);
//   const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
//
//   return (
//     <div className={className}>
//       <NavLink
//         to="#"
//         id="dropdownHoverButton"
//         data-dropdown-toggle={`${label}`}
//         data-dropdown-trigger={isMobile ? "click" : "hover"}
//         className={`text-black md:p-0 rounded-lg px-4 text-center inline-flex items-center ${
//           isActive ? "text-primary font-bold" : ""
//         }`}
//         aria-current="page"
//       >
//         {label}
//         <svg
//           className="w-2.5 h-2.5 ms-3"
//           aria-hidden="true"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 10 6"
//         >
//           <path
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="m1 1 4 4 4-4"
//           />
//         </svg>
//       </NavLink>
//
//       {/*Dropdown menu*/}
//       <div
//         id={`${label}`}
//         className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
//       >
//         <ul
//           className="py-2 text-gray-700 dark:text-gray-200"
//           aria-labelledby="dropdownHoverButton"
//         >
//           {items.map((item, index) => (
//             <li key={index}>
//               <NavLink
//                 to={item.href}
//                 // className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                 className="block py-2 px-4 divide-y divide-black rounded-lg shadow w-44 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-[16px]"
//                 aria-current="page"
//                 style={style}
//               >
//                 {item.label}
//               </NavLink>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
//
// export default DropdownHover;
import React, {useState} from "react";
import {NavLink, useLocation} from "react-router-dom";
import {useMediaQuery} from "react-responsive";

function DropdownHover({ label, items, className, style }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const isActive = items.some((item) => item.href === location.pathname);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${className} items-center relative`}>
      <button
        id="dropdownHoverButton"
        onClick={toggleDropdown}
        className={`text-black md:p-0 rounded-lg px-4 text-center inline-flex items-center ${
          isActive ? "text-primary font-bold" : ""
        }`}
        aria-current="page"
      >
        {label}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      <div
        id={`${label}`}
        className={`${
          isOpen ? "block" : "hidden"
        } z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute left-1/2 transform -translate-x-1/2`}
      >
        <ul
          className="py-2 text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownHoverButton"
        >
          {items.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.href}
                className="block py-2 px-4 divide-y divide-black rounded-lg shadow w-44 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-[16px]"
                aria-current="page"
                style={style}
                onClick={toggleDropdown}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DropdownHover;
