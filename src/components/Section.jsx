export default function Section({ eyebrow, title, children, className = "", compact = false }) {
  return (
    <section className={`section ${compact ? "py-14" : "py-20 lg:py-28"} ${className}`}>
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {(eyebrow || title) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2 className="section-title">{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
