"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type QuoteItem = {
    id: string;
    name: string;
    quantity: number;
};

type QuoteContextType = {
    items: QuoteItem[];
    isOpen: boolean;
    addToQuote: (product: { id: string; name: string }) => void;
    removeFromQuote: (id: string) => void;
    updateQuantity: (id: string, delta: number) => void;
    toggleDrawer: () => void;
};

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export function QuoteProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<QuoteItem[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    // Load from local storage on mount
    useEffect(() => {
        const saved = localStorage.getItem("fe-quote-cart");
        if (saved) {
            try {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                setItems(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse quote cart", e);
            }
        }
    }, []);

    // Save to local storage on change
    useEffect(() => {
        localStorage.setItem("fe-quote-cart", JSON.stringify(items));
    }, [items]);

    const addToQuote = (product: { id: string; name: string }) => {
        setItems((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                return prev.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
        setIsOpen(true);
    };

    const removeFromQuote = (id: string) => {
        setItems((prev) => prev.filter((item) => item.id !== id));
    };

    const updateQuantity = (id: string, delta: number) => {
        setItems((prev) =>
            prev.map((item) => {
                if (item.id === id) {
                    const newQty = Math.max(1, item.quantity + delta);
                    return { ...item, quantity: newQty };
                }
                return item;
            })
        );
    };

    const toggleDrawer = () => setIsOpen((prev) => !prev);

    return (
        <QuoteContext.Provider
            value={{ items, isOpen, addToQuote, removeFromQuote, updateQuantity, toggleDrawer }}
        >
            {children}
        </QuoteContext.Provider>
    );
}

export function useQuote() {
    const context = useContext(QuoteContext);
    if (!context) {
        // Return a dummy context to prevent build failures during static generation
        // if the component is rendered outside the provider for some reason.
        return {
            items: [],
            isOpen: false,
            addToQuote: () => { },
            removeFromQuote: () => { },
            updateQuantity: () => { },
            toggleDrawer: () => { },
        };
    }
    return context;
}
