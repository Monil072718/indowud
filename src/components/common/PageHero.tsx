// Server Component (no "use client")
type Props = {
  title: string;
  trail?: string[]; // e.g. ["Home","Corporate","Chairman Message"]
  subtitle?: string;
};

export default function PageHero({ title, trail = [], subtitle }: Props) {
  return (
    <div className="relative overflow-hidden">
      <div className="h-40 md:h-48 w-full bg-gradient-to-r from-teal-100 via-white to-rose-100" />
      <div className="absolute inset-0 [mask-image:radial-gradient(80%_60%_at_50%_0%,#000_40%,transparent_100%)] bg-[radial-gradient(ellipse_at_10%_-10%,rgba(13,148,136,.15),transparent_35%),radial-gradient(ellipse_at_90%_-10%,rgba(244,63,94,.15),transparent_35%)]" />
      <div className="absolute inset-0">
        <div className="max-w-7xl mx-auto px-6 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
            {title}
          </h1>
          {subtitle && <p className="mt-2 text-base text-gray-600">{subtitle}</p>}
          {trail.length > 0 && (
            <div className="mt-3 text-xs tracking-widest text-gray-500 uppercase">
              {trail.join(" / ")}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
