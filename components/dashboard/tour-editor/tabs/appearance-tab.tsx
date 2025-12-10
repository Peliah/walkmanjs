"use client";

import { useState } from "react";
import { Doc } from "@/convex/_generated/dataModel";
import { useTour } from "@/hooks/use-tours";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";

interface AppearanceTabProps {
  tour: Doc<"tours">;
}

export function AppearanceTab({ tour }: AppearanceTabProps) {
  const { update } = useTour(tour._id);
  const [isLoading, setIsLoading] = useState(false);
  const [primaryColor, setPrimaryColor] = useState(tour.theme?.primaryColor || "#FF6500");
  const [backgroundColor, setBackgroundColor] = useState(tour.theme?.backgroundColor || "#FFFFFF");
  const [textColor, setTextColor] = useState(tour.theme?.textColor || "#0B192C");
  const [borderRadius, setBorderRadius] = useState(tour.theme?.borderRadius || 8);
  const [overlayEnabled, setOverlayEnabled] = useState(tour.theme?.overlayEnabled ?? true);
  const [overlayOpacity, setOverlayOpacity] = useState(tour.theme?.overlayOpacity || 0.5);

  const handleSave = async () => {
    setIsLoading(true);
    try {
      await update({
        theme: {
          primaryColor,
          backgroundColor,
          textColor,
          borderRadius,
          overlayEnabled,
          overlayOpacity,
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-[#0B192C]">Appearance</h2>
        <p className="text-sm text-[#1E3E62]/60">
          Customize how the tour looks on your website.
        </p>
      </div>

      <div className="space-y-6 rounded-xl border border-[#1E3E62]/10 bg-white p-6">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="space-y-2">
            <Label className="text-[#0B192C]">Primary Color</Label>
            <div className="flex gap-2">
              <Input
                type="color"
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
                className="h-10 w-14 cursor-pointer border-[#1E3E62]/20 p-1"
              />
              <Input
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
                className="flex-1 border-[#1E3E62]/20"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-[#0B192C]">Background Color</Label>
            <div className="flex gap-2">
              <Input
                type="color"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
                className="h-10 w-14 cursor-pointer border-[#1E3E62]/20 p-1"
              />
              <Input
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
                className="flex-1 border-[#1E3E62]/20"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-[#0B192C]">Text Color</Label>
            <div className="flex gap-2">
              <Input
                type="color"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                className="h-10 w-14 cursor-pointer border-[#1E3E62]/20 p-1"
              />
              <Input
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                className="flex-1 border-[#1E3E62]/20"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-[#0B192C]">Border Radius: {borderRadius}px</Label>
          <Slider
            value={[borderRadius]}
            onValueChange={([v]) => setBorderRadius(v)}
            min={0}
            max={24}
            step={1}
            className="w-full"
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <Label className="text-[#0B192C]">Overlay</Label>
            <p className="text-sm text-[#1E3E62]/60">Dim the background when showing steps</p>
          </div>
          <Switch checked={overlayEnabled} onCheckedChange={setOverlayEnabled} />
        </div>

        {overlayEnabled && (
          <div className="space-y-2">
            <Label className="text-[#0B192C]">Overlay Opacity: {Math.round(overlayOpacity * 100)}%</Label>
            <Slider
              value={[overlayOpacity]}
              onValueChange={([v]) => setOverlayOpacity(v)}
              min={0.1}
              max={0.9}
              step={0.05}
              className="w-full"
            />
          </div>
        )}
      </div>

      <div className="rounded-xl border border-[#1E3E62]/10 bg-white p-6">
        <Label className="text-[#0B192C]">Preview</Label>
        <div
          className="mt-4 rounded-lg p-4"
          style={{ backgroundColor: overlayEnabled ? `rgba(0,0,0,${overlayOpacity})` : "#f5f5f5" }}
        >
          <div
            className="p-4"
            style={{
              backgroundColor,
              borderRadius: `${borderRadius}px`,
              color: textColor,
            }}
          >
            <h4 className="font-semibold">Sample Step Title</h4>
            <p className="mt-1 text-sm opacity-80">This is what your tour step will look like.</p>
            <button
              className="mt-3 rounded px-4 py-2 text-sm font-medium text-white"
              style={{ backgroundColor: primaryColor }}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button
          onClick={handleSave}
          disabled={isLoading}
          className="bg-[#FF6500] text-white hover:bg-[#FF6500]/90"
        >
          {isLoading ? "Saving..." : "Save Appearance"}
        </Button>
      </div>
    </div>
  );
}

