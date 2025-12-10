"use client";

import { useState } from "react";
import { useTour } from "@/hooks/use-tours";
import { Id } from "@/convex/_generated/dataModel";
import { TourEditorHeader } from "./tour-editor-header";
import { TourEditorTabs } from "./tour-editor-tabs";
import { StepsTab } from "./tabs/steps-tab";
import { TargetingTab } from "./tabs/targeting-tab";
import { AppearanceTab } from "./tabs/appearance-tab";
import { InstallTab } from "./tabs/install-tab";

interface TourEditorProps {
  tourId: string;
}

export function TourEditor({ tourId }: TourEditorProps) {
  const { tour, isLoading } = useTour(tourId as Id<"tours">);
  const [activeTab, setActiveTab] = useState("steps");

  if (isLoading) {
    return <TourEditorSkeleton />;
  }

  if (!tour) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <p className="text-[#1E3E62]/60">Tour not found</p>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col">
      <TourEditorHeader tour={tour} />
      <TourEditorTabs activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="flex flex-1 flex-col items-center p-4 lg:p-6">
        <div className="w-full max-w-4xl">
          {activeTab === "steps" && <StepsTab tourId={tour._id} />}
          {activeTab === "targeting" && <TargetingTab tour={tour} />}
          {activeTab === "appearance" && <AppearanceTab tour={tour} />}
          {activeTab === "install" && <InstallTab tour={tour} />}
        </div>
      </div>
    </div>
  );
}

function TourEditorSkeleton() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 lg:p-6">
      <div className="h-12 w-64 animate-pulse rounded-lg bg-[#1E3E62]/10" />
      <div className="h-10 w-96 animate-pulse rounded-lg bg-[#1E3E62]/10" />
      <div className="flex-1 animate-pulse rounded-xl bg-[#1E3E62]/10" />
    </div>
  );
}

