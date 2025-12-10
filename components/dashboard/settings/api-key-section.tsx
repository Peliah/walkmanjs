"use client";

import { useState } from "react";
import { Copy, Check, RefreshCw, Eye, EyeOff } from "lucide-react";
import { useApiKey } from "@/hooks/use-api-key";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ApiKeySection() {
  const { apiKey, isLoading, create, regenerate } = useApiKey();
  const [copied, setCopied] = useState(false);
  const [showKey, setShowKey] = useState(false);

  const handleCopy = async () => {
    if (!apiKey) return;
    await navigator.clipboard.writeText(apiKey.key);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRegenerate = async () => {
    if (apiKey) {
      await regenerate();
    } else {
      await create({});
    }
  };

  const maskedKey = apiKey?.key
    ? `${apiKey.key.slice(0, 7)}${"•".repeat(20)}${apiKey.key.slice(-4)}`
    : "";

  return (
    <div className="rounded-xl border border-[#1E3E62]/10 bg-white p-6">
      <h2 className="text-lg font-semibold text-[#0B192C]">API Key</h2>
      <p className="text-sm text-[#1E3E62]/60">
        Use this key to authenticate your embeddable widget
      </p>

      <div className="mt-6 space-y-4">
        {isLoading ? (
          <div className="h-10 animate-pulse rounded-lg bg-[#1E3E62]/10" />
        ) : apiKey ? (
          <>
            <div className="space-y-2">
              <Label className="text-[#0B192C]">Your API Key</Label>
              <div className="flex gap-2">
                <Input
                  value={showKey ? apiKey.key : maskedKey}
                  readOnly
                  className="flex-1 border-[#1E3E62]/20 font-mono text-sm"
                />
                <Button
                  size="icon"
                  variant="outline"
                  className="border-[#1E3E62]/20"
                  onClick={() => setShowKey(!showKey)}
                >
                  {showKey ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="border-[#1E3E62]/20"
                  onClick={handleCopy}
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-[#1E3E62]/5 p-4">
              <div>
                <p className="text-sm font-medium text-[#0B192C]">
                  Regenerate API Key
                </p>
                <p className="text-xs text-[#1E3E62]/60">
                  This will invalidate your current key
                </p>
              </div>
              <Button
                variant="outline"
                onClick={handleRegenerate}
                className="border-[#1E3E62]/20"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Regenerate
              </Button>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-[#1E3E62]/20 py-8">
            <p className="text-sm text-[#1E3E62]/60">No API key generated yet</p>
            <Button
              onClick={handleRegenerate}
              className="mt-4 bg-[#FF6500] text-white hover:bg-[#FF6500]/90"
            >
              Generate API Key
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

