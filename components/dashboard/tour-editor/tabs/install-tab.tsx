"use client";

import { useState } from "react";
import { Copy, Check, RefreshCw } from "lucide-react";
import { Doc } from "@/convex/_generated/dataModel";
import { useApiKey } from "@/hooks/use-api-key";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface InstallTabProps {
    tour: Doc<"tours">;
}

export function InstallTab({ tour }: InstallTabProps) {
    const { apiKey, isLoading, create, regenerate } = useApiKey();
    const [copied, setCopied] = useState(false);
    const [copiedKey, setCopiedKey] = useState(false);
    const [testMode, setTestMode] = useState(false);

    const embedCode = `<script src="https://widget.walkmanjs.com/tour.js" data-tour-id="${tour._id}" data-api-key="${apiKey?.key || "YOUR_API_KEY"}"></script>`;

    const handleCopy = async (text: string, setCopiedState: (v: boolean) => void) => {
        await navigator.clipboard.writeText(text);
        setCopiedState(true);
        setTimeout(() => setCopiedState(false), 2000);
    };

    const handleGenerateKey = async () => {
        if (apiKey) {
            await regenerate();
        } else {
            await create({});
        }
    };

    return (
        <div className="max-w-2xl space-y-6">
            <div>
                <h2 className="text-lg font-semibold text-[#0B192C]">Installation</h2>
                <p className="text-sm text-[#1E3E62]/60">
                    Add this code to your website to enable the tour.
                </p>
            </div>

            <div className="space-y-4 rounded-xl border border-[#1E3E62]/10 bg-white p-6">
                <div className="space-y-2">
                    <Label className="text-[#0B192C]">Embed Code</Label>
                    <div className="relative">
                        <pre className="overflow-x-auto rounded-lg bg-[#0B192C] p-4 text-sm text-[#FBFBFB]">
                            <code>{embedCode}</code>
                        </pre>
                        <Button
                            size="icon"
                            variant="ghost"
                            className="absolute right-2 top-2 h-8 w-8 text-[#FBFBFB] hover:bg-white/10"
                            onClick={() => handleCopy(embedCode, setCopied)}
                        >
                            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                    </div>
                </div>

                <div className="space-y-2">
                    <Label className="text-[#0B192C]">API Key</Label>
                    {isLoading ? (
                        <div className="h-10 animate-pulse rounded-lg bg-[#1E3E62]/10" />
                    ) : apiKey ? (
                        <div className="flex gap-2">
                            <Input
                                value={apiKey.key}
                                readOnly
                                className="flex-1 border-[#1E3E62]/20 font-mono text-sm"
                            />
                            <Button
                                size="icon"
                                variant="outline"
                                className="border-[#1E3E62]/20"
                                onClick={() => handleCopy(apiKey.key, setCopiedKey)}
                            >
                                {copiedKey ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                            </Button>
                            <Button
                                size="icon"
                                variant="outline"
                                className="border-[#1E3E62]/20"
                                onClick={handleGenerateKey}
                            >
                                <RefreshCw className="h-4 w-4" />
                            </Button>
                        </div>
                    ) : (
                        <Button
                            onClick={handleGenerateKey}
                            className="bg-[#FF6500] text-white hover:bg-[#FF6500]/90"
                        >
                            Generate API Key
                        </Button>
                    )}
                </div>

                <div className="flex items-center justify-between rounded-lg bg-[#1E3E62]/5 p-4">
                    <div>
                        <Label className="text-[#0B192C]">Test Mode</Label>
                        <p className="text-sm text-[#1E3E62]/60">
                            Preview the tour without affecting analytics
                        </p>
                    </div>
                    <Switch checked={testMode} onCheckedChange={setTestMode} />
                </div>
            </div>

            <div className="rounded-xl border border-[#1E3E62]/10 bg-white p-6">
                <h3 className="font-semibold text-[#0B192C]">Installation Steps</h3>
                <ol className="mt-4 space-y-3 text-sm text-[#1E3E62]/80">
                    <li className="flex gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF6500]/10 text-xs font-semibold text-[#FF6500]">
                            1
                        </span>
                        <span>Copy the embed code above</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF6500]/10 text-xs font-semibold text-[#FF6500]">
                            2
                        </span>
                        <span>
                            Paste it before the closing <code className="rounded bg-[#1E3E62]/10 px-1">&lt;/body&gt;</code> tag
                        </span>
                    </li>
                    <li className="flex gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF6500]/10 text-xs font-semibold text-[#FF6500]">
                            3
                        </span>
                        <span>Set the tour status to &quot;Active&quot;</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF6500]/10 text-xs font-semibold text-[#FF6500]">
                            4
                        </span>
                        <span>Visit your website to see the tour in action</span>
                    </li>
                </ol>
            </div>
        </div>
    );
}

