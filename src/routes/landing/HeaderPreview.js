import { Link } from "react-router-dom";

const HeaderPreview = () => {
    return (
        <artcile className="header">
            <h1 className="header-font white-text h1-tag">
                Hi, I'm <br></br>
                <em className="pink-text">Isha Bishnoi</em>
                <br></br>Web Developer
            </h1>
            <p className="gray-text p-tag">Full Stack Development</p>
            <Link className="pink-text" to="/portfolio">
                Check My Work
            </Link>
        </artcile>
    )
};
export default HeaderPreview;