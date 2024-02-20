import NavigationMenu from "./NavigationMenu";
import NavigationLogo from "./NavigationLogo";
import NavigationHumburger from "./NavigationHamburger";
import NavigationSocials from "./NavigationSocials";
import React from "react";
import { useState } from "react";
import Whiteham from "../../assets/images/hamburger-white.png";
import WhiteXham from "../../assets/images/x-ham-white.png";

const Navigation = () => {
    const [hiddenMenu,setHiddenMenu] = useState(true);
    const ref = React.useRef();
    function ToggleMenu() {
        hiddenMenu 
           ? setHiddenMenu(false) || (ref.current.src=WhiteXham)
           : setHiddenMenu(true) || (ref.current.src=Whiteham);
    }
    function closeMenu() {
        setHiddenMenu(true) || (ref.current.src=Whiteham);
    }
    return (
        <article className="side-menu">
            <NavigationHumburger ToggleMenu={ToggleMenu} ref={ref} />
            <section className={`main-menu${hiddenMenu ? `` : `active-menu`}`}>
                <NavigationLogo closeMenu={closeMenu}></NavigationLogo>
                <NavigationMenu closeMenu={closeMenu}></NavigationMenu>
                <NavigationSocials></NavigationSocials>
            </section>
        </article>
    )
};
export default Navigation;