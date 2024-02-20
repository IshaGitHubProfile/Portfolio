import AboutMe from "./AboutMe";
import DownloadResume from "./DownloadResume";
import Stack from "./Stack";
import Education from "./Education";
import {Footer} from "../../components/index.js"
import { useEffect } from "react";
import ScrollButton from "../../helper/ScrollToTop.js";

const About = () => {
    useEffect(()=>{
        document.title="About | Isha Bishnoi";
    })
    return (
        <article className="about-main">
            <AboutMe />
            <Stack />
            <DownloadResume />
            <Education />
            <ScrollButton />
            <Footer />
        </article>
    )
};
export default About;