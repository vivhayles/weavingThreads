import React from "react";

function ContactForm() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "a6f68147-5a86-4165-9402-25f9adea15ca");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
        }
    };

    return (
        <section className="bg-[#efecdf] font-serif pt-4 pl-8 pr-8 pb-8
        md:pt-8 md:pl-12 md:pr-12 md:pb-12
        lg:pt-10 lg:pl-16 lg:pr-16 lg:pb-16">
            <form id="contact-form" onSubmit={onSubmit} className="space-y-6">
                <div className="flex flex-col">
                    <label htmlFor="fullName"
                           className="mb-2 text-sm md:text-base lg:text-lg font-medium text-gray-700">
                        Full Name
                    </label>
                    <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        required
                        className="border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email" className="mb-2 text-sm md:text-base lg:text-lg font-medium text-gray-700">
                        Email Address
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                        required
                        className="border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="message" className="mb-2 text-sm md:text-base lg:text-lg font-medium text-gray-700">
                        Your Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Write your message here"
                        required
                        className="border-2 border-gray-300 rounded-lg px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <p className="mCD-2 text-sm md:text-base lg:text-lg font-medium text-gray-700">
                        Please note that my working days
                        are Tuesdays and Wednesdays, with email monitoring on Monday’s afternoons and Thursday
                        morning.
                    </p>
                </div>

                <button
                    type="submit"
                    className="bg-[#8eb8a8] border-[#8eb8a8] font-medium md:text-lg rounded-lg px-6 py-3 hover:bg-primary-700 transition-colors  md:w-auto"
                >
                    Submit
                </button>
            </form>
        </section>
    )
}

export default ContactForm
