"use client";

import { useState } from "react";
import { Id, Doc } from "@/convex/_generated/dataModel";
import { useSteps } from "@/hooks/use-steps";
import { StepCard } from "./step-card";
import { StepForm } from "./step-form";
import { StepsEmptyState } from "./steps-empty-state";

interface StepListProps {
  tourId: Id<"tours">;
  steps: Doc<"steps">[];
}

export function StepList({ tourId, steps }: StepListProps) {
  const { reorder } = useSteps(tourId);
  const [editingStepId, setEditingStepId] = useState<Id<"steps"> | null>(null);

  const handleMoveUp = async (index: number) => {
    if (index === 0) return;
    const newOrder = [...steps];
    [newOrder[index - 1], newOrder[index]] = [newOrder[index], newOrder[index - 1]];
    await reorder(newOrder.map((s) => s._id));
  };

  const handleMoveDown = async (index: number) => {
    if (index === steps.length - 1) return;
    const newOrder = [...steps];
    [newOrder[index], newOrder[index + 1]] = [newOrder[index + 1], newOrder[index]];
    await reorder(newOrder.map((s) => s._id));
  };

  if (steps.length === 0) {
    return <StepsEmptyState />;
  }

  const sortedSteps = [...steps].sort((a, b) => a.order - b.order);

  return (
    <div className="space-y-3">
      {sortedSteps.map((step, index) => (
        <div key={step._id}>
          {editingStepId === step._id ? (
            <StepForm
              tourId={tourId}
              step={step}
              onClose={() => setEditingStepId(null)}
            />
          ) : (
            <StepCard
              step={step}
              index={index}
              totalSteps={steps.length}
              onEdit={() => setEditingStepId(step._id)}
              onMoveUp={() => handleMoveUp(index)}
              onMoveDown={() => handleMoveDown(index)}
            />
          )}
        </div>
      ))}
    </div>
  );
}

