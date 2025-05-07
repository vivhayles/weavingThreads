import Footer from "../../components/Footer/index.jsx";
import ContactForm from "../../components/ContactForm/index.jsx";

function ContactPage() {
    return (
        <section className='bg-[#efecdf] font-serif'>
            <h1 className="mx-4 my-1 text-2xl md:text-3xl font-serif text-[#00472d] justify-center">Contact Me</h1>
            <ContactForm />
            <Footer />
        </section>
    )
}

export default ContactPage;