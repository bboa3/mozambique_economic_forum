// Static server component — renders the dark growth-stat callout banner.
export default function GrowthBanner() {
  return (
    <div className="bg-dark text-white py-12 px-8 text-center">
      <p className="font-montserrat font-bold text-[clamp(0.95rem,2.2vw,1.25rem)] leading-[1.55] max-w-[800px] mx-auto">
        The esports industry is forecasted to grow from $3 billion in 2025 to
        $10 billion by 2032, a five-fold increase in just a decade.
      </p>
    </div>
  );
}
