"use client";

import { useState } from "react";
import { Plus, Upload, FileJson, AlertCircle, CheckCircle2 } from "lucide-react";
import { Id } from "@/convex/_generated/dataModel";
import { useSteps, ImportStep } from "@/hooks/use-steps";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { StepList } from "../steps/step-list";
import { StepForm } from "../steps/step-form";

interface StepsTabProps {
  tourId: Id<"tours">;
}

const exampleJson = `[
  {
    "title": "Welcome",
    "content": "This is the first step of your tour.",
    "targetSelector": "#welcome-element",
    "position": "bottom",
    "order": 1
  },
  {
    "title": "Feature Highlight",
    "content": "Check out this amazing feature!",
    "targetSelector": ".feature-card",
    "position": "right",
    "order": 2
  }
]`;

export function StepsTab({ tourId }: StepsTabProps) {
  const { steps, isLoading, bulkImport } = useSteps(tourId);
  const [isAdding, setIsAdding] = useState(false);
  const [showImport, setShowImport] = useState(false);
  const [jsonInput, setJsonInput] = useState("");
  const [importError, setImportError] = useState<string | null>(null);
  const [importSuccess, setImportSuccess] = useState<string | null>(null);
  const [isImporting, setIsImporting] = useState(false);

  const validateAndParseJson = (json: string): ImportStep[] | null => {
    try {
      const parsed = JSON.parse(json);

      if (!Array.isArray(parsed)) {
        setImportError("JSON must be an array of steps");
        return null;
      }

      if (parsed.length === 0) {
        setImportError("Array cannot be empty");
        return null;
      }

      const validPositions = ["top", "bottom", "left", "right"];

      for (let i = 0; i < parsed.length; i++) {
        const step = parsed[i];

        if (!step.title || typeof step.title !== "string") {
          setImportError(`Step ${i + 1}: "title" is required and must be a string`);
          return null;
        }

        if (!step.content || typeof step.content !== "string") {
          setImportError(`Step ${i + 1}: "content" is required and must be a string`);
          return null;
        }

        if (!step.targetSelector || typeof step.targetSelector !== "string") {
          setImportError(`Step ${i + 1}: "targetSelector" is required and must be a string`);
          return null;
        }

        if (!step.position || !validPositions.includes(step.position)) {
          setImportError(`Step ${i + 1}: "position" must be one of: ${validPositions.join(", ")}`);
          return null;
        }

        if (step.order === undefined || typeof step.order !== "number") {
          setImportError(`Step ${i + 1}: "order" is required and must be a number`);
          return null;
        }
      }

      return parsed.map((step) => ({
        title: step.title,
        content: step.content,
        targetSelector: step.targetSelector,
        position: step.position as "top" | "bottom" | "left" | "right",
        order: step.order as number,
      }));
    } catch {
      setImportError("Invalid JSON format. Please check your syntax.");
      return null;
    }
  };

  const handleImport = async () => {
    setImportError(null);
    setImportSuccess(null);

    const parsedSteps = validateAndParseJson(jsonInput);
    if (!parsedSteps) return;

    setIsImporting(true);
    try {
      const result = await bulkImport(parsedSteps);
      setImportSuccess(`Successfully imported ${result.created} steps (replaced ${result.deleted} existing)`);
      setJsonInput("");
      setTimeout(() => {
        setShowImport(false);
        setImportSuccess(null);
      }, 2000);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      setImportError(`Failed to import steps: ${errorMessage}`);
      console.error("Import error:", error);
    } finally {
      setIsImporting(false);
    }
  };

  if (isLoading) {
    return <StepsTabSkeleton />;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-[#0B192C]">Tour Steps</h2>
          <p className="text-sm text-[#1E3E62]/60">
            {steps?.length || 0} steps • Minimum 5 required
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={() => setShowImport(!showImport)}
            className="border-[#1E3E62]/20 text-[#0B192C] hover:bg-[#1E3E62]/5"
          >
            <FileJson className="mr-2 h-4 w-4" />
            {showImport ? "Hide Import" : "Import JSON"}
          </Button>
          <Button
            onClick={() => setIsAdding(true)}
            className="bg-[#FF6500] text-white hover:bg-[#FF6500]/90"
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Step
          </Button>
        </div>
      </div>

      {/* JSON Import Section */}
      {showImport && (
        <div className="rounded-xl border border-[#1E3E62]/10 bg-white p-6 space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-[#0B192C] flex items-center gap-2">
                <Upload className="h-4 w-4 text-[#FF6500]" />
                Import Steps from JSON
              </h3>
              <p className="text-sm text-[#1E3E62]/60 mt-1">
                Paste your JSON array below. This will <strong>replace all existing steps</strong>.
              </p>
            </div>
          </div>

          {/* Example */}
          <details className="group">
            <summary className="text-sm font-medium text-[#FF6500] cursor-pointer hover:underline">
              View example format
            </summary>
            <pre className="mt-2 p-3 rounded-lg bg-[#0B192C] text-[#FBFBFB] text-xs overflow-x-auto">
              <code>{exampleJson}</code>
            </pre>
          </details>

          {/* JSON Input */}
          <Textarea
            value={jsonInput}
            onChange={(e) => {
              setJsonInput(e.target.value);
              setImportError(null);
              setImportSuccess(null);
            }}
            placeholder={`Paste your JSON array here...\n\nRequired fields for each step:\n- title (string)\n- content (string)\n- targetSelector (string)\n- position ("top" | "bottom" | "left" | "right")\n- order (number)`}
            className="min-h-[200px] font-mono text-sm bg-[#FBFBFB] border-[#1E3E62]/20 focus:border-[#FF6500] focus:ring-[#FF6500]/20"
          />

          {/* Error Message */}
          {importError && (
            <div className="flex items-start gap-2 p-3 rounded-lg bg-red-50 border border-red-200">
              <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
              <p className="text-sm text-red-700">{importError}</p>
            </div>
          )}

          {/* Success Message */}
          {importSuccess && (
            <div className="flex items-start gap-2 p-3 rounded-lg bg-green-50 border border-green-200">
              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
              <p className="text-sm text-green-700">{importSuccess}</p>
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center justify-between pt-2">
            <p className="text-xs text-[#1E3E62]/50">
              ⚠️ Warning: Importing will delete all existing steps
            </p>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                onClick={() => {
                  setShowImport(false);
                  setJsonInput("");
                  setImportError(null);
                  setImportSuccess(null);
                }}
                className="border-[#1E3E62]/20"
              >
                Cancel
              </Button>
              <Button
                onClick={handleImport}
                disabled={!jsonInput.trim() || isImporting}
                className="bg-[#FF6500] text-white hover:bg-[#FF6500]/90"
              >
                {isImporting ? (
                  <>
                    <span className="animate-spin mr-2">⏳</span>
                    Importing...
                  </>
                ) : (
                  <>
                    <Upload className="mr-2 h-4 w-4" />
                    Import Steps
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Add Step Form */}
      {isAdding && (
        <StepForm tourId={tourId} onClose={() => setIsAdding(false)} />
      )}

      {/* Steps List */}
      <StepList tourId={tourId} steps={steps || []} />

      {/* Minimum Steps Warning */}
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
