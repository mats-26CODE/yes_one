import React from "react";
import { NavLink } from "react-router-dom";
import { VscClose } from "react-icons/vsc";

const MobileNav = ({ handleNavToggled }) => {
  return (
    <div>
      <div className="mobile__menu_box">
        <div className="mobile__menu_wrapper">
          <div>
            <ol>
              <li>
                <NavLink to={"/"} onClick={handleNavToggled}>
                  <span id={"nav__link_roman"}>i.</span> Development
                </NavLink>
              </li>
              <li>
                <NavLink to={"/"} onClick={handleNavToggled}>
                  <span id={"nav__link_roman"}>ii.</span> Design
                </NavLink>
              </li>
              <li>
                <NavLink to={"/"} onClick={handleNavToggled}>
                  <span id={"nav__link_roman"}>iii.</span> Team
                </NavLink>
              </li>
              <li>
                <NavLink to={"/"} onClick={handleNavToggled}>
                  <span id={"nav__link_roman"}>iv.</span> Career
                </NavLink>
              </li>
            </ol>
          </div>
        </div>

        <VscClose
          size={"2em"}
          onClick={handleNavToggled}
          className="mobile__menu_close"
        />
      </div>
    </div>
  );
};

export default MobileNav;
