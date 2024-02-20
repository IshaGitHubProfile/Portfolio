import React, {useState} from "react";
import Button from "./Button";
import ScrollToTop from "../helper/ScrollToTop";

const ScrollButton = () => {
    const [visible,setVisible]= useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if(scrolled>300) {
            setVisible(true);
        }
        else {
            setVisible(false);
        }
    };
    window.addEventListener("scroll",toggleVisible);
    return (
        <Button
           className="scroll-button"
           onClick={ScrollToTop}
           style={{display: visible ? "inline" : "none "}}
        ></Button>
    )
};
export default ScrollButton;