import AboutPreview from "./AboutPreview";
import HeaderPreview from "./HeaderPreview";
import ContactPreview from "./ContactPreview";
import PortfolioPreview from "./PortfolioPreview";
import {Footer} from "../../components";
import ScrollButton from "../../components/ScrollButton";
import { useEffect } from "react";

const MainPage = () => {
    useEffect(() => {
        document.title = "Isha Bishnoi | Personal Portfolio";
    })
    return (
        <article className="main-page">
            <HeaderPreview />
            <AboutPreview />
            <PortfolioPreview />
            <ContactPreview />
            <ScrollButton />
            <Footer />
        </article>
    )
};
export default MainPage;