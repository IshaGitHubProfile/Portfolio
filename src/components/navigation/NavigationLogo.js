import { NavLink } from "react-router-dom";
import IconBlack from "../../assets/images/icon-black.png";
import ScrollToTop from "../../helper/ScrollToTop";

const NavigationLogo = (props) => {
    return (
        <NavLink
           className="logo-section"
           to="/"
           onClick={() => {
            ScrollToTop();
            props.closeMenu();
           }}
        >
            <img src={IconBlack} alt="logo"></img>
        </NavLink>
    )
};
export default NavigationLogo;