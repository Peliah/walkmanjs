"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Id } from "@/convex/_generated/dataModel";
import { useSteps } from "@/hooks/use-steps";
import { Button } from "@/components/ui/button";
import { StepList } from "../steps/step-list";
import { StepForm } from "../steps/step-form";

interface StepsTabProps {
  tourId: Id<"tours">;
}

export function StepsTab({ tourId }: StepsTabProps) {
  const { steps, isLoading } = useSteps(tourId);
  const [isAdding, setIsAdding] = useState(false);

  if (isLoading) {
    return <StepsTabSkeleton />;
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-[#0B192C]">Tour Steps</h2>
          <p className="text-sm text-[#1E3E62]/60">
            {steps?.length || 0} steps • Minimum 5 required
          </p>
        </div>
        <Button
          onClick={() => setIsAdding(true)}
          className="bg-[#FF6500] text-white hover:bg-[#FF6500]/90"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Step
        </Button>
      </div>

      {isAdding && (
        <StepForm tourId={tourId} onClose={() => setIsAdding(false)} />
      )}

      <StepList tourId={tourId} steps={steps || []} />

      {(!steps || steps.length < 5) && (
        <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4">
          <p className="text-sm text-yellow-800">
            You need at least 5 steps to publish this tour.{" "}
            {steps && steps.length > 0 && `(${5 - steps.length} more needed)`}
          </p>
        </div>
      )}
    </div>
  );
}

function StepsTabSkeleton() {
  return (
    <div className="space-y-4">
      <div className="h-10 w-48 animate-pulse rounded-lg bg-[#1E3E62]/10" />
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="h-24 animate-pulse rounded-xl bg-[#1E3E62]/10"
        />
      ))}
    </div>
  );
}

