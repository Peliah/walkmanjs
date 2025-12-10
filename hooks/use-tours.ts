"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

export function useTours() {
  const tours = useQuery(api.tours.list);
  const createTour = useMutation(api.tours.create);
  const updateTour = useMutation(api.tours.update);
  const removeTour = useMutation(api.tours.remove);
  const duplicateTour = useMutation(api.tours.duplicate);

  return {
    tours,
    isLoading: tours === undefined,
    create: createTour,
    update: updateTour,
    remove: removeTour,
    duplicate: duplicateTour,
  };
}

export function useTour(tourId: Id<"tours"> | undefined) {
  const tour = useQuery(api.tours.get, tourId ? { tourId } : "skip");
  const updateTour = useMutation(api.tours.update);

  return {
    tour,
    isLoading: tour === undefined,
    update: (data: Parameters<typeof updateTour>[0]) =>
      updateTour({ ...data, tourId: tourId! }),
  };
}

