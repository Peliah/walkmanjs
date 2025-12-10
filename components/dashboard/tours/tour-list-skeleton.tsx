export function TourListSkeleton() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="h-40 animate-pulse rounded-xl border border-[#1E3E62]/10 bg-white"
        />
      ))}
    </div>
  );
}

