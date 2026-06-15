import { Mail, MapPin, Phone } from "lucide-react";


const ContactPage = () => {
    return (
        <div className="min-h-screen bg-white text-gray-900 py-26">
            {/* Container matching your homepage layout constraints */}
            <main className="container ">

                {/* Header Section */}
                <div className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                        Let's Build the Future <span className="text-[#4f94a1]">Together</span>
                    </h1>
                    <p className="mt-6 text-xl text-gray-600 max-w-3xl">
                        Have questions about our AI and Data solutions? Our team is ready to help you engineer success.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left Column: Contact Form */}
                    <div className="bg-white p-8 md:p-10 border border-gray-100 rounded-3xl shadow-sm">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold mb-2">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">Work Email</label>
                                <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">Message</label>
                                <textarea rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
                            </div>

                            <button className="w-full py-4 bg-[#4f94a1] text-white font-bold rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-200">
                                Send Inquiry
                            </button>
                        </form>
                    </div>

                    {/* Right Column: Info & Details (Matching Homepage Vibe) */}
                    <div className="space-y-10">
                        <div className="p-8 bg-blue-50 rounded-3xl">
                            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                            <p className="text-[#4f94a1] mb-6">Reach out directly via email or phone. We respond to all inquiries within 24 hours.</p>

                            <ul className="space-y-4 text-[#4f94a1] font-medium">
                                <li className="flex items-center gap-1"><Mail /> support@purea.com</li>
                                <li className="flex items-center gap-1"><Phone /> +1 (555) 000-1234</li>
                                <li className="flex items-center gap-1"><MapPin /> 123 Tech Park, Innovation City</li>
                            </ul>
                        </div>

                        {/* Quick Link box mimicking homepage service cards */}
                        <div className="p-8 border border-gray-200 rounded-3xl">
                            <h3 className="text-xl font-bold mb-4">Support & Documentation</h3>
                            <p className="text-gray-600 mb-6">Need immediate help? Browse our extensive documentation and AI integration guides.</p>
                            <a href="/docs" className="text-[#4f94a1] font-bold hover:underline">View Documentation →</a>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default ContactPage;