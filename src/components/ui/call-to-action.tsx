import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
export default function CallToAction() {
    return (
        <section>
            <div className="relative mx-auto flex items-center overflow-hidden bg-black px-8 py-12 md:px-16">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-65"
                    style={{
                        backgroundImage: "url('/img/call-to-action.webp')",
                    }}
                />

                <div className="absolute inset-0 bg-black/65" />
                <div className="container">
                    <div className="relative z-10 grid w-full items-center gap-8 md:grid-cols-[1fr_auto]">
                        <div>
                            <h3 className="!text-4xl font-bold text-white">
                                Let's Shape the{" "}
                                <span className="text-secondary">Future of Your Business</span>
                            </h3>
                            <p className="!text-white/90 mt-3 max-w-[800px] ">Partner with InvoLead to transform complexity into clarity through data, AI, and design, creating intelligent solutions that drive sustainable, enterprise-wide growth.</p>
                        </div>
                        <Button asChild variant={"outline"}>
                            <Link href="/contact-us">Speak to Our Experts
                            <ArrowRight className="size-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}