import { useState } from 'react';
import Subheading from "../Subheading/index.jsx";

export default function ContactForm() {
    const [formData, setFormData] = useState({ fullName: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <section className="bg-[#efecdf] font-serif p-8 md:p-12 lg:p-16">
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col">
                    <label htmlFor="fullName" className="mb-2 text-sm font-medium text-gray-700">
                        Full Name
                    </label>
                    <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-700">
                        Email Address
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="message" className="mb-2 text-sm font-medium text-gray-700">
                        Your Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Write your message here"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="border-2 border-gray-300 rounded-lg px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-primary-600 text-white font-medium rounded-lg px-6 py-3 hover:bg-primary-700 transition-colors w-full md:w-auto"
                >
                    Submit
                </button>
            </form>
        </section>
    )
}


