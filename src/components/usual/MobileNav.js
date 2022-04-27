import React from "react";
import { NavLink } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";

const MobileNav = ({ handleNavToggled }) => {
  return (
    <div className={"animate__animated"}>
      <div className="mobile__menu_box">
        <div className="mobile__menu_wrapper">
          <div>
            <ol>
              <li
                className={
                  "animate__animated animate__bounceInDown animate__delay-1s"
                }
              >
                <NavLink to={"/"} onClick={handleNavToggled}>
                  <span id={"nav__link_roman"}>i.</span> Home
                </NavLink>
              </li>
              <li
                className={
                  "animate__animated animate__bounceInDown animate__delay-1s"
                }
              >
                <NavLink to={"/development"} onClick={handleNavToggled}>
                  <span id={"nav__link_roman"}>i.</span> Development
                </NavLink>
              </li>
              <li
                className={
                  "animate__animated animate__bounceInDown animate__delay-1s"
                }
              >
                <NavLink to={"/design"} onClick={handleNavToggled}>
                  <span id={"nav__link_roman"}>ii.</span> Design
                </NavLink>
              </li>
              <li
                className={
                  "animate__animated animate__bounceInDown animate__delay-1s"
                }
              >
                <NavLink to={"/team"} onClick={handleNavToggled}>
                  <span id={"nav__link_roman"}>iii.</span> Team
                </NavLink>
              </li>
              <li
                className={
                  "animate__animated animate__bounceInDown animate__delay-1s"
                }
              >
                <NavLink to={"/careers"} onClick={handleNavToggled}>
                  <span id={"nav__link_roman"}>iv.</span> Career
                </NavLink>
              </li>
            </ol>
          </div>
        </div>

        <IoCloseOutline
          size={"2em"}
          onClick={handleNavToggled}
          className="mobile__menu_close"
        />
      </div>
    </div>
  );
};

export default MobileNav;
