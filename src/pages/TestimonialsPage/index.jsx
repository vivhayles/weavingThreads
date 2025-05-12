import Footer from "../../components/Footer/index.jsx";
import Testimonials from "../../components/Testimonials/index.jsx";
import Subheading from "../../components/Subheading/index.jsx";

function TestimonialsPage() {
    return (
        <section className='bg-[#efecdf] font-serif'>
            <h1 className="text-3xl md:text-4xl font-serif text-[#00472d] text-center mt-4 mb-4">
                Weaving Threads
            </h1>
            <Subheading text='Testimonials' />
            <Testimonials/>
            <Footer/>
        </section>
    )
}

export default TestimonialsPage;