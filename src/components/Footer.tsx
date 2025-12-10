import React from "react";
import Link from "next/link";
import { siteData } from "@/data/content";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-fe-navy-dark text-white pt-16 pb-8">
            <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Brand */}
                <div>
                    <h3 className="text-2xl font-bold mb-4">
                        Future<span className="text-fe-accent">Eyes</span>
                    </h3>
                    <p className="text-gray-300 mb-6 max-w-sm">
                        Your trusted partner for thermal paper, labels, and complete printing & packaging solutions in the UAE.
                    </p>
                    <div className="flex flex-col gap-3 text-gray-300">
                        <div className="flex items-center gap-3">
                            <MapPin className="w-5 h-5 text-fe-accent" />
                            <span>{siteData.company.location}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-fe-accent" />
                            <a href={`tel:${siteData.company.phone}`} className="hover:text-white">
                                {siteData.company.phone}
                            </a>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-fe-accent" />
                            <a href={`mailto:${siteData.company.email}`} className="hover:text-white">
                                {siteData.company.email}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2 inline-block">
                        Quick Links
                    </h4>
                    <ul className="space-y-3">
                        {siteData.navigation.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className="text-gray-300 hover:text-fe-accent transition-colors"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2 inline-block">
                        Our Services
                    </h4>
                    <ul className="space-y-3">
                        <li className="text-gray-300">Thermal Paper Rolls</li>
                        <li className="text-gray-300">Barcode & Scale Labels</li>
                        <li className="text-gray-300">Graphic Design</li>
                        <li className="text-gray-300">Offset & Digital Printing</li>
                        <li className="text-gray-300">Packaging Solutions</li>
                    </ul>
                </div>
            </div>

            <div className="container-custom mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
                <p>
                    &copy; {new Date().getFullYear()} {siteData.company.name}. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
