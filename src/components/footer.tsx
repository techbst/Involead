import Link from 'next/link'

const quickLinks = ['Services', 'Industries', 'Careers', 'Case Studies', 'About Us', 'Contact']
const capabilities = ['Generative AI', 'Data Science', 'Business Intelligence', 'Data Engineering', 'Cloud Solutions', 'Software Engineering']
const industries = ['Retail', 'Pharma', 'Telecom', 'Manufacturing', 'CPG', 'Healthcare']

function FooterLink({ label, href = '#' }: { label: string; href?: string }) {
    return (
        <Link href={href} className="text-sm text-slate-200 transition hover:text-white">
            {label}
        </Link>
    )
}

export default function Footer() {
    return (
        <footer className="bg-blue-700 text-slate-100">
            <div className="container space-y-12 py-16">
                <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-white/10 text-white">
                                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M6 8v8a4 4 0 0 0 4 4h4" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6 8a4 4 0 0 1 4-4h4l4 4v8a4 4 0 0 1-4 4h-4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-lg font-semibold text-white">InvoLead</p>
                                <p className="text-sm text-slate-200/80">Business With Intelligent AI Solutions And Digital Innovation.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200/80">Quick Link</h3>
                        <div className="mt-5 grid gap-3">
                            {quickLinks.map((item) => (
                                <FooterLink key={item} label={item} />
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200/80">Our Capabilities</h3>
                        <div className="mt-5 grid gap-3">
                            {capabilities.map((item) => (
                                <FooterLink key={item} label={item} />
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200/80">Customer Service</h3>
                        <div className="mt-5 space-y-4 text-sm text-slate-100/90">
                            <div className="space-y-2 rounded-3xl border border-white/10 bg-white/5 p-4">
                                <p className="font-semibold">Mon - Sat / 10:00AM - 6:00PM</p>
                                <p className="text-white">+91 987-307-4893</p>
                            </div>
                            <div className="space-y-2 rounded-3xl border border-white/10 bg-white/5 p-4">
                                <p className="font-semibold">Email Id</p>
                                <p>support@involead.com</p>
                            </div>
                            <div className="space-y-2 rounded-3xl border border-white/10 bg-white/5 p-4">
                                <p className="font-semibold">Address</p>
                                <p>410A, 4th Floor, D21 Corporate Park, Dwarka Sector 21, New Delhi – 110077</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 text-slate-100 shadow-xl shadow-slate-950/10 lg:grid-cols-3">
                    <div className="space-y-2">
                        <p className="text-sm uppercase tracking-[0.2em] text-slate-200/80">What you were looking for?</p>
                        <Link href="/contact" className="font-semibold text-white underline decoration-white/25 underline-offset-4">
                            Contact Us
                        </Link>
                    </div>
                    <div className="space-y-2">
                        <p className="text-sm uppercase tracking-[0.2em] text-slate-200/80">Mail us on</p>
                        <p className="font-semibold text-white">Support@Involead.Com</p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-sm uppercase tracking-[0.2em] text-slate-200/80">We’d love to hear what you think!</p>
                        <Link href="/feedback" className="font-semibold text-white underline decoration-white/25 underline-offset-4">
                            Give Feedback
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
