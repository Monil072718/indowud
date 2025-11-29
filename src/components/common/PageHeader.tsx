import React from "react";

interface PageHeaderProps {
    category?: string;
    title: string;
    highlight?: string;
    description?: string;
    className?: string;
    children?: React.ReactNode;
}

export default function PageHeader({
    category,
    title,
    highlight,
    description,
    className = "",
    children,
}: PageHeaderProps) {
    return (
        <header className={`relative w-full bg-[#FDFCF8] py-12 sm:py-12 ${className}`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                {category && (
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">
                        {category}
                    </span>
                )}
                <h1 className="mt-4 font-serif text-4xl sm:text-6xl text-stone-900">
                    {title} {highlight && <span className="italic text-stone-500">{highlight}</span>}
                </h1>
                {description && (
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-stone-600 font-light">
                        {description}
                    </p>
                )}
                {children && <div className="mt-8 flex justify-center gap-4">{children}</div>}
            </div>
        </header>
    );
}
