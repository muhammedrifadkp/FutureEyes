import React from "react";
import { siteData } from "@/data/content";
import { CheckCircle, Users, Award, Clock } from "lucide-react";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Future Eyes General Trading",
    description: "Learn about Future Eyes, a leading supplier of thermal paper and printing solutions in the UAE. Committed to quality, reliability, and customer service.",
};

export default function AboutPage() {
    return (
        <div className="pb-16">
            {/* Intro Section */}
            <section className="bg-fe-navy-dark text-white py-16">
                <div className="container-custom">
                    <h1 className="text-4xl font-bold mb-4">About Future Eyes</h1>
                    <p className="text-xl text-gray-300 max-w-3xl">
                        Your partner in quality thermal paper, labeling, and printing solutions.
                    </p>
                </div>
            </section>

            {/* Company Overview */}
            <section className="container-custom py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-gray-600 leading-relaxed">
                        <h2 className="text-3xl font-bold">Who We Are</h2>
                        <p>
                            Future Eyes General Trading FZ-LLC is a premier supplier of thermal paper rolls, barcode labels, and comprehensive printing solutions based in Sharjah, UAE. We serve a diverse range of industries including retail, hospitality, logistics, and healthcare across the GCC region.
                        </p>
                        <p>
                            Our mission is to provide businesses with high-quality consumables that ensure smooth operations and efficiency. We understand that reliable receipts and clear labels are critical for your daily transactions and inventory management.
                        </p>
                        <p>
                            Beyond supplies, we offer a full suite of creative services, from graphic design and branding to large-format printing and packaging. We aim to be your one-stop shop for all your business visibility and operational needs.
                        </p>
                    </div>
                    <div className="relative w-full max-w-lg mx-auto aspect-[1.75/1] perspective-1000 group cursor-pointer">
                        <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                            {/* Front Face */}
                            <div className="absolute inset-0 w-full h-full backface-hidden">
                                <img
                                    src="/logos/card-front.png"
                                    alt="Future Eyes Business Card Front"
                                    className="w-full h-full object-contain drop-shadow-2xl rounded-xl"
                                />
                            </div>

                            {/* Back Face */}
                            <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                                <img
                                    src="/logos/card-back.png"
                                    alt="Future Eyes Business Card Back"
                                    className="w-full h-full object-contain drop-shadow-2xl rounded-xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="bg-gray-50 py-16">
                <div className="container-custom grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-2xl font-bold text-fe-navy-dark mb-4">Our Mission</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-fe-blue mt-1 shrink-0" />
                                <span className="text-gray-600">To deliver superior quality thermal paper and label products that businesses can rely on.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-fe-blue mt-1 shrink-0" />
                                <span className="text-gray-600">To provide exceptional customer service and prompt delivery across the UAE.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-fe-blue mt-1 shrink-0" />
                                <span className="text-gray-600">To help brands grow through creative design and professional printing solutions.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-2xl font-bold text-fe-navy-dark mb-4">Our Vision</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-fe-blue mt-1 shrink-0" />
                                <span className="text-gray-600">To be the leading supplier of POS consumables and printing services in the region.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-fe-blue mt-1 shrink-0" />
                                <span className="text-gray-600">To continuously innovate and expand our product range to meet evolving market needs.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section className="container-custom py-16">
                <h2 className="text-3xl font-bold mb-12 text-center">Leadership</h2>
                <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="h-48 bg-fe-navy-dark flex items-center justify-center">
                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-fe-navy-dark font-bold text-3xl">
                            SA
                        </div>
                    </div>
                    <div className="p-8 text-center">
                        <h3 className="text-2xl font-bold text-fe-navy-dark">{siteData.company.manager}</h3>
                        <p className="text-fe-blue font-medium mb-4">Managing Director</p>
                        <p className="text-gray-600 text-sm">
                            With years of experience in the trading and printing industry, Salmath leads Future Eyes with a focus on quality, integrity, and customer satisfaction.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Clients Trust Us */}
            <section className="bg-fe-navy-dark text-white py-16">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold mb-12 text-center">Why Clients Trust Us</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm">
                            <Award className="w-12 h-12 mx-auto mb-4 text-fe-accent" />
                            <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
                            <p className="text-gray-300 text-sm">
                                We source only the best materials to ensure your prints are clear and your labels stick.
                            </p>
                        </div>
                        <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm">
                            <Clock className="w-12 h-12 mx-auto mb-4 text-fe-accent" />
                            <h3 className="text-xl font-bold mb-2">Timely Delivery</h3>
                            <p className="text-gray-300 text-sm">
                                We understand the importance of stock availability and ensure prompt delivery to keep your business running.
                            </p>
                        </div>
                        <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm">
                            <Users className="w-12 h-12 mx-auto mb-4 text-fe-accent" />
                            <h3 className="text-xl font-bold mb-2">Customer Focus</h3>
                            <p className="text-gray-300 text-sm">
                                We build long-term relationships by understanding your needs and providing personalized solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
