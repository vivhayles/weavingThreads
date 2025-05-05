import Footer from "../../components/Footer/index.jsx";
import Testimonials from "../../components/Testimonials/index.jsx";

function TestimonialsPage() {
    return (
        <section className='bg-[#efecdf] font-serif'>
            <h1 className="mx-4 my-1 text-2xl md:text-3xl font-serif text-[#00472d] justify-center">Testimonials</h1>
            <Testimonials />
            <Footer />
        </section>
    )
}

export default TestimonialsPage;