"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { siteData } from "@/data/content";

export function WhatsAppFloatingButton() {
    return (
        <a
            href={siteData.company.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-110 flex items-center justify-center"
            aria-label="Contact on WhatsApp"
        >
            <MessageCircle className="w-8 h-8" />
        </a>
    );
}
