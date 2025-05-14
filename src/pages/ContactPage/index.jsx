import Footer from "../../components/Footer/index.jsx";
import ContactForm from "../../components/ContactForm/index.jsx";
import Subheading from "../../components/Subheading/index.jsx";

function ContactPage() {
    return (
        <section className='bg-[#efecdf] font-serif'>
            <h1 className="text-3xl md:text-4xl font-serif text-[#00472d] text-center mt-4 mb-4">
                Weaving Threads Well-Being
            </h1>
            <Subheading text="Contact Me"/>
            <ContactForm/>
            <Footer/>
        </section>
    )
}

export default ContactPage;