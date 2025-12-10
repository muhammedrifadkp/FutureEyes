"use client";

import React from "react";
import { X, ShoppingBag, Trash2, MessageCircle } from "lucide-react";
import { siteData } from "@/data/content";
import { useQuote } from "@/context/QuoteContext";

export function QuoteDrawer() {
    const { items, isOpen, toggleDrawer, removeFromQuote, updateQuantity } = useQuote();

    if (!isOpen) return null;

    const generateWhatsAppLink = () => {
        const message = `Hello Future Eyes, I would like to request a quote for:\n\n${items
            .map((item) => `- ${item.name} (Qty: ${item.quantity})`)
            .join("\n")}`;
        return `https://wa.me/${siteData.company.phone.replace(/\s+/g, "").replace("+", "")}?text=${encodeURIComponent(
            message
        )}`;
    };

    return (
        <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                onClick={toggleDrawer}
            />

            {/* Drawer */}
            <div className="relative w-full max-w-md bg-white shadow-2xl flex flex-col h-full animate-in slide-in-from-right duration-300">
                <div className="p-4 border-b flex items-center justify-between bg-fe-navy-dark text-white">
                    <h2 className="text-lg font-semibold flex items-center gap-2">
                        <ShoppingBag className="w-5 h-5" />
                        Your Quote List
                    </h2>
                    <button onClick={toggleDrawer} className="p-1 hover:bg-white/10 rounded-full">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {items.length === 0 ? (
                        <div className="text-center text-gray-500 py-10">
                            <p>Your quote list is empty.</p>
                            <button
                                onClick={toggleDrawer}
                                className="mt-4 text-fe-blue hover:underline"
                            >
                                Browse Products
                            </button>
                        </div>
                    ) : (
                        items.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg border"
                            >
                                <div className="flex-1">
                                    <h3 className="font-medium text-sm text-fe-navy-dark">{item.name}</h3>
                                    <div className="flex items-center gap-3 mt-2">
                                        <button
                                            onClick={() => updateQuantity(item.id, -1)}
                                            className="w-6 h-6 flex items-center justify-center bg-white border rounded hover:bg-gray-100"
                                        >
                                            -
                                        </button>
                                        <span className="text-sm font-medium w-4 text-center">
                                            {item.quantity}
                                        </span>
                                        <button
                                            onClick={() => updateQuantity(item.id, 1)}
                                            className="w-6 h-6 flex items-center justify-center bg-white border rounded hover:bg-gray-100"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeFromQuote(item.id)}
                                    className="text-red-500 hover:bg-red-50 p-2 rounded-full"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        ))
                    )}
                </div>

                <div className="p-4 border-t bg-gray-50">
                    <a
                        href={generateWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center gap-2 w-full py-3 rounded-lg font-semibold transition-colors ${items.length === 0
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "bg-green-600 text-white hover:bg-green-700"
                            }`}
                        onClick={(e) => items.length === 0 && e.preventDefault()}
                    >
                        <MessageCircle className="w-5 h-5" />
                        Request Quote via WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
}
