export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center my-8">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 uppercase tracking-tight">
        {title}
      </h2>
      <div className="w-16 h-1 bg-red-600 mx-auto my-3 rounded"></div>
      {subtitle && (
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
          {subtitle}
        </p>
      )}
    </div>
  );
}