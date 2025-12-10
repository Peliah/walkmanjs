"use client";

import { Doc, Id } from "@/convex/_generated/dataModel";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TourSelectorProps {
  tours: Doc<"tours">[];
  selectedTourId: Id<"tours">;
  onSelect: (tourId: Id<"tours">) => void;
}

export function TourSelector({ tours, selectedTourId, onSelect }: TourSelectorProps) {
  return (
    <div className="flex items-center gap-4">
      <label className="text-sm font-medium text-[#0B192C]">Select Tour</label>
      <Select
        value={selectedTourId}
        onValueChange={(value) => onSelect(value as Id<"tours">)}
      >
        <SelectTrigger className="w-64 border-[#1E3E62]/20">
          <SelectValue placeholder="Select a tour" />
        </SelectTrigger>
        <SelectContent>
          {tours.map((tour) => (
            <SelectItem key={tour._id} value={tour._id}>
              {tour.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

