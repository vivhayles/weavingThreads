import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/index.jsx";
import HomePage from "./pages/HomePage/index.jsx";
import ContactPage from "./pages/ContactPage/index.jsx";
import TestimonialsPage from "./pages/TestimonialsPage/index.jsx";

function App(){
    return (
    <div className="bg-[#efecdf] font-serif">
       <BrowserRouter >
           <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/testimonials" element={<TestimonialsPage />} />
                <Route path="/contactme" element={<ContactPage />} />
            </Routes>
       </BrowserRouter>
    </div>
    )
}
export default App;