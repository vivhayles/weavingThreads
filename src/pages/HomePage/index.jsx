import Footer from "../../components/Footer/index.jsx";
import Aboutme from "../../components/Aboutme/index.jsx";

function HomePage() {
    return (
        <section className='bg-[#efecdf] font-serif'>
            <h1 className="text-2xl md:text-3xl font-serif text-[#00472d] text-center mt-4">
                Weaving Threads
            </h1>
            <Aboutme />
            <Footer/>
        </section>
    )
}

export default HomePage;