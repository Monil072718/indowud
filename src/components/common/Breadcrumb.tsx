import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
  variant?: "dark" | "light";
};

/**
 * Standardized breadcrumb component
 * Style: Uppercase, dark gray text (or white on gradients), simple slashes
 * Example: HOME / CORPORATE / CHAIRMAN MESSAGE
 */
export default function Breadcrumb({
  items,
  className = "",
  variant = "dark",
}: BreadcrumbProps) {
  const isLight = variant === "light";
  const textColor = isLight ? "text-white/90" : "text-gray-500";
  const hoverColor = isLight ? "hover:text-white" : "hover:text-gray-700";
  const lastItemColor = isLight ? "text-white" : "text-gray-700";

  return (
    <nav
      className={`text-xs tracking-widest uppercase ${textColor} ${className}`}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center flex-wrap gap-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center">
              {item.href && !isLast ? (
                <Link href={item.href} className={`${hoverColor} transition-colors`}>
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? lastItemColor : ""}>{item.label}</span>
              )}
              {!isLast && (
                <span aria-hidden="true" className="mx-1">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

