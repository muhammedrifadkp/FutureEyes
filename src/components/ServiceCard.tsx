import React from "react";
import { LucideIcon } from "lucide-react";

type ServiceCardProps = {
    title: string;
    items: string[];
    icon: LucideIcon;
};

export function ServiceCard({ title, items, icon: Icon, image }: ServiceCardProps & { image?: string }) {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full">
            {image && (
                <div className="h-48 w-full overflow-hidden">
                    <img src={image} alt={title} className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" />
                </div>
            )}
            <div className="p-6 flex-1 flex flex-col">
                <div className="w-12 h-12 bg-fe-light rounded-xl flex items-center justify-center mb-4 text-fe-blue shrink-0">
                    <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-fe-navy-dark mb-4">{title}</h3>
                <ul className="space-y-2 flex-1">
                    {items.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-600 text-sm">
                            <span className="w-1.5 h-1.5 bg-fe-accent rounded-full mt-1.5 shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
