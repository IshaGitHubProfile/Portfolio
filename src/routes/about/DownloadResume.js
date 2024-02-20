import DownloadIcon from "../../assets/images/download-icon.png";
import Resume from "../../assets/documents/Isha Bishnoi Resume.pdf";

const DownloadResume = () => {
    return (
        <section>
            <a className="download-btn" href={Resume} download="Isha Bishnoi Resume">
                <img
                  src={DownloadIcon}
                  alt="Resume Download button"
                  className="download-img"
                ></img>
                Download Resume
            </a>
        </section>
    )
};
export default DownloadResume;