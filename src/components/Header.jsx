import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Primarybtn from "./Buttons/Primarybtn";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent window scroll when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);
  const navLinks = [
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/about",
      text: "About Me",
    },
    {
      id: 3,
      path: "/portfolio",
      text: "Portfolio",
    },
    {
      id: 4,
      path: "/contact",
      text: "Contact Me",
    },
  ];
  return (
    <>
      <div
        id="header"
        className="flex justify-between items-center px-4 pb-5 pt-10 border-b border-peach-85 max-w-wrapper m-auto xll:pt-5 xll:pb-4.9 xll:px-20 3xl:px-36.6"
      >
        <div>
          <Link
            to="/"
            className="text-lg font-semibold text-purple-50 3xl:text-2xl"
          >
            Jeffery Cannon.
          </Link>
        </div>
        <div
          className={`absolute top-0 left-0 h-screen w-[70vw] bg-white flex gap-7.5 justify-center items-center flex-col z-50 transition-all duration-200 ease-linear  ${
            isOpen ? "translate-x-0" : "translate-x-[-110%]"
          } ll:relative ll:translate-x-0 ll:flex-row ll:h-fit ll:w-fit ll:bg-transparent`}
        >
          <ul className="flex flex-col gap-5 ll:flex-row 3xl:gap-7.5">
            {navLinks.map((link) => {
              return (
                <li key={link.id} onClick={() => setIsOpen(!isOpen)}>
                  <NavLink
                    to={link.path}
                    className="text-sm font-medium l-150 py-3 px-[22px] block w-fit rounded-md 3xl:px-6 3xl:py-3.5 3xl:rounded-lg 3xl:text-lg"
                  >
                    {link.text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <Primarybtn path="/contact" text="Book a Call" svg={true} />
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="absolute top-5 right-5 ll:hidden"
          >
            <svg
              width="34"
              height="34"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path>
            </svg>
          </div>
        </div>
        <div onClick={() => setIsOpen(!isOpen)} className="ll:hidden">
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.25 9.5625C4.25 8.9757 4.7257 8.5 5.3125 8.5H28.6875C29.2743 8.5 29.75 8.9757 29.75 9.5625C29.75 10.1493 29.2743 10.625 28.6875 10.625H5.3125C4.7257 10.625 4.25 10.1493 4.25 9.5625ZM4.25 17C4.25 16.4132 4.7257 15.9375 5.3125 15.9375H28.6875C29.2743 15.9375 29.75 16.4132 29.75 17C29.75 17.5868 29.2743 18.0625 28.6875 18.0625H5.3125C4.7257 18.0625 4.25 17.5868 4.25 17ZM15.9375 24.4375C15.9375 23.8507 16.4132 23.375 17 23.375H28.6875C29.2743 23.375 29.75 23.8507 29.75 24.4375C29.75 25.0243 29.2743 25.5 28.6875 25.5H17C16.4132 25.5 15.9375 25.0243 15.9375 24.4375Z"
              fill="#333333"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default Header;
