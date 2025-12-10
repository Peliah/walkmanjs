"use client";

import { Map } from "lucide-react";
import { CreateTourButton } from "./create-tour-button";

export function ToursEmptyState() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center rounded-xl border border-dashed border-[#1E3E62]/20 bg-white py-16">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FF6500]/10">
        <Map className="h-7 w-7 text-[#FF6500]" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-[#0B192C]">No tours yet</h3>
      <p className="mt-1 text-sm text-[#1E3E62]/60">
        Create your first tour to get started.
      </p>
      <div className="mt-6">
        <CreateTourButton />
      </div>
    </div>
  );
}

