import Whiteham from "../../assets/images/hamburger-white.png";
import React from "react";
const NavigationHumburger = React.forwardRef((props,ref) => (
    <section className="ham-section">
        <img
           src={Whiteham}
           alt="menu"
           className="ham-menu"
           ref={ref}
           onClick={() => {
            props.ToggleMenu();
           }}
        ></img>
    </section>
));
export default NavigationHumburger;