"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag } from "lucide-react";
import { siteData } from "@/data/content";
import { useQuote } from "@/context/QuoteContext";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { items, toggleDrawer } = useQuote();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-white py-4"
                }`}
        >
            <div className="container-custom flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    {/* Placeholder for Logo if image not available, or text */}
                    <div className="font-bold text-2xl text-fe-navy-dark tracking-tight">
                        Future<span className="text-fe-blue">Eyes</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {siteData.navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-gray-700 hover:text-fe-blue transition-colors uppercase tracking-wide"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleDrawer}
                        className="relative p-2 text-gray-700 hover:text-fe-blue transition-colors"
                    >
                        <ShoppingBag className="w-6 h-6" />
                        {items.length > 0 && (
                            <span className="absolute top-0 right-0 bg-fe-blue text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                {items.reduce((acc, item) => acc + item.quantity, 0)}
                            </span>
                        )}
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-gray-700"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
                    {siteData.navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-lg font-medium text-gray-800 py-2 border-b border-gray-100"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}
