import PortfolioDescription from "./PortfolioDescription";
import Projects from "./Projects";
import { Footer } from "../../components";
import ScrollToTop from "../../helper/ScrollToTop";
import { useEffect } from "react";

const Portfolio = () => {
    useEffect(() => {
        document.title = "Portfolio | Isha Bishnoi";
    })
    return (
        <article className="portfolio-main">
            <PortfolioDescription></PortfolioDescription>
            <Projects />
            <ScrollToTop />
            <Footer />
        </article>
    )
};
export default Portfolio;