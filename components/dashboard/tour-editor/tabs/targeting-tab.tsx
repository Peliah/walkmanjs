"use client";

import { useState, useEffect } from "react";
import { Doc } from "@/convex/_generated/dataModel";
import { useTour } from "@/hooks/use-tours";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TargetingTabProps {
  tour: Doc<"tours">;
}

export function TargetingTab({ tour }: TargetingTabProps) {
  const { update } = useTour(tour._id);
  const [isLoading, setIsLoading] = useState(false);
  const [urlMatchType, setUrlMatchType] = useState<"exact" | "contains" | "regex">(
    tour.targeting?.urlMatchType || "contains"
  );
  const [urlPattern, setUrlPattern] = useState(tour.targeting?.urlPattern || "");
  const [triggerType, setTriggerType] = useState<"pageload" | "delay" | "click">(
    tour.targeting?.triggerType || "pageload"
  );
  const [triggerDelay, setTriggerDelay] = useState(
    tour.targeting?.triggerDelay?.toString() || "0"
  );
  const [frequency, setFrequency] = useState<"once" | "session" | "always">(
    tour.targeting?.frequency || "once"
  );

  const handleSave = async () => {
    setIsLoading(true);
    try {
      await update({
        targeting: {
          urlMatchType,
          urlPattern,
          triggerType,
          triggerDelay: triggerType === "delay" ? parseInt(triggerDelay) || 0 : undefined,
          frequency,
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-[#0B192C]">Targeting Settings</h2>
        <p className="text-sm text-[#1E3E62]/60">
          Configure when and where the tour appears.
        </p>
      </div>

      <div className="space-y-4 rounded-xl border border-[#1E3E62]/10 bg-white p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label className="text-[#0B192C]">URL Match Type</Label>
            <Select value={urlMatchType} onValueChange={(v) => setUrlMatchType(v as typeof urlMatchType)}>
              <SelectTrigger className="border-[#1E3E62]/20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="exact">Exact Match</SelectItem>
                <SelectItem value="contains">Contains</SelectItem>
                <SelectItem value="regex">Regex</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label className="text-[#0B192C]">URL Pattern</Label>
            <Input
              value={urlPattern}
              onChange={(e) => setUrlPattern(e.target.value)}
              placeholder="e.g., /dashboard"
              className="border-[#1E3E62]/20"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label className="text-[#0B192C]">Trigger</Label>
            <Select value={triggerType} onValueChange={(v) => setTriggerType(v as typeof triggerType)}>
              <SelectTrigger className="border-[#1E3E62]/20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pageload">On Page Load</SelectItem>
                <SelectItem value="delay">After Delay</SelectItem>
                <SelectItem value="click">On Click</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {triggerType === "delay" && (
            <div className="space-y-2">
              <Label className="text-[#0B192C]">Delay (seconds)</Label>
              <Input
                type="number"
                value={triggerDelay}
                onChange={(e) => setTriggerDelay(e.target.value)}
                min="0"
                className="border-[#1E3E62]/20"
              />
            </div>
          )}
        </div>

        <div className="space-y-2">
          <Label className="text-[#0B192C]">Frequency</Label>
          <Select value={frequency} onValueChange={(v) => setFrequency(v as typeof frequency)}>
            <SelectTrigger className="w-full border-[#1E3E62]/20 sm:w-64">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="once">Once per user</SelectItem>
              <SelectItem value="session">Once per session</SelectItem>
              <SelectItem value="always">Every time</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex justify-end">
        <Button
          onClick={handleSave}
          disabled={isLoading}
          className="bg-[#FF6500] text-white hover:bg-[#FF6500]/90"
        >
          {isLoading ? "Saving..." : "Save Settings"}
        </Button>
      </div>
    </div>
  );
}

