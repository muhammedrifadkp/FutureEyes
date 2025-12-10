"use client";

import React, { useState } from "react";
import { siteData } from "@/data/content";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        interest: "Thermal POS Rolls",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const getWhatsAppLink = () => {
        const text = `Hello Future Eyes,\n\nMy name is ${formData.name} from ${formData.company}.\nI am interested in: ${formData.interest}.\n\nMessage: ${formData.message}\n\nContact: ${formData.phone} / ${formData.email}`;
        return `https://wa.me/${siteData.company.phone.replace(/\s+/g, "").replace("+", "")}?text=${encodeURIComponent(text)}`;
    };

    const getMailtoLink = () => {
        const subject = `Inquiry from ${formData.name} - ${formData.company}`;
        const body = `Name: ${formData.name}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nInterest: ${formData.interest}\n\nMessage:\n${formData.message}`;
        return `mailto:${siteData.company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <div className="pb-16">
            {/* Intro Section */}
            <section className="bg-fe-navy-dark text-white py-16">
                <div className="container-custom">
                    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                    <p className="text-xl text-gray-300 max-w-3xl">
                        Get in touch for quotes, product information, or to discuss your custom printing needs.
                    </p>
                </div>
            </section>

            <section className="container-custom py-16">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Form */}
                    <div>
                        <h2 className="text-2xl font-bold text-fe-navy-dark mb-6">Send us a Message</h2>

                        {!submitted ? (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fe-blue focus:border-fe-blue outline-none transition-all"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fe-blue focus:border-fe-blue outline-none transition-all"
                                            value={formData.company}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fe-blue focus:border-fe-blue outline-none transition-all"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fe-blue focus:border-fe-blue outline-none transition-all"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">I am interested in</label>
                                    <select
                                        id="interest"
                                        name="interest"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fe-blue focus:border-fe-blue outline-none transition-all"
                                        value={formData.interest}
                                        onChange={handleChange}
                                    >
                                        <option>Thermal POS Rolls</option>
                                        <option>Barcode Labels</option>
                                        <option>Weightscale Labels</option>
                                        <option>Graphic Design & Branding</option>
                                        <option>Printing & Packaging</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fe-blue focus:border-fe-blue outline-none transition-all"
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                                    <Send className="w-5 h-5" /> Send Message
                                </button>
                            </form>
                        ) : (
                            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-in fade-in zoom-in duration-300">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-green-800 mb-2">Message Prepared!</h3>
                                <p className="text-green-700 mb-6">
                                    Thank you for your interest. Please choose how you would like to send your message:
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a
                                        href={getWhatsAppLink()}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary bg-green-600 hover:bg-green-700 flex items-center justify-center gap-2"
                                    >
                                        <MessageCircle className="w-5 h-5" /> Send via WhatsApp
                                    </a>
                                    <a
                                        href={getMailtoLink()}
                                        className="btn-secondary flex items-center justify-center gap-2"
                                    >
                                        <Mail className="w-5 h-5" /> Send via Email
                                    </a>
                                </div>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-6 text-sm text-gray-500 hover:underline"
                                >
                                    Edit Message
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <h3 className="text-xl font-bold text-fe-navy-dark mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-fe-blue shadow-sm shrink-0">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Address</p>
                                        <p className="font-medium text-gray-800">{siteData.company.location}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-fe-blue shadow-sm shrink-0">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Phone / WhatsApp</p>
                                        <a href={`tel:${siteData.company.phone}`} className="font-medium text-gray-800 hover:text-fe-blue block">
                                            {siteData.company.phone}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-fe-blue shadow-sm shrink-0">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Email</p>
                                        <a href={`mailto:${siteData.company.email}`} className="font-medium text-gray-800 hover:text-fe-blue block">
                                            {siteData.company.email}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center text-gray-500 relative overflow-hidden group cursor-pointer">
                            <div className="absolute inset-0 bg-gray-300 flex items-center justify-center group-hover:bg-gray-400 transition-colors">
                                <MapPin className="w-12 h-12 text-gray-500" />
                                <span className="ml-2 font-semibold">View on Google Maps</span>
                            </div>
                            {/* In a real app, embed Google Map iframe here */}
                            <a
                                href="https://maps.google.com/?q=Sharjah,UAE"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute inset-0 z-10"
                                aria-label="View on Google Maps"
                            ></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
