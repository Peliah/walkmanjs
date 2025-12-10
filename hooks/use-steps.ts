"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

export function useSteps(tourId: Id<"tours"> | undefined) {
  const steps = useQuery(api.steps.list, tourId ? { tourId } : "skip");
  const createStep = useMutation(api.steps.create);
  const updateStep = useMutation(api.steps.update);
  const removeStep = useMutation(api.steps.remove);
  const reorderSteps = useMutation(api.steps.reorder);

  return {
    steps,
    isLoading: steps === undefined,
    create: (data: Omit<Parameters<typeof createStep>[0], "tourId">) =>
      createStep({ ...data, tourId: tourId! }),
    update: updateStep,
    remove: removeStep,
    reorder: (stepIds: Id<"steps">[]) =>
      reorderSteps({ tourId: tourId!, stepIds }),
  };
}

