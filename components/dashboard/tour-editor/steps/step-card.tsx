"use client";

import { GripVertical, Pencil, Trash2, ChevronUp, ChevronDown } from "lucide-react";
import { Doc } from "@/convex/_generated/dataModel";
import { useSteps } from "@/hooks/use-steps";
import { Button } from "@/components/ui/button";

interface StepCardProps {
  step: Doc<"steps">;
  index: number;
  totalSteps: number;
  onEdit: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
}

const positionLabels = {
  top: "Top",
  bottom: "Bottom",
  left: "Left",
  right: "Right",
};

export function StepCard({
  step,
  index,
  totalSteps,
  onEdit,
  onMoveUp,
  onMoveDown,
}: StepCardProps) {
  const { remove } = useSteps(step.tourId);

  const handleDelete = async () => {
    await remove({ id: step._id });
  };

  return (
    <div className="group flex items-start gap-3 rounded-xl border border-[#1E3E62]/10 bg-white p-4 transition-shadow hover:shadow-md">
      <div className="flex flex-col items-center gap-1 pt-1">
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6"
          onClick={onMoveUp}
          disabled={index === 0}
        >
          <ChevronUp className="h-4 w-4" />
        </Button>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF6500]/10 text-sm font-semibold text-[#FF6500]">
          {index + 1}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6"
          onClick={onMoveDown}
          disabled={index === totalSteps - 1}
        >
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex-1">
        <h4 className="font-medium text-[#0B192C]">{step.title}</h4>
        <p className="mt-1 text-sm text-[#1E3E62]/70 line-clamp-2">{step.content}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="rounded-full bg-[#1E3E62]/10 px-2 py-0.5 text-xs text-[#1E3E62]">
            {step.targetSelector}
          </span>
          <span className="rounded-full bg-[#1E3E62]/10 px-2 py-0.5 text-xs text-[#1E3E62]">
            {positionLabels[step.position]}
          </span>
        </div>
      </div>

      <div className="flex gap-1 opacity-0 transition-opacity group-hover:opacity-100">
        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={onEdit}>
          <Pencil className="h-4 w-4 text-[#1E3E62]" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={handleDelete}
        >
          <Trash2 className="h-4 w-4 text-red-600" />
        </Button>
      </div>
    </div>
  );
}

