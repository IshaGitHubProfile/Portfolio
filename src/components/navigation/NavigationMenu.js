import {NavLink } from "react-router-dom";
import ScrollToTop from "../../helper/ScrollToTop";

const activeNavLink = ({isActive}) =>
    "gray-text nav-link" + (isActive ? " main-active" : "")
const NavigationMenu = (props) => {
    return (
        <section className="menu-links">
            <NavLink
              to="/"
              onClick={() => {
                ScrollToTop();
                props.closeMenu();
              }}
              className={({isActive}) => 
                 "gray-text nav-link" + (isActive ? " main-active" : "")
              }
            >
                Main
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => {
                ScrollToTop();
                props.closeMenu();
              }}
              className={activeNavLink}
            >
                About
            </NavLink>
            <NavLink
              to="/portfolio"
              onClick={() => {
                ScrollToTop();
                props.closeMenu();
              }}
              className={activeNavLink}
            >
                Portfolio
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => {
                ScrollToTop();
                props.closeMenu();
              }}
              className={activeNavLink}
            >
                Contact
            </NavLink>
        </section>
    )
};
export default NavigationMenu;