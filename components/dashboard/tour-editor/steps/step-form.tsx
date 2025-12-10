"use client";

import { useState } from "react";
import { Id, Doc } from "@/convex/_generated/dataModel";
import { useSteps } from "@/hooks/use-steps";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface StepFormProps {
  tourId: Id<"tours">;
  step?: Doc<"steps">;
  onClose: () => void;
}

export function StepForm({ tourId, step, onClose }: StepFormProps) {
  const { create, update } = useSteps(tourId);
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState(step?.title || "");
  const [content, setContent] = useState(step?.content || "");
  const [targetSelector, setTargetSelector] = useState(step?.targetSelector || "");
  const [position, setPosition] = useState<"top" | "bottom" | "left" | "right">(
    step?.position || "bottom"
  );

  const isEditing = !!step;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim() || !targetSelector.trim()) return;

    setIsLoading(true);
    try {
      if (isEditing) {
        await update({
          id: step._id,
          title: title.trim(),
          content: content.trim(),
          targetSelector: targetSelector.trim(),
          position,
        });
      } else {
        await create({
          title: title.trim(),
          content: content.trim(),
          targetSelector: targetSelector.trim(),
          position,
        });
      }
      onClose();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-[#FF6500]/20 bg-[#FF6500]/5 p-4"
    >
      <h3 className="mb-4 font-semibold text-[#0B192C]">
        {isEditing ? "Edit Step" : "New Step"}
      </h3>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="title" className="text-[#0B192C]">
            Title
          </Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Welcome to the app"
            className="border-[#1E3E62]/20"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="targetSelector" className="text-[#0B192C]">
            Target Selector
          </Label>
          <Input
            id="targetSelector"
            value={targetSelector}
            onChange={(e) => setTargetSelector(e.target.value)}
            placeholder="e.g., #signup-btn, .nav-menu"
            className="border-[#1E3E62]/20"
          />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="content" className="text-[#0B192C]">
            Content
          </Label>
          <Textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Describe this step to the user..."
            className="border-[#1E3E62]/20"
            rows={3}
          />
        </div>
        <div className="space-y-2">
          <Label className="text-[#0B192C]">Position</Label>
          <Select value={position} onValueChange={(v) => setPosition(v as typeof position)}>
            <SelectTrigger className="border-[#1E3E62]/20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="top">Top</SelectItem>
              <SelectItem value="bottom">Bottom</SelectItem>
              <SelectItem value="left">Left</SelectItem>
              <SelectItem value="right">Right</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="mt-4 flex justify-end gap-2">
        <Button
          type="button"
          variant="outline"
          onClick={onClose}
          className="border-[#1E3E62]/20"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          disabled={!title.trim() || !content.trim() || !targetSelector.trim() || isLoading}
          className="bg-[#FF6500] text-white hover:bg-[#FF6500]/90"
        >
          {isLoading ? "Saving..." : isEditing ? "Update Step" : "Add Step"}
        </Button>
      </div>
    </form>
  );
}

