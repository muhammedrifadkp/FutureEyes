import React from "react";
import { Metadata } from "next";
import { siteData } from "@/data/content";
import { ServiceCard } from "@/components/ServiceCard";
import { PenTool, Printer, Monitor, Globe } from "lucide-react";

export const metadata: Metadata = {
    title: "Our Services | Graphic Design, Printing & Packaging",
    description: "Explore our comprehensive services including graphic design, offset & digital printing, packaging solutions, and digital marketing.",
};

export default function ServicesPage() {
    const iconMap: Record<string, any> = {
        PenTool,
        Printer,
        Monitor,
        Globe,
    };

    return (
        <div className="pb-16">
            {/* Intro Section */}
            <section className="bg-fe-navy-dark text-white py-16 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('/images/printing-graphics-flyer.jpg')] bg-cover bg-center mix-blend-overlay"></div>
                <div className="container-custom relative z-10">
                    <h1 className="text-4xl font-bold mb-4">Our Services</h1>
                    <p className="text-xl text-gray-300 max-w-3xl">
                        From creative design to high-quality printing and digital solutions, we bring your brand to life.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="container-custom py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {siteData.services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            items={service.items}
                            icon={iconMap[service.icon]}
                            image={service.image}
                        />
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gray-50 py-16">
                <div className="container-custom text-center">
                    <h2 className="text-3xl font-bold text-fe-navy-dark mb-4">
                        Ready to start your project?
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Whether you need a new logo, a batch of flyers, or a complete branding overhaul, our team is here to help.
                    </p>
                    <a href="/contact" className="btn-primary">
                        Get a Quote
                    </a>
                </div>
            </section>
        </div>
    );
}
