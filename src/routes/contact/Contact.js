import { useEffect } from "react";
import { Footer } from "../../components"
import ContactForm from "./ContactForm";

const Contact = () => {
    useEffect(() => {
        document.title = "Contact | Isha Bishnoi"
    })
    return (
        <article className="contact-main">
            <h2 className="title-font pink-text h2-tag">Contact Me</h2>
            <p className="white-text p-tag">
                If you are interested to hire me I am always open to new opportunities
                and interseting projects. Feel free to contact me if you have any other
                requests or questions regarding web developmet.
            </p>
            <ContactForm />
            <Footer />
        </article>
    );
};
export default Contact;