import testimonials from "../../../testimonials.json";
import { useState } from "react";


function Testimonials() {
    const [openModalIndex, setOpenModalIndex] = useState(null);

    function handleClick(index) {
        setOpenModalIndex(openModalIndex === index ? null : index);
    }

    return (
        <section id="testimonials">
            <p className="mx-4 lg:text-lg">Here are a selection of testimonials from past and present clients:</p>
            <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-1">
                {testimonials.testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card mx-4 my-2 border-4
                    border-[#8eb8a8] rounded-lg p-2">
                        <h4 className="py-2 font-bold text-xl text-[#737373]">{testimonial.title}</h4>
                        <p className='lg:text-lg'>{testimonial.description}</p>
                        <button
                            className="px-2 my-2 border-4 border-[#cae4da] bg-[#cae4da] text-gray-600
                            font-semibold text-lg rounded-full flex justify-center mx-auto"
                            onClick={() => handleClick(index)}>
                            {openModalIndex === index ? "Less" : "More"} {testimonial.modalbutton}
                        </button>
                        {openModalIndex === index && (
                            <div className="modal-content lg:text-lg mt-4 p-4 border rounded">
                                <p>{testimonial.moreinfo}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Testimonials;