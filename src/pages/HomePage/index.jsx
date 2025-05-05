import Footer from "../../components/Footer/index.jsx";
import Aboutme from "../../components/Aboutme/index.jsx";
import Energyhealingsessions from "../../components/Energyhealingsessions/index.jsx";

function HomePage() {
    return (
        <section className='bg-[#efecdf] font-serif'>
            <h1 className="text-3xl md:text-4xl font-serif text-[#00472d] text-center mt-4">
                Weaving Threads
            </h1>
            <Aboutme />
            <Energyhealingsessions />
            <Footer/>
        </section>
    )
}

export default HomePage;