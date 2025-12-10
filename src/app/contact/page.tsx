import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
    title: "Contact Us | Future Eyes General Trading",
    description: "Get in touch with Future Eyes for quotes, inquiries, or support. Located in Sharjah, UAE. Call or WhatsApp us today.",
};

export default function ContactPage() {
    return <ContactClient />;
}
