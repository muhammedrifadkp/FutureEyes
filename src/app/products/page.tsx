import { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
    title: "Thermal Paper Products | POS Rolls & Labels",
    description: "Browse our catalog of thermal POS rolls, barcode labels, weight scale labels, and ribbons. High-quality consumables for your business.",
};

export default function ProductsPage() {
    return <ProductsClient />;
}
