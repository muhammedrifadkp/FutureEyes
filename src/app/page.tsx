import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, Phone, Mail, MapPin, Printer, PenTool, Globe, Monitor } from "lucide-react";
import { siteData } from "@/data/content";
import { ProductCard } from "@/components/ProductCard";
import { ServiceCard } from "@/components/ServiceCard";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Future Eyes General Trading | Thermal Paper & Label Solutions",
    description: "Your trusted partner for thermal POS rolls, barcode labels, and printing services in Sharjah, UAE. High-quality consumables for retail and logistics.",
};

export default function Home() {
    const iconMap: Record<string, any> = {
        PenTool,
        Printer,
        Monitor,
        Globe,
    };

    return (
        <div className="flex flex-col gap-16 pb-16">
            {/* Hero Section */}
            <section className="relative bg-fe-navy-dark text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    {/* Hexagon pattern background placeholder */}
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                                <path d="M25 0 L50 14.4 L50 43.3 L25 57.7 L0 43.3 L0 14.4 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#hexagons)" />
                    </svg>
                </div>

                <div className="container-custom py-20 lg:py-32 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                            {siteData.hero.heading}
                        </h1>
                        <p className="text-xl text-gray-300 max-w-lg">
                            {siteData.hero.subheading}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact" className="btn-primary">
                                Request a Quote
                            </Link>
                            <Link href="/products" className="btn-secondary border-white text-white hover:bg-white hover:text-fe-navy-dark">
                                View Products
                            </Link>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Hero Image Composition */}
                        <div className="relative z-10  bg-white/5 backdrop-blur-sm p-6 rounded-3xl border border-white/10 shadow-2xl">
                            <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden relative">
                                <img
                                    src="/images/warehouse.jpg"
                                    alt="Future Eyes Warehouse"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-fe-blue rounded-full blur-3xl opacity-50"></div>
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-fe-accent rounded-full blur-3xl opacity-50"></div>
                    </div>
                </div>
            </section>

            {/* Key Products Preview */}
            <section className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold mb-4">Our Core Products</h2>
                    <p className="text-gray-600">
                        High-quality thermal paper and labels for every business need.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {siteData.products.slice(0, 3).map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            description={product.shortDescription}
                            image={product.image}
                        />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link href="/products" className="text-fe-blue font-semibold hover:underline inline-flex items-center gap-2">
                        View All Products <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>

            {/* Why Choose Future Eyes */}
            <section className="bg-gray-50 py-16">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-fe-navy-dark mb-6">Why Choose Future Eyes?</h2>
                            <p className="text-gray-600 mb-8">
                                We are committed to providing the best quality thermal paper and printing solutions in the UAE.
                                Our dedication to quality and customer satisfaction sets us apart.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-6">
                                {siteData.features.map((feature, index) => (
                                    <div key={index} className="flex gap-4">
                                        <div className="w-10 h-10 bg-fe-blue/10 rounded-full flex items-center justify-center shrink-0 text-fe-blue">
                                            <CheckCircle className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-fe-navy-dark mb-1">{feature.title}</h4>
                                            <p className="text-sm text-gray-600">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-full min-h-[400px] bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex items-center justify-center">
                            <img
                                src="/images/printing-press.jpg"
                                alt="Quality Printing"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Teaser */}
            <section className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
                        <p className="text-gray-600 max-w-xl">
                            Beyond supplies, we offer comprehensive design, printing, and digital services to elevate your brand.
                        </p>
                    </div>
                    <Link href="/services" className="btn-secondary py-2 px-4 text-sm">
                        Explore Services
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {siteData.services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            items={service.items.slice(0, 3)} // Show only first 3 items
                            icon={iconMap[service.icon]}
                        />
                    ))}
                </div>
            </section>

            {/* Business Card / Contact Strip */}
            <section className="container-custom">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 relative">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-fe-navy-dark skew-x-12 translate-x-12 hidden md:block"></div>

                    <div className="grid md:grid-cols-2 relative z-10">
                        <div className="p-8 md:p-12">
                            <h2 className="text-3xl font-bold text-fe-navy-dark mb-2">Get in Touch</h2>
                            <p className="text-gray-600 mb-8">
                                Ready to order or need a custom quote? Contact us today.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-fe-light rounded-full flex items-center justify-center text-fe-blue">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-semibold">Location</p>
                                        <p className="font-medium text-fe-navy-dark">{siteData.company.location}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-fe-light rounded-full flex items-center justify-center text-fe-blue">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-semibold">Phone / WhatsApp</p>
                                        <p className="font-medium text-fe-navy-dark">{siteData.company.phone}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-fe-light rounded-full flex items-center justify-center text-fe-blue">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-semibold">Email</p>
                                        <p className="font-medium text-fe-navy-dark">{siteData.company.email}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <a
                                    href={siteData.company.whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary inline-flex items-center gap-2"
                                >
                                    Contact on WhatsApp <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        <div className="bg-fe-navy-dark p-8 md:p-12 text-white flex flex-col items-center justify-center text-center">
                            <div className="bg-white p-4 rounded-xl mb-6">
                                {/* QR Code Placeholder */}
                                <div className="w-32 h-32 bg-gray-200 flex items-center justify-center text-gray-800 font-bold text-xs">
                                    QR CODE
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-1">{siteData.company.manager}</h3>
                            <p className="text-fe-accent text-sm mb-6">Manager</p>
                            <p className="text-sm text-gray-300 max-w-xs">
                                Scan to save contact details or visit our website.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
