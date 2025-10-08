import React, { useState } from "react";

const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setSubmitMessage("Message sent successfully!");
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    message: "",
                });
            } else {
                setSubmitMessage(`Error: ${result.message}`);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitMessage("An error occurred while sending your message.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="flex min-h-screen items-center py-20">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-2xl">
                    <h1 className="mb-2 text-center text-4xl font-bold">
                        Get In Touch
                    </h1>
                    <p className="mb-12 text-center text-lg opacity-80">
                        Have a question or want to work together? Drop me a
                        message!
                    </p>

                    <form
                        onSubmit={handleSubmit}
                        className="card rounded-lg p-8 shadow-lg"
                    >
                        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="firstName"
                                    className="mb-2 block font-medium"
                                >
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="border-accent focus:border-opacity-60 focus:ring-opacity-20 w-full rounded-lg border bg-transparent px-4 py-3 transition-all focus:ring-2 focus:outline-none"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="lastName"
                                    className="mb-2 block font-medium"
                                >
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="border-accent focus:border-opacity-60 focus:ring-opacity-20 w-full rounded-lg border bg-transparent px-4 py-3 transition-all focus:ring-2 focus:outline-none"
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="mb-2 block font-medium"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="border-accent focus:border-opacity-60 focus:ring-opacity-20 w-full rounded-lg border bg-transparent px-4 py-3 transition-all focus:ring-2 focus:outline-none"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label
                                htmlFor="message"
                                className="mb-2 block font-medium"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                className="border-accent focus:border-opacity-60 focus:ring-opacity-20 w-full rounded-lg border bg-transparent px-4 py-3 transition-all focus:ring-2 focus:outline-none"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full rounded-lg bg-gradient-to-r from-amber-600 to-orange-600 px-6 py-3 font-semibold text-white shadow-md transition-all hover:from-amber-700 hover:to-orange-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>

                        {submitMessage && (
                            <div
                                className={`mt-4 rounded-lg p-4 text-center font-medium ${
                                    submitMessage.includes("successfully")
                                        ? "dark:bg-opacity-30 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                        : "dark:bg-opacity-30 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                                }`}
                            >
                                {submitMessage}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
