"use client";

import React from "react";
import { siteData } from "@/data/content";
import { useQuote } from "@/context/QuoteContext";
import { Check } from "lucide-react";

export default function ProductsPage() {
    const { addToQuote } = useQuote();

    return (
        <div className="pb-16">
            {/* Intro Section */}
            <section className="bg-fe-navy-dark text-white py-16">
                <div className="container-custom">
                    <h1 className="text-4xl font-bold mb-4">Thermal Paper & Label Products</h1>
                    <p className="text-xl text-gray-300 max-w-3xl">
                        Discover our range of high-quality thermal rolls, barcode labels, and ribbons designed for retail, logistics, and industrial applications.
                    </p>
                </div>
            </section>

            {/* Products Grid */}
            <section className="container-custom py-16">
                <div className="grid gap-16">
                    {siteData.products.map((product) => (
                        <div key={product.id} id={product.id} className="scroll-mt-24">
                            <div className="grid lg:grid-cols-2 gap-12 items-start">
                                {/* Product Image */}
                                <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-square lg:aspect-video relative flex items-center justify-center text-gray-400">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Product Details */}
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="bg-fe-blue/10 text-fe-blue px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                            {product.category}
                                        </span>
                                    </div>
                                    <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
                                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                                        {product.description}
                                    </p>

                                    <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
                                        <h3 className="font-bold text-gray-900 mb-4">Specifications</h3>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            {Object.entries(product.specs).map(([key, value]) => (
                                                <div key={key}>
                                                    <p className="text-xs text-gray-500 uppercase font-semibold">{key}</p>
                                                    <p className="font-medium text-gray-800">
                                                        {Array.isArray(value) ? value.join(", ") : value}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mb-8">
                                        <h3 className="font-bold mb-3">Ideal Applications</h3>
                                        <ul className="grid sm:grid-cols-2 gap-2">
                                            {product.applications.map((app, idx) => (
                                                <li key={idx} className="flex items-center gap-2 text-gray-600">
                                                    <Check className="w-4 h-4 text-green-500 shrink-0" />
                                                    {app}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <button
                                        onClick={() => addToQuote({ id: product.id, name: product.name })}
                                        className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2"
                                    >
                                        Add to Quote List
                                    </button>
                                </div>
                            </div>

                            {/* Divider */}
                            <hr className="mt-16 border-gray-100" />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
