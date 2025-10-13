export default function TeamCard({
  name,
  role,
  img,
  children,
  reverse = false,
}: {
  name: string;
  role?: string;
  img: string;
  children: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <div
      className={`grid md:grid-cols-3 gap-8 items-center ${
        reverse ? "md:[&>*:first-child]:col-start-2" : ""
      }`}
    >
      <div className="flex md:justify-center">
        <img
          src={img}
          alt={name}
          className="h-44 w-44 rounded-full object-cover grayscale"
        />
      </div>

      <div className="md:col-span-2">
        <h3 className="text-2xl font-bold text-teal-700">{name}</h3>
        {role && <p className="text-gray-500 mb-3">{role}</p>}
        <div className="prose max-w-none text-gray-700">{children}</div>
      </div>
    </div>
  );
}
