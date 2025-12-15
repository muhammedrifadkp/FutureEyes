import React from "react";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";

type ProductCardProps = {
    id: string;
    name: string;
    description: string;
    image: string;
    showAddToQuote?: boolean;
    onAddToQuote?: () => void;
};

export function ProductCard({
    id,
    name,
    description,
    image,
    showAddToQuote = false,
    onAddToQuote,
}: ProductCardProps) {
    return (
        <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
            <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
                {/* Placeholder for image if not found, or actual image */}
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-fe-blue transition-colors">
                    {name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-3">
                    {description}
                </p>

                <div className="mt-auto flex items-center gap-3">
                    <Link
                        href={`/products#${id}`}
                        className="text-fe-blue font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                    >
                        View Details <ArrowRight className="w-4 h-4" />
                    </Link>

                    {showAddToQuote && onAddToQuote && (
                        <button
                            onClick={onAddToQuote}
                            className="ml-auto bg-fe-navy-dark text-white p-2 rounded-full hover:bg-fe-blue transition-colors"
                            aria-label="Add to Quote"
                        >
                            <Plus className="w-5 h-5" />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
