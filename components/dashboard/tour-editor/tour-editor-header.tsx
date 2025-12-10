"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check, X } from "lucide-react";
import { Doc } from "@/convex/_generated/dataModel";
import { useTour } from "@/hooks/use-tours";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TourEditorHeaderProps {
  tour: Doc<"tours">;
}

export function TourEditorHeader({ tour }: TourEditorHeaderProps) {
  const { update } = useTour(tour._id);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(tour.name);

  const handleSaveName = async () => {
    if (name.trim() && name !== tour.name) {
      await update({ name: name.trim() });
    }
    setIsEditing(false);
  };

  const handleStatusChange = async (status: "draft" | "active" | "paused") => {
    await update({ status });
  };

  return (
    <div className="flex items-center gap-4 border-b border-[#1E3E62]/10 bg-white px-4 py-3 lg:px-6">
      <Link
        href="/dashboard/tours"
        className="flex h-8 w-8 items-center justify-center rounded-lg text-[#1E3E62] hover:bg-[#1E3E62]/10"
      >
        <ArrowLeft className="h-4 w-4" />
      </Link>

      {isEditing ? (
        <div className="flex items-center gap-2">
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-9 w-64 border-[#1E3E62]/20"
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSaveName();
              if (e.key === "Escape") {
                setName(tour.name);
                setIsEditing(false);
              }
            }}
          />
          <Button size="icon" variant="ghost" onClick={handleSaveName} className="h-8 w-8">
            <Check className="h-4 w-4 text-green-600" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            onClick={() => {
              setName(tour.name);
              setIsEditing(false);
            }}
            className="h-8 w-8"
          >
            <X className="h-4 w-4 text-red-600" />
          </Button>
        </div>
      ) : (
        <button
          onClick={() => setIsEditing(true)}
          className="text-lg font-semibold text-[#0B192C] hover:text-[#FF6500]"
        >
          {tour.name}
        </button>
      )}

      <div className="ml-auto">
        <Select value={tour.status} onValueChange={handleStatusChange}>
          <SelectTrigger className="w-32 border-[#1E3E62]/20">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="draft">Draft</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="paused">Paused</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

