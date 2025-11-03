export default function SectionHeading({
  eyebrow,
  title,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center" : ""}>
      {eyebrow && (
        <p className="text-teal-600 font-semibold uppercase tracking-widest text-xs mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold italic text-gray-900">
        {title}
      </h2>
    </div>
  );
}
