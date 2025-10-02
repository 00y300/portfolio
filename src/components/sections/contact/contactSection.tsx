import React, { useState } from "react";

const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Handle form submission here
        console.log("Form submitted:", formData);
    };

    return (
        <section id="contact" className="flex min-h-screen items-center">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold">Contact Section</h1>
                <p className="mt-4 text-lg">Get in touch with me!</p>

                <form onSubmit={handleSubmit} className="mt-8 max-w-lg">
                    <div className="mb-4">
                        <label
                            htmlFor="firstName"
                            className="block text-lg font-medium"
                        >
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="mt-1 w-full rounded border px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="lastName"
                            className="block text-lg font-medium"
                        >
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="mt-1 w-full rounded border px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-lg font-medium"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 w-full rounded border px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="message"
                            className="block text-lg font-medium"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="mt-1 w-full rounded border px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="rounded bg-black px-4 py-2 text-white hover:bg-gray-300 hover:text-black"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;
