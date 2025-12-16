"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag } from "lucide-react";
import { siteData } from "@/data/content";
import { useQuote } from "@/context/QuoteContext";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { items, toggleDrawer } = useQuote();
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (href: string) => pathname === href;

    const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
            if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            }
        };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300
      ${isScrolled
                    ? "bg-white/80 backdrop-blur-xl shadow-md py-2"
                    : "bg-white py-4"}`}
        >
            <div className="container-custom flex items-center justify-between">

                {/* Logo */}
                <Link href="/" onClick={handleLogoClick} className="flex items-center gap-2">
                    {/* Placeholder for Logo if image not available, or text */}
                    {/* Logo Image */}
                    <img
                        src="/logos/title-blue.png"
                        alt="Future Eyes"
                        className="h-12 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {siteData.navigation.map((item) => {
                        const active = isActive(item.href);
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`relative text-sm font-semibold uppercase tracking-wide transition-all
                ${active
                                        ? "text-fe-blue"
                                        : "text-gray-700 hover:text-fe-blue"
                                    }`}
                            >
                                {item.name}

                                {/* Active underline */}
                                <span
                                    className={`absolute -bottom-1 left-0 h-[2px] bg-fe-blue transition-all duration-300
                  ${active ? "w-full" : "w-0 group-hover:w-full"}`}
                                />
                            </Link>
                        );
                    })}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleDrawer}
                        className="relative p-2 text-gray-700 hover:text-fe-blue transition-colors"
                    >
                        <ShoppingBag className="w-6 h-6" />
                        {items.length > 0 && (
                            <span className="absolute -top-1 -right-1 bg-fe-blue text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                {items.reduce((a, i) => a + i.quantity, 0)}
                            </span>
                        )}
                    </button>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2 text-fe-blue"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t">
                    <nav className="flex flex-col">
                        {siteData.navigation.map((item) => {
                            const active = isActive(item.href);
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`px-6 py-4 text-lg font-medium transition-colors
                  ${active
                                            ? "bg-fe-blue/10 text-fe-blue border-l-4 border-fe-blue"
                                            : "text-gray-800 hover:bg-gray-50"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            )}
        </header>
    );
}
