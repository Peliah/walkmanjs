import { Layers } from "lucide-react";

export function StepsEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-[#1E3E62]/20 bg-white py-12">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1E3E62]/10">
        <Layers className="h-6 w-6 text-[#1E3E62]" />
      </div>
      <h3 className="mt-4 font-semibold text-[#0B192C]">No steps yet</h3>
      <p className="mt-1 text-sm text-[#1E3E62]/60">
        Add your first step to start building the tour.
      </p>
    </div>
  );
}

